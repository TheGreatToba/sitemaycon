import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/useTranslation";

export default function Chef() {
  const { t } = useTranslation();
  const milestones = [
    {
      year: "Founded",
      title: "Maison Gauthier Creation",
      description: "Born from the ambition to bring French culinary art into homes around the world",
    },
    {
      year: "Development",
      title: "Global Expansion",
      description: "Operating internationally with services in France and destinations worldwide",
    },
    {
      year: "Excellence",
      title: "VIP Clientele",
      description: "Serving distinguished clients including private residences, villas, yachts and luxury venues",
    },
    {
      year: "Today",
      title: "Premium Service",
      description: "Continuing to deliver exceptional private gastronomic experiences with uncompromising excellence",
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold">{t('chef.title')}</h1>
          <p className="mt-4 text-lg font-body opacity-90">
            {t('home.philosophy.title')}, {t('cuisine.title')}
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
                src="https://cdn.builder.io/api/v1/image/assets%2F338235b4070241daa4397607e89424e7%2F4ba354f460e24f52a685b922f268295a?format=webp&width=800"
                alt="Chef Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                {t('home.philosophy.title')}
              </h2>
              <div className="prose prose-sm max-w-none">
                {t('chef.content').split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg font-body text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mb-20 p-12 bg-secondary/30 border border-border">
            <h3 className="text-3xl font-serif font-bold mb-6">{t('home.philosophy.title')}</h3>
            <div className="prose prose-sm max-w-none">
              <p className="text-lg font-body text-muted-foreground leading-relaxed mb-4">
                {t('home.philosophy.description1')}
              </p>
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                {t('home.philosophy.description2')}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h3 className="text-3xl font-serif font-bold mb-12 text-center">
              {t('home.services.title')}
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

          {/* Certifications */}
          <div className="mb-20">
            <h3 className="text-3xl font-serif font-bold mb-12 text-center">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {t('chef.certifications').map((cert) => (
                <div key={cert.title} className="p-8 bg-secondary/30 border border-border">
                  <h4 className="text-2xl font-serif font-bold mb-3">
                    {cert.title}
                  </h4>
                  <p className="font-body text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Journey */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-12 text-center">
              {t('home.services.title')}
            </h3>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex gap-8 items-start"
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-32 h-32 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-serif font-bold text-lg text-center px-4 py-2">
                      {milestone.year}
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
            {t('home.finalCta.title')}
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-8">
            {t('home.finalCta.description')}
          </p>
          <Link
            to="/prestations"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
          >
            {t('home.portfolio.viewGallery')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
