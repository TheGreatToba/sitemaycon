import Layout from "@/components/Layout";
import { useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryMap = {
    All: t("portfolio.categories.all"),
    Dishes: t("portfolio.categories.dishes"),
    Presentation: t("portfolio.categories.presentation"),
    Events: t("portfolio.categories.events"),
    Tables: t("portfolio.categories.tables"),
  } as const;

  const categories = Object.keys(categoryMap) as Array<keyof typeof categoryMap>;

  const portfolioItems = [
    {
      id: 1,
      titleKey: "portfolio.items.lobster.title",
      category: "Dishes",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?auto=format&fit=crop&w=600&h=600&q=80",
      descriptionKey: "portfolio.items.lobster.description",
    },
    {
      id: 2,
      titleKey: "portfolio.items.risotto.title",
      category: "Dishes",
      image:
        "https://images.unsplash.com/photo-1612874742237-6526221fcf4f?auto=format&fit=crop&w=600&h=600&q=80",
      descriptionKey: "portfolio.items.risotto.description",
    },
    {
      id: 3,
      titleKey: "portfolio.items.sophisticatedPlating.title",
      category: "Presentation",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=600&q=80",
      descriptionKey: "portfolio.items.sophisticatedPlating.description",
    },
    {
      id: 4,
      titleKey: "portfolio.items.sensoryComposition.title",
      category: "Presentation",
      image:
        "https://images.unsplash.com/photo-1577431537627-90ff93245f98?auto=format&fit=crop&w=600&h=600&q=80",
      descriptionKey: "portfolio.items.sensoryComposition.description",
    },
    {
      id: 5,
      titleKey: "portfolio.items.privateGala.title",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=600&h=600&q=80",
      descriptionKey: "portfolio.items.privateGala.description",
    },
    {
      id: 6,
      titleKey: "portfolio.items.luxuryWedding.title",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=600&h=600&q=80",
      descriptionKey: "portfolio.items.luxuryWedding.description",
    },
    {
      id: 7,
      titleKey: "portfolio.items.exceptionalTablescape.title",
      category: "Tables",
      image:
        "https://images.unsplash.com/photo-1504674900968-45cc10deda4c?auto=format&fit=crop&w=600&h=600&q=80",
      descriptionKey: "portfolio.items.exceptionalTablescape.description",
    },
    {
      id: 8,
      titleKey: "portfolio.items.elegantAmbiance.title",
      category: "Tables",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&h=600&q=80",
      descriptionKey: "portfolio.items.elegantAmbiance.description",
    },
    {
      id: 9,
      titleKey: "portfolio.items.fishSoup.title",
      category: "Dishes",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&h=600&q=80",
      descriptionKey: "portfolio.items.fishSoup.description",
    },
    {
      id: 10,
      titleKey: "portfolio.items.freshPasta.title",
      category: "Dishes",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&h=600&q=80",
      descriptionKey: "portfolio.items.freshPasta.description",
    },
    {
      id: 11,
      titleKey: "portfolio.items.minimalPresentation.title",
      category: "Presentation",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=600&q=80",
      descriptionKey: "portfolio.items.minimalPresentation.description",
    },
    {
      id: 12,
      titleKey: "portfolio.items.villaReception.title",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=600&h=600&q=80",
      descriptionKey: "portfolio.items.villaReception.description",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

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
          <h1 className="text-5xl md:text-6xl font-serif font-bold">{t("portfolio.hero.title")}</h1>
          <p className="mt-4 text-lg font-body opacity-90">
            {t("portfolio.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-body text-sm transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {categoryMap[category]}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="group cursor-pointer relative overflow-hidden bg-secondary aspect-square"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex flex-col items-end justify-end p-4 opacity-0 group-hover:opacity-100">
                  <div className="text-white text-right">
                    <p className="text-xs font-body text-accent mb-1">
                      {item.category}
                    </p>
                    <h4 className="font-serif font-bold text-sm">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={selectedImage}
            alt="Full size view"
            className="max-w-4xl max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
}
