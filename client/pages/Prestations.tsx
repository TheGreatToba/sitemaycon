import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Prestations() {
  const { t } = useTranslation();
  const chapters = [
    {
      title: t("prestations.chapter1.title"),
      subtitle: t("prestations.chapter1.subtitle"),
      description: t("prestations.chapter1.description"),
      services: t("prestations.chapter1.services"),
      options: [
        {
          title: t("prestations.chapter1.breakfast.title"),
          description: t("prestations.chapter1.breakfast.description"),
        },
        {
          title: t("prestations.chapter1.lunch.title"),
          description: t("prestations.chapter1.lunch.description"),
        },
        {
          title: t("prestations.chapter1.tea.title"),
          description: t("prestations.chapter1.tea.description"),
        },
        {
          title: t("prestations.chapter1.dinner.title"),
          description: t("prestations.chapter1.dinner.description"),
        },
      ],
      image: "https://images.unsplash.com/photo-1504674900968-45cc10deda4c?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      title: t("prestations.chapter2.title"),
      subtitle: t("prestations.chapter2.subtitle"),
      description: t("prestations.chapter2.description"),
      services: t("prestations.chapter2.services"),
      options: [
        {
          title: t("prestations.chapter2.dinnerOnly.title"),
          description: t("prestations.chapter2.dinnerOnly.description"),
        },
        {
          title: t("prestations.chapter2.halfDay.title"),
          description: t("prestations.chapter2.halfDay.description"),
        },
        {
          title: t("prestations.chapter2.fullPackage.title"),
          description: t("prestations.chapter2.fullPackage.description"),
        },
        {
          title: t("prestations.chapter2.residentChef.title"),
          description: t("prestations.chapter2.residentChef.description"),
        },
      ],
      image: "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=800&h=600&q=80",
    },
  ];

  const starters = [
    {
      title: t("prestations.menu.duckFoieGras.title"),
      description: t("prestations.menu.duckFoieGras.description"),
    },
    {
      title: t("prestations.menu.mimosaEggs.title"),
      description: t("prestations.menu.mimosaEggs.description"),
    },
    {
      title: t("prestations.menu.croqueMonsieur.title"),
      description: t("prestations.menu.croqueMonsieur.description"),
    },
    {
      title: t("prestations.menu.vegetableTian.title"),
      description: t("prestations.menu.vegetableTian.description"),
    },
    {
      title: t("prestations.menu.salmonBallotine.title"),
      description: t("prestations.menu.salmonBallotine.description"),
    },
    {
      title: t("prestations.menu.langoustineRavioli.title"),
      description: t("prestations.menu.langoustineRavioli.description"),
    },
  ];

  const mains = [
    {
      title: t("prestations.menu.lambRack.title"),
      description: t("prestations.menu.lambRack.description"),
    },
    {
      title: t("prestations.menu.beefWellington.title"),
      description: t("prestations.menu.beefWellington.description"),
    },
    {
      title: t("prestations.menu.duckBreast.title"),
      description: t("prestations.menu.duckBreast.description"),
    },
    {
      title: t("prestations.menu.soleMenuere.title"),
      description: t("prestations.menu.soleMenuere.description"),
    },
    {
      title: t("prestations.menu.pepperSteak.title"),
      description: t("prestations.menu.pepperSteak.description"),
    },
    {
      title: t("prestations.menu.duckParmentier.title"),
      description: t("prestations.menu.duckParmentier.description"),
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
              'url("https://images.unsplash.com/photo-1504674900968-45cc10deda4c?auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">{t("prestations.hero.title")}</h1>
          <p className="mt-4 text-lg font-body opacity-90">
            {t("prestations.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {chapters.map((chapter, index) => (
            <div key={chapter.title}>
              {/* Chapter Header */}
              <div className={`grid md:grid-cols-2 gap-12 items-center mb-12 ${index % 2 === 1 ? "md:[&>*]:order-2" : ""}`}>
                <div className="relative overflow-hidden bg-secondary h-96">
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <div className="inline-block mb-4">
                    <div className="text-sm font-body text-primary tracking-widest uppercase">
                      {chapter.subtitle}
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                    {chapter.title}
                  </h2>

                  <p className="text-lg font-body text-muted-foreground mb-6">
                    {chapter.description}
                  </p>

                  <div className="space-y-3">
                    {chapter.services.map((service) => (
                      <div key={service} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-body text-muted-foreground">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Chapter Options */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {chapter.options.map((option) => (
                  <div key={option.title} className="p-6 border border-border bg-background">
                    <h4 className="font-serif font-bold mb-3 text-lg">
                      {option.title}
                    </h4>
                    <p className="font-body text-muted-foreground text-sm">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>

              {index < chapters.length - 1 && (
                <div className="border-t border-border my-16"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {t("prestations.menu.title")}
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              All dishes are homemade using seasonal and local ingredients. Maison Gauthier works exclusively with local producers whose expertise and high standards guarantee the quality and authenticity of each selected product.
            </p>
          </div>

          {/* Starters */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-8 text-center">
              {t("prestations.menu.starters")}
            </h3>
            <div className="space-y-6">
              {starters.map((dish) => (
                <div key={dish.title} className="border-b border-border pb-6 last:border-0">
                  <h4 className="text-xl font-serif font-bold text-primary mb-2">
                    {dish.title}
                  </h4>
                  <p className="font-body text-muted-foreground">
                    {dish.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Courses */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-8 text-center">
              Main Courses
            </h3>
            <div className="space-y-6">
              {mains.map((dish) => (
                <div key={dish.title} className="border-b border-border pb-6 last:border-0">
                  <h4 className="text-xl font-serif font-bold text-primary mb-2">
                    {dish.title}
                  </h4>
                  <p className="font-body text-muted-foreground">
                    {dish.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Adaptations */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 border-l-4 border-primary bg-secondary/30">
            <h3 className="text-3xl font-serif font-bold mb-6">
              Food Intolerances & Dietary Adaptations
            </h3>

            <p className="text-lg font-body text-muted-foreground mb-4 leading-relaxed">
              Because every guest deserves a harmonious culinary experience, a menu fully adapted to food intolerances or restrictions can be prepared on request, without compromising the quality or refinement of the dishes.
            </p>

            <p className="text-lg font-body font-bold text-primary mb-4">
              No extra charge applies: the price remains unchanged, with specific ingredients and service included in the experience.
            </p>

            <p className="text-lg font-body text-muted-foreground">
              For those with allergies, intolerances, or dietary restrictions, please let us know before placing your order so that we can safely adapt our dishes.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Important Information
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Turnkey Service",
                description:
                  "Maison Gauthier is a company that offers a turnkey service: you don't have to worry about a thing.",
              },
              {
                title: "Groceries & Pricing",
                description:
                  "Groceries are charged as an extra. A 30% deposit is required to confirm the order, with the balance due at the end of the service.",
              },
              {
                title: "Equipment & Travel",
                description:
                  "The chef has all the equipment needed to provide the service. Travel expenses are covered by Maison Gauthier.",
              },
              {
                title: "Payment Methods",
                description:
                  "Payments can be made in cash, by bank transfer, or in cryptocurrency. Accepted currencies: US Dollar, Euro, British Pound.",
              },
              {
                title: "Additional Services",
                description:
                  "Any additional requests outside of the planned service (extension of duration, work outside working hours, night services, etc.) will be billed at €150 per hour.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Experience Maison Gauthier?
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-8">
            Contact us to discuss your culinary needs and receive a personalized quotation
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
