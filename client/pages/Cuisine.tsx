import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
            {t("cuisine.hero.title")}
          </h1>
          <p className="mt-4 text-lg font-body opacity-90">
            {t("cuisine.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6">
            {t("cuisine.introduction.title")}
          </h2>
          <p className="text-lg font-body text-muted-foreground text-center leading-relaxed">
            {t("cuisine.introduction.description")}
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            {t("cuisine.philosophy.title")}
          </h2>

          <div className="space-y-12">
            {[
              {
                title: t("cuisine.philosophy.seasonal.title"),
                description: t("cuisine.philosophy.seasonal.description"),
              },
              {
                title: t("cuisine.philosophy.traditional.title"),
                description: t("cuisine.philosophy.traditional.description"),
              },
              {
                title: t("cuisine.philosophy.regional.title"),
                description: t("cuisine.philosophy.regional.description"),
              },
              {
                title: t("cuisine.philosophy.artisanal.title"),
                description: t("cuisine.philosophy.artisanal.description"),
              },
            ].map((item) => (
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

      {/* Cuisine Highlights */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            {t("cuisine.highlights.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: t("cuisine.highlights.classic.title"),
                items: t("cuisine.highlights.classic.items"),
              },
              {
                title: t("cuisine.highlights.refined.title"),
                items: t("cuisine.highlights.refined.items"),
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-2xl font-serif font-bold mb-8">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span className="font-body text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
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
              Customization & Dietary Adaptations
            </h3>

            <p className="text-lg font-body text-muted-foreground mb-4 leading-relaxed">
              Every guest deserves an exceptional culinary experience. Should you have specific dietary requirements, allergies, or preferences, we adapt our menus to accommodate your needs without compromising quality or refinement.
            </p>

            <p className="text-lg font-body font-bold text-primary mb-4">
              No additional charges apply – the price remains unchanged with all adaptations included.
            </p>

            <p className="text-lg font-body text-muted-foreground">
              Please inform us of any allergies, intolerances, or special dietary requirements when booking so we can safely and deliciously adapt our dishes.
            </p>
          </div>
        </div>
      </section>

      {/* Specific Requests */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Custom Requests & Different Cuisines
          </h2>

          <p className="text-lg font-body text-muted-foreground mb-8 leading-relaxed">
            While Maison Gauthier specializes in French cuisine, we recognize that guests may have specific culinary interests or requests. If you would like a different cuisine or have particular preferences, please let us know when you first contact us so we can consider your request.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
          >
            Contact Us for Special Requests
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Experience French Gastronomy
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-8">
            Discover the refined taste of French cuisine through Maison Gauthier's private services
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
          >
            Reserve Your Experience
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
