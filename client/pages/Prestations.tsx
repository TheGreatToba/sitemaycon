import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Prestations() {
  const prestations = [
    {
      title: "Chef à Domicile",
      subtitle: "Service privé pour votre résidence",
      description:
        "Je me déplace à votre domicile pour créer une expérience gastronomique personnalisée. Service complet : menu, cuisine, dressage et service.",
      features: [
        "Menu sur-mesure",
        "Déplacement inclus",
        "Fourniture de tous les ingrédients",
        "Service et dressage",
        "Nettoyage de la cuisine",
      ],
      image:
        "https://images.unsplash.com/photo-1556910103-2182fbe46a29?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: "Dîners Privés",
      subtitle: "Soirées gastronomiques exclusives",
      description:
        "Des repas intimes à des réceptions de prestige. Je crée une atmosphère raffinée adaptée à votre événement et à vos convives.",
      features: [
        "Menu gastronomiqu",
        "Pairing vins premium",
        "Ambiance personnalisée",
        "Service haut de gamme",
        "Organisation complète",
      ],
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: "Événements Haut de Gamme",
      subtitle: "Mariages, galas, réceptions",
      description:
        "Mariage prestigieux, gala d'entreprise, réception diplomatique... Je gère la totalité de l'expérience culinaire avec excellence.",
      features: [
        "Élaboration de menus",
        "Gestion d'équipe de cuisine",
        "Coordination avec traiteur",
        "Présentation exceptional",
        "Gestion des allergies",
      ],
      image:
        "https://images.unsplash.com/photo-1519671482677-de7ecf00efb7?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: "Menus Sur-Mesure",
      subtitle: "Créations personnalisées",
      description:
        "Consultez avec moi vos préférences, contraintes alimentaires et inspirations. Je crée un menu unique qui vous correspond parfaitement.",
      features: [
        "Menu personnalisé",
        "Adaptation allergies",
        "Innovations culinaires",
        "Présentation raffinée",
        "Sélection vins",
      ],
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: "Service à Bord",
      subtitle: "Yachts et bateaux de luxe",
      description:
        "Service culinaire dans un espace contraint avec les mêmes standards de qualité. Expérience inoubliable en mer.",
      features: [
        "Cuisine à bord",
        "Menu méditerranéen",
        "Service discret",
        "Adaptation limitée",
        "Sécurité alimentaire",
      ],
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&h=400&q=80",
    },
    {
      title: "Consultance Culinaire",
      subtitle: "Conseil en gastronomie",
      description:
        "Besoin d'un conseil culinaire ? Je vous accompagne dans la création de concepts, de menus ou l'optimisation de vos services.",
      features: [
        "Analyse culinaire",
        "Création menu",
        "Formation équipe",
        "Conseils vinicoles",
        "Stratégie gastronomique",
      ],
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&h=400&q=80",
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Prestations</h1>
          <p className="mt-4 text-lg font-body opacity-90">
            Services culinaires de luxe pour chaque occasion
          </p>
        </div>
      </section>

      {/* Prestations Grid */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {prestations.map((prestation, index) => (
            <div
              key={prestation.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:[&>*]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-secondary h-96">
                <img
                  src={prestation.image}
                  alt={prestation.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div>
                <div className="inline-block mb-4">
                  <div className="text-sm font-body text-accent tracking-widest uppercase">
                    {prestation.subtitle}
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  {prestation.title}
                </h3>

                <p className="text-lg font-body text-muted-foreground mb-6">
                  {prestation.description}
                </p>

                <div className="space-y-3 mb-8">
                  {prestation.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-body text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground text-foreground font-body hover:bg-foreground hover:text-background transition-colors"
                >
                  En Savoir Plus
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Pourquoi Me Choisir ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Expertise Incontestable",
                description:
                  "20+ ans d'expérience auprès des plus grands chefs et maisons de prestige",
              },
              {
                title: "Personnalisation Totale",
                description:
                  "Chaque prestation est unique, adaptée à vos souhaits et contraintes",
              },
              {
                title: "Qualité Premium",
                description:
                  "Ingrédients nobles, techniques raffinées, présentation exceptionnelle",
              },
              {
                title: "Discrétion & Professionnalisme",
                description:
                  "Service haut de gamme avec une attention extrême aux détails",
              },
              {
                title: "Flexibilité",
                description:
                  "Adaptable à tous les budgets et contraintes (allergies, régimes...)",
              },
              {
                title: "Création Culinaire",
                description:
                  "Innovations constantes respectant l'authenticité méditerranéenne",
              },
            ].map((item) => (
              <div key={item.title} className="p-6">
                <h4 className="text-xl font-serif font-bold mb-3">
                  {item.title}
                </h4>
                <p className="font-body text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Intéressé par l'une de ces prestations ?
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-8">
            Contactez-moi pour discuter de vos besoins culinaires spécifiques
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
          >
            Demander une Proposition
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
