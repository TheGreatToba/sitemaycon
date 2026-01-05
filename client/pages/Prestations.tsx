import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/useTranslation";

export default function Prestations() {
  const { t } = useTranslation();
  const chapters = [
    {
      title: "Chapter 1: A Day in France",
      subtitle: "One-Day Gastronomic Experience",
      description:
        "Choose the option that best suits your event. You can also opt for the full service over a whole day.",
      services: [
        "Selection of seasonal à la carte products of your choice",
        "Plating, table service for food and drinks, clearing tables",
        "Cleaning and tidying the kitchen after service",
        "Soft drinks, food and wine pairings (optional)",
        "Adaptation to all diets and preferences",
        "Maximum 12 guests",
      ],
      options: [
        {
          title: "Breakfast or Brunch",
          description: "Start your day with a French breakfast served at sunrise on your terrace. Warm pastries, fresh bread, artisanal jams, freshly squeezed juices, and hot drinks prepared to order.",
        },
        {
          title: "Lunch",
          description: "A comforting lunch prepared with seasonal ingredients. Three-course menu: starter, main course, and dessert. Generous, elegant cuisine.",
        },
        {
          title: "Afternoon Tea",
          description: "Afternoon tea enjoyed around 4:00 p.m. Light, refined, and carefully selected offerings designed to provide a gourmet break.",
        },
        {
          title: "Dinner",
          description: "The highlight of the day: a gastronomic experience designed to enhance your evening with a refined multi-course menu combining balance, precision, and creativity.",
        },
      ],
      image: "https://images.unsplash.com/photo-1504674900968-45cc10deda4c?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      title: "Chapter 2: A Week in France",
      subtitle: "Extended Culinary Comfort",
      description:
        "Designed for stays in villas or on board, Maison Gauthier embodies the art of everyday hospitality. The chef becomes the guarantor of your culinary comfort.",
      services: [
        "Chef on site for 7 consecutive days",
        "Daily creation of tailor-made menus according to guests",
        "Complete management of shopping and pantry",
        "Table service, plating and presentation of dishes",
        "Cleaning and maintenance of the kitchen area",
        "Adaptation to all diets and preferences",
      ],
      options: [
        {
          title: "Dinner Only Package",
          description: "Focused culinary experience for evening meals throughout your stay.",
        },
        {
          title: "Half-Day Package",
          description: "Lunch and dinner services for complete daily gastronomic experience.",
        },
        {
          title: "Full Package",
          description: "Breakfast, lunch, afternoon snack, and dinner for comprehensive culinary comfort.",
        },
        {
          title: "Resident Chef Option",
          description: "Full-time chef residence for villa or yacht with all meal services.",
        },
      ],
      image: "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=800&h=600&q=80",
    },
  ];

  const starters = [
    {
      title: "Semi-Cooked Duck Foie Gras with Cognac",
      description: "Foie gras terrine served in thin slices, fig chutney and fleur de sel, warm golden brioche.",
    },
    {
      title: "Parisian Mimosa Eggs",
      description: "Cooked farm eggs, light mayonnaise, whole grain mustard, and lemon. Fresh herb stuffing.",
    },
    {
      title: "Croque-Monsieur with Black Truffle",
      description: "Golden brioche bread with clarified butter, truffle béchamel sauce, herb ham, aged Comté cheese, and fresh truffle shavings.",
    },
    {
      title: "Provencal Vegetable Tian",
      description: "Thinly sliced vegetables: tomato, zucchini, eggplant, and sweet onion with virgin olive oil and fresh thyme.",
    },
    {
      title: "Balkan Salmon, Cucumber Ballotine",
      description: "Smoked salmon rolled into a thin log on fresh cheese and Greek yogurt base with dill, chives, and cucumber.",
    },
    {
      title: "Langoustine Ravioli, Shellfish Broth Emulsion",
      description: "Fresh handmade pasta filled with langoustine meat and finely diced vegetables with foamy shellfish broth emulsion.",
    },
  ];

  const mains = [
    {
      title: "Lamb Rack with Herb Crust",
      description: "Tender roast lamb rack wrapped in a crust of fresh herbs and fine breadcrumbs. Served with homemade celery purée.",
    },
    {
      title: "Beef Wellington",
      description: "Roasted beef tenderloin in puff pastry with mushroom duxelles and cured ham. Served with red wine reduction.",
    },
    {
      title: "Duck Breast with Sweet and Sour Sauce",
      description: "Roasted duck breast with homemade sweet and sour sauce featuring citrus fruits and spices.",
    },
    {
      title: "Sole Meunière",
      description: "Sole Meunière served with fresh vegetable garnish and baby potatoes with light cream sauce and candied lemon.",
    },
    {
      title: "Bistro-Style Pepper Steak",
      description: "Pan-seared beef tenderloin with creamy and fragrant pepper sauce. Served with seasonal vegetables or refined side dishes.",
    },
    {
      title: "Duck Parmentier Pie",
      description: "Slow-cooked shredded duck wrapped in puff pastry and topped with mashed potatoes.",
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold">{t('prestations.title')}</h1>
          <p className="mt-4 text-lg font-body opacity-90">
            {t('prestations.description')}
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
              {t('prestations.seasonalMenu.title')}
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              {t('home.services.description')}
            </p>
          </div>

          {/* Starters */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold mb-8 text-center">
              {t('prestations.seasonalMenu.starters')}
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
