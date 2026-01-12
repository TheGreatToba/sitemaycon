import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/useTranslation";

export default function Cuisine() {
  const { t } = useTranslation();
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">
            {t('cuisine.title')}
          </h1>
          <p className="mt-4 text-lg font-body opacity-90">
            {t('home.philosophy.title')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6">
            {t('cuisine.title')}
          </h2>
          <p className="text-lg font-body text-muted-foreground text-center leading-relaxed">
            {t('cuisine.description')}
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            {t('home.philosophy.title')}
          </h2>

          <div className="space-y-12">
            {t('cuisine.highlights').map((item) => (
              <div key={item.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine Types */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            {t('home.services.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {t('cuisine.cuisineTypes').map((cuisine) => (
              <div key={cuisine.title}>
                <h3 className="text-2xl font-serif font-bold mb-4">
                  {cuisine.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {cuisine.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dietary Adaptations */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 border-l-4 border-primary bg-secondary/30">
            <h3 className="text-3xl font-serif font-bold mb-6">
              {t('prestations.dietaryAdaptations')}
            </h3>

            <p className="text-lg font-body text-muted-foreground mb-4 leading-relaxed">
              {t('prestations.dietaryAdaptationsText')}
            </p>

            <p className="text-lg font-body font-bold text-primary mb-4">
              {t('home.philosophy.description1')}
            </p>

            <p className="text-lg font-body text-muted-foreground">
              {t('prestations.dietaryAdaptationsText')}
            </p>
          </div>
        </div>
      </section>

      {/* Specific Requests */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            {t('home.finalCta.title')}
          </h2>

          <p className="text-lg font-body text-muted-foreground mb-8 leading-relaxed">
            {t('home.finalCta.description')}
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
          >
            {t('home.finalCta.cta')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            {t('cuisine.title')}
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-8">
            {t('cuisine.description')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
          >
            {t('home.hero.cta')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
