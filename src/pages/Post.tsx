import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // <-- 1. Vi lade till Link här
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const client = createClient({
  projectId: "dyulh476",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
});

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug][0]{
        title,
        mainImage,
        body
      }`,
        { slug }
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Laddar...
      </div>
    );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
        
        {/* --- NYTT: TILLBAKA-KNAPP --- */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition-colors"
          >
            ← Tillbaka till startsidan
          </Link>
        </div>
        {/* --------------------------- */}

        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            className="w-full h-auto rounded-lg shadow-md mb-8"
          />
        )}

        <h1 className="text-4xl font-bold mb-6 text-primary">{post.title}</h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p className="text-gray-500 italic">Ingen text tillgänglig.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
