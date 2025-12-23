import Layout from "@/components/Layout";
import { useState } from "react";
import { X } from "lucide-react";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Dishes", "Presentation", "Events", "Tables"];

  const portfolioItems = [
    {
      id: 1,
      title: "Lobster with Butter & Herbs",
      category: "Dishes",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad576?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Fresh grilled lobster with herb sauce",
    },
    {
      id: 2,
      title: "Truffle Risotto",
      category: "Dishes",
      image:
        "https://images.unsplash.com/photo-1612874742237-6526221fcf4f?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Carnaroli risotto with black truffles",
    },
    {
      id: 3,
      title: "Sophisticated Plating",
      category: "Presentation",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Culinary art and refined presentation",
    },
    {
      id: 4,
      title: "Sensory Composition",
      category: "Presentation",
      image:
        "https://images.unsplash.com/photo-1577431537627-90ff93245f98?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Colors and textures for enchantment",
    },
    {
      id: 5,
      title: "Private Gala",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Gala dinner for 50 guests with exceptional service",
    },
    {
      id: 6,
      title: "Luxury Wedding",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Gastronomic wedding menu and reception",
    },
    {
      id: 7,
      title: "Exceptional Tablescape",
      category: "Tables",
      image:
        "https://images.unsplash.com/photo-1504674900968-45cc10deda4c?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Refined table setting and dish presentation",
    },
    {
      id: 8,
      title: "Elegant Ambiance",
      category: "Tables",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Table decoration and gastronomic ambiance",
    },
    {
      id: 9,
      title: "Fish Soup",
      category: "Dishes",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Traditional bouillabaisse with rouille",
    },
    {
      id: 10,
      title: "Fresh Pasta",
      category: "Dishes",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Pappardelle with truffle and game sauce",
    },
    {
      id: 11,
      title: "Minimal Presentation",
      category: "Presentation",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Beauty in simplicity, refined elegance",
    },
    {
      id: 12,
      title: "Villa Reception",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=600&h=600&q=80",
      description: "Private event for 100 guests with impeccable service",
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
