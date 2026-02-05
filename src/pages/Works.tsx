import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../sanity"; // Hämtar från filen vi skapade i steg 1
import { Loader2, ArrowRight, Calendar } from "lucide-react";

// Definiera hur en Post ser ut
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
}

const Works = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hämtar alla inlägg sorterade på datum
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt
    }`;

    client.fetch(query)
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Kunde inte hämta projekt:", error);
        setIsLoading(false);
      });
  }, []);

  // Formatera datum snyggt (t.ex. "2024-02-15")
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("sv-SE");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* (Navbar ligger redan i App.tsx) */}
      
      <main className="flex-grow">
        {/* --- Header --- */}
        <section className="bg-secondary/30 py-24">
          <div className="container max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6 animate-fade-in">
              Våra utförda arbeten
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Här samlar vi ett urval av våra projekt. Från smarta hem-lösningar till 
              större installationer. Klicka på ett projekt för att se bilder och läsa mer.
            </p>
          </div>
        </section>

        {/* --- Projekt Grid --- */}
        <section className="container py-16">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Inga projekt upplagda än.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link 
                  key={post._id} 
                  to={`/post/${post.slug.current}`}
                  className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Bilden - Tvingad till 16:9 format (aspect-video) */}
                  <div className="relative aspect-video overflow-hidden bg-secondary">
                    {post.mainImage ? (
                      <img
                        src={urlFor(post.mainImage).width(800).height(450).url()}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        Bild saknas
                      </div>
                    )}
                    
                    {/* Datum-badge */}
                    {post.publishedAt && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground shadow-sm flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.publishedAt)}
                      </div>
                    )}
                  </div>

                  {/* Text under bilden */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-serif mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <div className="mt-auto pt-4 flex items-center text-primary font-medium text-sm">
                      Se projektet <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      
      {/* (Footer ligger redan i App.tsx) */}
    </div>
  );
};

export default Works;