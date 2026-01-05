import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import Layout from "@/components/Layout";
import { useTranslation } from "@/lib/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  const specialties = t('home.services.servicesList');

  const portfolioPreview = [
    {
      title: "Homard Grillé",
      category: t('portfolio.categories.dishes'),
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      title: "Dressage Raffiné",
      category: t('portfolio.categories.presentation'),
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      title: "Gala Privé",
      category: t('portfolio.categories.events'),
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=500&h=500&q=80",
    },
    {
      title: "Table d'Excellence",
      category: t('portfolio.categories.tables'),
      image:
        "https://images.unsplash.com/photo-1504674900968-45cc10deda4c?auto=format&fit=crop&w=500&h=500&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Madame de Montfort",
      role: "Private Client",
      text: "Rare culinary excellence. The chef understands every detail of a successful evening.",
      rating: 5,
    },
    {
      name: "Monsieur Laurent",
      role: "Event Director",
      text: "Outstanding professional. His culinary creations amaze every single time.",
      rating: 5,
    },
    {
      name: "Sophie Blanc",
      role: "Côte d'Azur Villa Owner",
      text: "Impeccable service and exceptional cuisine. Our guests cannot praise it enough.",
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
              src="https://cdn.builder.io/api/v1/image/assets%2F338235b4070241daa4397607e89424e7%2F4ba354f460e24f52a685b922f268295a?format=webp&width=800"
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

      {/* Services & Specialties */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Services
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Maison Gauthier accompanies you with a range of services tailored to your needs. Every service is designed as a unique creation.
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
              Culinary Portfolio
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Discover a selection of our creations and recent achievements in gastronomic excellence.
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
              View Full Gallery
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
              Client Testimonials
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
            Ready for an Exceptional Culinary Experience?
          </h2>

          <p className="text-lg font-body text-muted-foreground mb-8">
            Contact us to discuss your event or culinary needs. Together, we will create unforgettable moments of gastronomy and refinement.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
