import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // <--- Denna gör att vi kan länka
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Inställningar för Sanity
const client = createClient({
  projectId: 'dyulh476',
  dataset: 'production',
  useCdn: false, // Hämtar alltid ny data
  apiVersion: '2023-01-01',
});

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: any;
}

export default function News() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // VIKTIGT: Vi hämtar 'slug' här för att kunna bygga länken
    client.fetch(`*[_type == "post"]{_id, title, slug, mainImage}`).then((data) => {
      setPosts(data);
    }).catch(console.error);
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Senaste nytt</h2>
        
        {posts.length === 0 && (
          <p className="text-center text-gray-500">Laddar nyheter...</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            // HÄR ÄR MAGIN: Vi kollar om slug finns, sen lägger vi en Link runt allt
            post.slug?.current ? (
              <Link to={`/post/${post.slug.current}`} key={post._id} className="block group">
                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full border border-gray-100 cursor-pointer">
                  {post.mainImage && (
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={urlFor(post.mainImage).width(600).height(400).url()} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <span className="text-sm text-primary font-medium group-hover:underline">
                      Läs mer →
                    </span>
                  </div>
                </article>
              </Link>
            ) : (
              // Om något är fel med slugen i Sanity, visa kortet men utan länk (för säkerhets skull)
              <article key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden opacity-50">
                 <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-red-500 text-sm">Saknar länk (slug)</p>
                 </div>
              </article>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
