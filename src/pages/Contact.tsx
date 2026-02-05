import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react"; // <--- 1. Importera detta

const Contact = () => {
  // 2. Koppla ditt formulär här! 
  // Byt ut "DITT_FORMSPREE_ID" mot din kod (t.ex. "xyzkqwpb")
  const [state, handleSubmit] = useForm("maqdwape");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      
      {/* --- HEADER --- */}
      {/* Här satte jag pt-32 så att rubriken hamnar nedanför menyn */}
      <section className="bg-secondary/30 pt-32 pb-20">
        <div className="container text-center max-w-3xl">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 block">
            Hör av dig
          </span>
          <h1 className="text-4xl md:text-5xl font-serif mb-6 animate-fade-in">
            Kontakta oss
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
            Har du ett projekt på gång eller behöver akut hjälp? 
            Vi finns här för att svara på dina frågor och ge dig en kostnadsfri offert.
          </p>
        </div>
      </section>

      {/* --- KONTAKTSEKTION --- */}
      <section className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* VÄNSTER: Kontaktuppgifter */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-serif mb-6">Kontaktuppgifter</h2>
              <div className="space-y-6">
                
                {/* Telefon */}
                <a 
                  href="tel:0703992952" 
                  className="flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary/50 hover:shadow-md transition-all group bg-card"
                >
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground mb-1">Ring oss</p>
                    <p className="text-xl font-semibold text-foreground">070-399 29 52</p>
                    <p className="text-sm text-muted-foreground mt-1">Öppet vardagar 07:00 - 16:00</p>
                  </div>
                </a>

                {/* Mail */}
                <a 
                  href="mailto:Elisoder@outlook.com" 
                  className="flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary/50 hover:shadow-md transition-all group bg-card"
                >
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground mb-1">Mejla oss</p>
                    <p className="text-xl font-semibold text-foreground break-all">Elisoder@outlook.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Vi svarar inom 24 timmar</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-secondary/20 p-8 rounded-3xl">
              <h3 className="text-xl font-serif mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Var jobbar vi?
              </h3>
              <p className="text-muted-foreground">
                Vi utgår från Nättraby och tar uppdrag i hela Karlskrona med omnejd, samt större delar av Blekinge.
              </p>
            </div>
          </div>

          {/* HÖGER: Formulär - Kopplat till Formspree */}
          <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border/50 h-fit relative">
            
            {/* Om mailet har skickats, visa TACK-ruta istället för formulär */}
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-serif mb-4">Tack för ditt meddelande!</h3>
                <p className="text-muted-foreground text-lg max-w-md">
                  Vi har tagit emot din förfrågan och återkommer till dig så snart vi kan.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-serif mb-2">Skicka ett meddelande</h2>
                <p className="text-muted-foreground mb-8">Fyll i formuläret så återkommer vi så snart vi kan.</p>
                
                {/* handleSubmit kommer från useForm-hooken */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Namn</label>
                      <input 
                        id="name" 
                        name="name" // VIKTIGT FÖR FORMSPREE
                        type="text" 
                        required
                        placeholder="Ditt namn"
                        className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Telefon</label>
                      <input 
                        id="phone" 
                        name="phone" // VIKTIGT FÖR FORMSPREE
                        type="tel" 
                        placeholder="070..."
                        className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">E-post</label>
                    <input 
                      id="email" 
                      name="email" // VIKTIGT FÖR FORMSPREE
                      type="email" 
                      required
                      placeholder="din.email@exempel.se"
                      className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Vad kan vi hjälpa till med?</label>
                    <textarea 
                      id="message" 
                      name="message" // VIKTIGT FÖR FORMSPREE
                      required
                      placeholder="Beskriv ditt ärende..."
                      className="flex min-h-[150px] w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full rounded-full h-12 text-lg"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Skickar..." : (
                      <>Skicka meddelande <Send className="w-4 h-4 ml-2" /></>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;