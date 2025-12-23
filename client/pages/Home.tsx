import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import Layout from "@/components/Layout";

export default function Home() {
  const specialties = [
    {
      title: "Personal Chef at Home",
      description:
        "Dedicated culinary service for your residence with tailor-made menus and elegant service.",
      icon: "🏠",
    },
    {
      title: "Private Receptions",
      description:
        "Exquisite dinners for intimate gatherings or grand celebrations with refined cuisine.",
      icon: "🍽️",
    },
    {
      title: "On-Board Service",
      description:
        "Exceptional culinary experiences aboard yachts and luxury vessels worldwide.",
      icon: "⛵",
    },
    {
      title: "Event Management",
      description:
        "Complete gastronomic coordination for weddings, galas, and exclusive events.",
      icon: "✨",
    },
    {
      title: "Long-Term Stays",
      description:
        "Comprehensive culinary comfort for extended villa and residence stays.",
      icon: "🗓️",
    },
    {
      title: "Local Producers",
      description:
        "Working exclusively with local producers to guarantee quality and authenticity.",
      icon: "🌾",
    },
  ];

  const portfolioPreview = [
    {
      title: "Homard Grillé",
      category: "Plats",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      title: "Dressage Raffiné",
      category: "Dressage",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      title: "Gala Privé",
      category: "Événements",
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      title: "Table d'Excellenc",
      category: "Tables",
      image:
        "https://images.unsplash.com/photo-1504674900968-45cc10deda4c?auto=format&fit=crop&w=500&h=500&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Madame de Montfort",
      role: "Cliente Privée",
      text: "Une excellence gastronomique rare. Le chef comprend chaque détail d'une soirée réussie.",
      rating: 5,
    },
    {
      name: "Monsieur Laurent",
      role: "Directeur Événementiel",
      text: "Professionnel hors-pair. Ses créations culinaires émerveillent chaque fois.",
      rating: 5,
    },
    {
      name: "Sophie Blanc",
      role: "Propriétaire Villa Côte d'Azur",
      text: "Service impeccable et cuisine d'exception. Les invités ne tarissent pas d'éloges.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1577431537627-90ff93245f98?auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <div className="mb-6 inline-block">
            <div className="flex items-center gap-2 text-white font-body text-sm tracking-widest">
              <Leaf className="w-4 h-4" />
              PRIVATE FRENCH GASTRONOMY
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Welcome to<br />Maison Gauthier
          </h1>

          <p className="text-lg md:text-xl font-body mb-8 opacity-95 max-w-2xl mx-auto">
            Maison Gauthier was born from the ambition of a French chef to bring the art of French cuisine into homes around the world. Creating private gastronomic experiences for VIP clients.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body text-sm hover:opacity-90 transition-opacity"
          >
            Reserve Your Experience
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Chef Introduction */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=700&q=80"
              alt="Chef Portrait"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Philosophy
            </h2>

            <p className="text-lg font-body mb-4 text-muted-foreground leading-relaxed">
              Maison Gauthier's philosophy is based on creating a warm environment where everyone can feel at ease, while enjoying attentive and authentic service guided by deep-rooted values.
            </p>

            <p className="text-lg font-body mb-6 text-muted-foreground leading-relaxed">
              Operating internationally, we bring the French art of living to receptions, private dinners, and long-term stays. From gastronomy to service, every detail is carefully thought out and executed to offer a harmonious and refined experience.
            </p>

            <Link
              to="/chef"
              className="inline-flex items-center gap-2 text-accent font-body hover:opacity-80 transition-opacity"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mediterranean Specialties */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Spécialités Méditerranéennes
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Explorez les saveurs authentiques des cuisines les plus prestigieuses
              du bassin méditerranéen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty) => (
              <div
                key={specialty.title}
                className="p-8 bg-background border border-border hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-3">
                  {specialty.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Portfolio Culinaire
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Découvrez une sélection de mes créations et réalisations récentes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioPreview.map((item) => (
              <Link
                key={item.title}
                to="/portfolio"
                className="group relative overflow-hidden bg-secondary"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex flex-col items-end justify-end p-4">
                  <div className="text-white text-right">
                    <p className="text-xs font-body text-accent mb-1">
                      {item.category}
                    </p>
                    <h4 className="font-serif font-bold text-lg">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-foreground text-foreground font-body hover:bg-foreground hover:text-background transition-colors"
            >
              Voir la Galerie Complète
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Témoignages Clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-8 bg-background border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>

                <p className="font-body text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div>
                  <p className="font-serif font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm font-body text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Prêt pour une Expérience Culinaire Exceptionnelle ?
          </h2>

          <p className="text-lg font-body text-muted-foreground mb-8">
            Contactez-moi pour discuter de votre événement ou de votre prestation
            culinaire. Ensemble, nous créerons des moments inoubliables.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
          >
            Réserver Maintenant
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
