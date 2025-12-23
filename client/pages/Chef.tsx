import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Chef() {
  const milestones = [
    {
      year: "2004",
      title: "Diplôme CAP Cuisine",
      description: "Formation auprès des meilleurs chefs français à Lyon",
    },
    {
      year: "2008",
      title: "Restaurant Étoilé",
      description: "Chef de partie au Michelin 2 étoiles en Provence",
    },
    {
      year: "2012",
      title: "Cuisine Privée",
      description: "Transition vers le service privé pour clientèle haut de gamme",
    },
    {
      year: "2018",
      title: "Chef Indépendant",
      description: "Création de mon statut de chef cuisinier privé indépendant",
    },
  ];

  const values = [
    {
      title: "French Culinary Art",
      description: "Bringing the art of French cuisine into homes around the world with unwavering dedication to gastronomy.",
    },
    {
      title: "Local Producers",
      description: "Exclusive partnerships with local producers guaranteeing quality, authenticity, and seasonal freshness.",
    },
    {
      title: "Warm Hospitality",
      description: "Creating an environment where guests feel at ease with attentive and authentic service.",
    },
    {
      title: "Bespoke Experience",
      description: "Personalized menus and service tailored to individual preferences and special requirements.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1589985643959-e4e5a56e5246?auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">About Maison Gauthier</h1>
          <p className="mt-4 text-lg font-body opacity-90">
            Story, Philosophy and Culinary Excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Chef Portrait and Intro */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552058544-f6b08422138a?auto=format&fit=crop&w=600&h=700&q=80"
                alt="Chef Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                Our Story
              </h2>
              <p className="text-lg font-body text-muted-foreground mb-4 leading-relaxed">
                Maison Gauthier was born from the ambition of a French chef and restaurateur to bring the art of French cuisine into homes around the world. With a passion for gastronomy and a commitment to excellence, we create private gastronomic experiences for VIP clients worldwide.
              </p>
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                Every experience is meticulously crafted with attention to every detail. We believe that exceptional cuisine should be accessible in the privacy and comfort of your own home, whether in a villa, yacht, or residence.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mb-20 p-12 bg-secondary/30 border border-border">
            <h3 className="text-3xl font-serif font-bold mb-6">Our Philosophy</h3>
            <p className="text-lg font-body text-muted-foreground leading-relaxed mb-4">
              Maison Gauthier's philosophy is based on creating a warm environment where everyone can feel at ease, while enjoying attentive and authentic service guided by deep-rooted values. We believe that true hospitality comes from understanding and anticipating the needs of our guests.
            </p>
            <p className="text-lg font-body text-muted-foreground leading-relaxed mb-4">
              We work exclusively with local producers whose expertise and high standards guarantee the quality and authenticity of each selected product. Our cuisine is rooted in French tradition, evolving with seasonal inspirations and the creativity of our talented chef.
            </p>
            <p className="text-lg font-body text-muted-foreground leading-relaxed">
              Every menu is bespoke, every service is unique. We do not simply execute recipes – we craft gastronomic experiences perfectly tailored to your expectations, preferences, and special requirements.
            </p>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h3 className="text-3xl font-serif font-bold mb-12 text-center">
              Mes Valeurs Fondamentales
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="p-8 border border-border">
                  <h4 className="text-2xl font-serif font-bold mb-3">
                    {value.title}
                  </h4>
                  <p className="font-body text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Journey */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-12 text-center">
              Parcours Professionnel
            </h3>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex gap-8 items-start"
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-serif font-bold text-lg">
                      {milestone.year.substring(2)}
                    </div>
                    {index !== milestones.length - 1 && (
                      <div className="w-1 h-24 bg-border mt-4"></div>
                    )}
                  </div>

                  <div className="pt-2 flex-1">
                    <h4 className="text-2xl font-serif font-bold mb-2">
                      {milestone.title}
                    </h4>
                    <p className="font-body text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Découvrez Mes Prestations
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-8">
            Dîners privés, événements exclusifs, menus sur-mesure...
          </p>
          <Link
            to="/prestations"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
          >
            Voir Mes Prestations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
