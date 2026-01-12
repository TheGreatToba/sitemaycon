import Layout from "@/components/Layout";
import { useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

export default function Portfolio() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Simplified portfolio with placeholder structure
  // Replace these image URLs with your PDF photos
  const portfolioItems = [
    {
      id: 1,
      title: "Homard Grillé",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      id: 2,
      title: "Dressage Raffiné",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      id: 3,
      title: "Gala Privé",
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      id: 4,
      title: "Table d'Excellence",
      image:
        "https://images.unsplash.com/photo-1504674900968-45cc10deda4c?auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      id: 5,
      title: "Composition Sensorielle",
      image:
        "https://images.unsplash.com/photo-1577431537627-90ff93245f98?auto=format&fit=crop&w=600&h=600&q=80",
    },
    {
      id: 6,
      title: "Bouillabaisse Traditionnelle",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&h=600&q=80",
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold">{t('portfolio.title')}</h1>
          <p className="mt-4 text-lg font-body opacity-90">
            {t('home.portfolio.description')}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-end justify-end p-4 opacity-0 group-hover:opacity-100">
                  <h4 className="font-serif font-bold text-white">{item.title}</h4>
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
