import Layout from "@/components/Layout";
import { useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

export default function Portfolio() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Portfolio items organized by category from the PDF
  const portfolioItems = [
    {
      id: 1,
      title: "Semi-Cooked Duck Foie Gras",
      category: t("portfolio.categories.dishes"),
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=600&q=80",
      description:
        "Delicate foie gras terrine with fig chutney and golden brioche",
    },
    {
      id: 2,
      title: "Parisian Mimosa Eggs",
      category: t("portfolio.categories.dishes"),
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Farm eggs with light mayonnaise and fresh herbs",
    },
    {
      id: 3,
      title: "Lamb Rack with Herb Crust",
      category: t("portfolio.categories.dishes"),
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Tender roast lamb with fresh herbs and breadcrumbs",
    },
    {
      id: 4,
      title: "Beef Wellington",
      category: t("portfolio.categories.dishes"),
      image:
        "https://images.unsplash.com/photo-1504674900968-45cc10deda4c?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Beef tenderloin in puff pastry with mushroom duxelles",
    },
    {
      id: 5,
      title: "Sole Meunière",
      category: t("portfolio.categories.dishes"),
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Fresh sole with brown butter and lemon",
    },
    {
      id: 6,
      title: "Scallops Rossini Style",
      category: t("portfolio.categories.dishes"),
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Fresh scallops with foie gras and truffled celery purée",
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold">
            {t("portfolio.title")}
          </h1>
          <p className="mt-4 text-lg font-body opacity-90">
            {t("home.portfolio.description")}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-center mb-4">
              {t("prestations.seasonalMenu.title")}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              {t("home.services.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-secondary aspect-square mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <p className="text-white text-sm font-body text-center px-4">
                      Click to enlarge
                    </p>
                  </div>
                </div>
                <h4 className="font-serif font-bold text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
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
