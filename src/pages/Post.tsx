import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "../sanity";
import { PortableText } from "@portabletext/react";
import { Loader2, ArrowLeft, Calendar } from "lucide-react";
import Seo from "@/components/Seo";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  const extractPortableText = (value: any) => {
    if (!Array.isArray(value)) return "";

    return value
      .flatMap((block) => {
        if (!Array.isArray(block?.children)) return [];
        return block.children.map((child: any) => child?.text ?? "");
      })
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
  };

  useEffect(() => {
    client
      .fetch(
        // 1. HÄR LADE VI TILL "gallery" I FRÅGAN:
        `*[slug.current == $slug][0]{
        title,
        mainImage,
        gallery, 
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
      <Seo
        title={post.title ?? "Projekt"}
        description={
          extractPortableText(post.body).slice(0, 150) ||
          "Projekt och utförda arbeten från El i Söder inom elinstallation, energi och smarta lösningar."
        }
        path={`/post/${slug ?? ""}`}
        ogImage={post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined}
        type="article"
      />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
        
        {/* Tillbaka-knapp */}
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
        <div className="prose prose-lg max-w-none text-muted-foreground prose-headings:font-serif prose-headings:text-foreground prose-a:text-primary mb-12">
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p className="text-gray-500 italic">Ingen text tillgänglig.</p>
          )}
        </div>

        {/* 2. HÄR ÄR DET NYA BILDGALLERIET */}
        {post.gallery && post.gallery.length > 0 && (
          <div className="mt-16 pt-8 border-t border-border/50">
            <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Fler bilder från projektet</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {post.gallery.map((image: any, index: number) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-md aspect-video bg-secondary group">
                  <img
                    src={urlFor(image).width(800).height(600).url()}
                    alt={`${post.title} - galleribild ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}