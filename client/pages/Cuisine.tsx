import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cuisine() {
  const cuisines = [
    {
      name: "Cuisine Française",
      description:
        "L'essence de la gastronomie française : technique rigoureuse, ingrédients nobles et respect des traditions. Sauces délicates, préparations minutieuses et présentation impeccable.",
      specialities:
        "Coq au vin, Bouillabaisse, Cassoulet, Sole Meunière, Éscargots de Bourgogne",
      regions: "Lyon, Provence, Bordeaux, Bretagne",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      name: "Cuisine Italienne",
      description:
        "Simplicité élégante et ingrédients authentiques. La cuisine italienne célèbre la qualité de chaque produit : pâtes artisanales, tomates San Marzano, mozzarella di bufala, huile d'olive prestigieuse.",
      specialities:
        "Risotto, Pâtes fraîches, Osso Buco, Tiramisu, Panna Cotta",
      regions: "Toscane, Ligurie, Sicile, Piémont",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      name: "Cuisine Espagnole",
      description:
        "Saveurs généruses et conviviales. La paella est un art, le jamón un trésor, et les tapas une invitation à la découverte. Ajo blanco, gazpacho et produits ibériques de prestige.",
      specialities:
        "Paella Valenciana, Jamón Ibérique, Gazpacho, Croquetas, Pulpo a la Gallega",
      regions: "Valence, Castille, Andalousie, Catalogne",
      image:
        "https://images.unsplash.com/photo-1612874742237-6526221fcf4f?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      name: "Cuisine Grecque",
      description:
        "Méditerranée pure : olive, feta, huile d'olive vierge extra, herbes fraîches et produits de la mer. Philosophie de santé et de bien-être conjuguée à l'excellence gastronomique.",
      specialities:
        "Moussaka, Souvlaki, Horta, Salade Grecque, Baklava",
      regions: "Crète, Péloponnèse, Îles Ioniennes",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&h=600&q=80",
    },
    {
      name: "Cuisine Marocaine",
      description:
        "Épices sublimes et saveurs complexes. Le tajine est une tradition culinaire respectée, les herbes fraîches omniprésentes, et chaque plat raconte une histoire. Safran, cumin, cannelle et rose.",
      specialities:
        "Tajine d'Agneau, Couscous Royal, Pastilla, Salade Zaalouk, Mint Tea",
      regions: "Marrakech, Fès, Casablanca, Anti-Atlas",
      image:
        "https://images.unsplash.com/photo-1600626213181-c00d3df24236?auto=format&fit=crop&w=800&h=600&q=80",
    },
  ];

  const ingredients = [
    {
      category: "Huiles & Vinaigres",
      items: [
        "Huile d'olive extra vierge Toscane",
        "Vinaigre balsamique traditionnel",
        "Huile de noisette",
        "Vinaigre de Xérès",
      ],
    },
    {
      category: "Produits Laitiers",
      items: [
        "Mozzarella di bufala",
        "Feta grecque",
        "Parmesan Reggiano",
        "Féta Sainte-Maure",
      ],
    },
    {
      category: "Charcuteries & Protéines",
      items: [
        "Jamón Ibérique",
        "Prosciutto Parme",
        "Poisson frais méditerranéen",
        "Homard breton",
      ],
    },
    {
      category: "Épices & Herbes",
      items: [
        "Safran de Perse",
        "Coriandre frais",
        "Ail frais provençal",
        "Thym sauvage",
      ],
    },
    {
      category: "Produits Nobles",
      items: [
        "Truffes noires",
        "Caviar",
        "Foie gras",
        "Cèpes sauvages",
      ],
    },
    {
      category: "Fruits & Légumes",
      items: [
        "Tomates San Marzano",
        "Aubergine violette",
        "Citron de Menton",
        "Amande de Marcona",
      ],
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
              'url("https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">
            Cuisine & Spécialités
          </h1>
          <p className="mt-4 text-lg font-body opacity-90">
            L'Excellence Gastronomique Méditerranéenne
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6">
            Les Saveurs Méditerranéennes
          </h2>
          <p className="text-lg font-body text-muted-foreground text-center leading-relaxed">
            La Méditerranée est un carrefour de cultures culinaires exceptionnelles.
            De la France à la Grèce, en passant par l'Italie, l'Espagne et le Maroc,
            chaque région offre une richesse gastronomique unique. Ma spécialité est
            de fusionner ces traditions pour créer une cuisine moderne, authentique et
            exquise.
          </p>
        </div>
      </section>

      {/* Cuisines */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">
            Les Traditions Culinaires
          </h2>

          <div className="space-y-16">
            {cuisines.map((cuisine, index) => (
              <div
                key={cuisine.name}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:[&>*]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden bg-secondary h-80">
                  <img
                    src={cuisine.image}
                    alt={cuisine.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-serif font-bold mb-4">
                    {cuisine.name}
                  </h3>

                  <p className="text-lg font-body text-muted-foreground mb-6 leading-relaxed">
                    {cuisine.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-serif font-bold mb-2">Spécialités</h4>
                      <p className="font-body text-muted-foreground">
                        {cuisine.specialities}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold mb-2">Régions d'Origine</h4>
                      <p className="font-body text-muted-foreground">
                        {cuisine.regions}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Ingredients */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-6">
            Ingrédients Nobles
          </h2>
          <p className="text-lg font-body text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            La qualité d'un plat repose avant tout sur la sélection rigoureuse de ses
            ingrédients. Je travaille uniquement avec les meilleurs producteurs et
            fournisseurs, garantissant fraîcheur, authenticité et excellence.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ingredients.map((category) => (
              <div
                key={category.category}
                className="p-8 bg-background border border-border"
              >
                <h3 className="text-xl font-serif font-bold mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="font-body text-muted-foreground flex items-start gap-3">
                      <span className="text-accent mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Approche Gastronomique
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Produits de Saison",
                description:
                  "Je privilégie les produits de saison pour assurer la fraîcheur maximale et respecter les cycles naturels de la terre.",
              },
              {
                title: "Terroir & Traçabilité",
                description:
                  "Chaque ingrédient a une histoire. Je connais mes producteurs et garantis la provenance de chaque élément.",
              },
              {
                title: "Technique Contemporaine",
                description:
                  "Respectant les traditions, j'intègre les techniques modernes pour créer une cuisine à la fois authentique et innovante.",
              },
              {
                title: "Sensoriel & Émotionnel",
                description:
                  "Chaque plat doit émouvoir, surprendre et enchanter. C'est l'objectif ultime de ma création culinaire.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-serif font-bold">
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
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Goûtez l'Excellence Méditerranéenne
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-8">
            Découvrez ces saveurs exceptionnelles lors d'une prestation culinaire
            personnalisée
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
          >
            Réserver une Expérience
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
