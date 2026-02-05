import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "../sanity"; // <-- Använder den nya filen
import { PortableText } from "@portabletext/react";
import { Loader2, ArrowLeft, Calendar } from "lucide-react";

// (Du behöver inte Navbar/Footer här om de ligger i App.tsx, vilket de gör nu)

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug][0]{
        title,
        mainImage,
        body,
        publishedAt
      }`,
        { slug }
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
        
        {/* Tillbaka-knapp som går till Works istället för Hem */}
        <div className="mb-8">
          <Link 
            to="/utforda-arbeten" 
            className="text-muted-foreground hover:text-primary font-medium flex items-center gap-2 transition-colors inline-block"
          >
            <ArrowLeft className="w-4 h-4" />
            Tillbaka till alla arbeten
          </Link>
        </div>

        {/* Stor bild högst upp */}
        {post.mainImage && (
          <div className="rounded-3xl overflow-hidden shadow-lg mb-8 aspect-video">
             <img
              src={urlFor(post.mainImage).width(1200).height(675).url()}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Titel och datum */}
        <div className="mb-8">
           <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">{post.title}</h1>
           {post.publishedAt && (
             <div className="flex items-center gap-2 text-muted-foreground">
               <Calendar className="w-4 h-4" />
               <time>{new Date(post.publishedAt).toLocaleDateString("sv-SE")}</time>
             </div>
           )}
        </div>

        {/* Texten från Sanity */}
        <div className="prose prose-lg max-w-none text-muted-foreground prose-headings:font-serif prose-headings:text-foreground prose-a:text-primary">
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p className="text-gray-500 italic">Ingen text tillgänglig.</p>
          )}
        </div>
      </main>

    </div>
  );
}