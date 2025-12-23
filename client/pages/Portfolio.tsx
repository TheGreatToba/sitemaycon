import Layout from "@/components/Layout";
import { useState } from "react";
import { X } from "lucide-react";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Homard Grillé à la Méditerranéenne",
      category: "Plats",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Homard frais grillé, sauce à l'huile d'olive et citron de Menton",
    },
    {
      id: 2,
      title: "Risotto aux Truffes",
      category: "Plats",
      image:
        "https://images.unsplash.com/photo-1612874742237-6526221fcf4f?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Risotto Carnaroli, truffe noire du Périgord, parmesan Reggiano",
    },
    {
      id: 3,
      title: "Dressage Sophistiqué",
      category: "Dressage",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Art culinaire et présentation raffinée",
    },
    {
      id: 4,
      title: "Composition Sensorielle",
      category: "Dressage",
      image:
        "https://images.unsplash.com/photo-1577431537627-90ff93245f98?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Jeu de couleurs et de textures pour l'émerveillement",
    },
    {
      id: 5,
      title: "Gala Privé",
      category: "Événements",
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Dîner de gala pour 50 personnes, service exceptionnel",
    },
    {
      id: 6,
      title: "Mariage Prestige",
      category: "Événements",
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Menu de mariage gastronomique, réception de luxe",
    },
    {
      id: 7,
      title: "Table d'Exception",
      category: "Tables",
      image:
        "https://images.unsplash.com/photo-1504674900968-45cc10deda4c?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Dressage de table raffiné avec présentation des plats",
    },
    {
      id: 8,
      title: "Ambiance Élégante",
      category: "Tables",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Décoration de table et ambiance gastronomique",
    },
    {
      id: 9,
      title: "Soupe de Poisson",
      category: "Plats",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Bouillabaisse provençale, rouille et croutons",
    },
    {
      id: 10,
      title: "Pâtes Fraîches",
      category: "Plats",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Pappardelle aux truffes et sauce au gibier",
    },
    {
      id: 11,
      title: "Présentation Minimale",
      category: "Dressage",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Beauté dans la simplicité, élégance épurée",
    },
    {
      id: 12,
      title: "Réception Villa Côte d'Azur",
      category: "Événements",
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Événement privé pour 100 personnes, service impeccable",
    },
  ];

  const categories = ["Tous", "Plats", "Dressage", "Événements", "Tables"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredItems =
    activeCategory === "Tous"
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Portfolio</h1>
          <p className="mt-4 text-lg font-body opacity-90">
            Gallery of Culinary Creations
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
                {category}
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
