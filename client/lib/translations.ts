export type Language = "en" | "fr";

export const translations = {
  en: {
    // Navigation & Header
    nav: {
      home: "Home",
      chef: "Chef",
      prestations: "Services",
      cuisine: "Cuisine",
      portfolio: "Portfolio",
      contact: "Contact",
      reserve: "Reserve",
    },
    // Header/Footer
    header: {
      brand: "Maison Gauthier",
      tagline: "Art of Private French Cuisine",
    },
    footer: {
      phone: "+33 7 49 36 22 54",
      email: "maisongauthier.ghc@gmail.com",
      instagram: "@maisongauthier__",
      rights: "© 2025 Maison Gauthier. All rights reserved.",
    },
    // Home Page
    home: {
      hero: {
        subtitle: "PRIVATE FRENCH GASTRONOMY",
        title: "Welcome to Maison Gauthier",
        description:
          "Maison Gauthier was born from the ambition of a French chef to bring the art of French cuisine into homes around the world. Creating private gastronomic experiences for VIP clients.",
        cta: "Reserve Your Experience",
      },
      philosophy: {
        title: "Our Philosophy",
        description1:
          "Maison Gauthier's philosophy is based on creating a warm environment where everyone can feel at ease, while enjoying attentive and authentic service guided by deep-rooted values.",
        description2:
          "Operating internationally, we bring the French art of living to receptions, private dinners, and long-term stays. From gastronomy to service, every detail is carefully thought out and executed to offer a harmonious and refined experience.",
        learnMore: "Learn More",
      },
      services: {
        title: "Our Services",
        description:
          "Maison Gauthier accompanies you with a range of services tailored to your needs. Every service is designed as a unique creation.",
        servicesList: [
          {
            title: "Personal Chef at Home",
            icon: "👨‍🍳",
            description:
              "Dedicated culinary service for your residence with tailor-made menus and elegant service.",
          },
          {
            title: "Private Receptions",
            icon: "🍽️",
            description:
              "Exquisite dinners for intimate gatherings or grand celebrations with refined cuisine.",
          },
          {
            title: "On-Board Service",
            icon: "⛵",
            description:
              "Exceptional culinary experiences aboard yachts and luxury vessels worldwide.",
          },
          {
            title: "Event Management",
            icon: "🎉",
            description:
              "Complete gastronomic coordination for weddings, galas, and exclusive events.",
          },
          {
            title: "Long-Term Stays",
            icon: "🏠",
            description:
              "Comprehensive culinary comfort for extended villa and residence stays.",
          },
          {
            title: "Local Producers",
            icon: "🌿",
            description:
              "Working exclusively with local producers to guarantee quality and authenticity.",
          },
        ],
      },
      portfolio: {
        title: "Culinary Portfolio",
        description:
          "Discover a selection of our creations and recent achievements in gastronomic excellence.",
        viewGallery: "View Full Gallery",
      },
      testimonials: {
        title: "Client Testimonials",
      },
      finalCta: {
        title: "Ready for an Exceptional Culinary Experience?",
        description:
          "Contact us to discuss your event or culinary needs. Together, we will create unforgettable moments of gastronomy and refinement.",
        cta: "Get in Touch",
      },
    },
    // Chef Page
    chef: {
      title: "About the Chef",
      content: `Maison Gauthier was born from the ambition of a French chef to bring the art of French cuisine into homes around the world.

The philosophy of Maison Gauthier rests on the creation of a warm environment where everyone can feel at ease while enjoying attentive and authentic service guided by deep-rooted values.

Operating internationally, the chef brings the French art of living to receptions, private dinners and long-term stays. From gastronomy to service, every detail is carefully thought out and executed to offer a harmonious and refined experience.

Committed to sustainable practices, Maison Gauthier works exclusively with local producers to guarantee the quality and authenticity of ingredients. This dedication ensures that every dish reflects the true essence of French gastronomy while respecting the environment and supporting local communities.`,
      certifications: [
        {
          title: "HACCP Certification",
          description: "Food safety and hygiene management certification",
        },
        {
          title: "Medical Certificate",
          description: "Professional health and safety certificate",
        },
        {
          title: "Ship's Cook Certificate",
          description:
            "International certification for on-board culinary services",
        },
        {
          title: "STCW Certificate",
          description:
            "Standards of Training, Certification and Watchkeeping for Seafarers",
        },
      ],
    },
    // Prestations Page
    prestations: {
      title: "Services & Packages",
      description:
        "Explore our curated service packages designed for unforgettable experiences.",
      chapter1: {
        title: "Chapter 1: A Day in France",
        description:
          "Experience French gastronomy throughout one day with carefully curated meals and service.",
        includes: "Includes breakfast, lunch, and dinner",
        pricing: "Starting at €3,500",
      },
      chapter2: {
        title: "Chapter 2: A Week in France",
        description:
          "Immerse yourself in French culinary culture with a full week of exceptional dining experiences.",
        includes: "Includes all meals and full service",
        pricing: "Starting at €18,000",
      },
      seasonalMenu: {
        title: "Seasonal Menu",
        starters: "Starters",
        mains: "Main Courses",
      },
      menu: {
        starters: [
          {
            name: "Semi-Cooked Duck Foie Gras",
            description:
              "Delicate foie gras with toasted brioche and fig compote",
          },
          {
            name: "Lobster Bisque",
            description: "Creamy soup with fresh lobster and aromatic herbs",
          },
          {
            name: "Seared Scallops",
            description: "Pan-seared scallops with champagne beurre blanc",
          },
          {
            name: "Burrata & Heirloom Tomato Salad",
            description:
              "Fresh burrata with seasonal heirloom tomatoes and basil",
          },
        ],
        mains: [
          {
            name: "Beef Wellington",
            description:
              "Tender beef loin wrapped in mushroom duxelles and puff pastry",
          },
          {
            name: "Dover Sole Meunière",
            description: "Whole sole pan-fried with brown butter and lemon",
          },
          {
            name: "Roasted Lamb with Herbs",
            description: "Herb-crusted lamb with seasonal vegetables",
          },
          {
            name: "Halibut en Papillote",
            description: "Steamed halibut with vegetables in parchment paper",
          },
        ],
      },
      dietaryAdaptations: "Dietary Adaptations",
      dietaryAdaptationsText:
        "All menus can be adapted for dietary requirements including vegetarian, vegan, gluten-free, and allergies.",
      importantInfo: {
        title: "Important Information",
        groceries: "Groceries Extra",
        groceriesText:
          "Fresh ingredients and provisions are billed separately at cost plus service fee.",
        payment: "Payment & Booking",
        paymentText:
          "30% deposit required to confirm booking. Balance due upon completion. Cryptocurrencies accepted.",
      },
    },
    // Cuisine Page
    cuisine: {
      title: "French Culinary Excellence",
      description:
        "French cuisine is not simply about food—it is an art, a philosophy, and a way of life.",
      highlights: [
        {
          title: "Classical Techniques",
          description:
            "Mastery of traditional French cooking methods perfected over centuries.",
        },
        {
          title: "Seasonal Ingredients",
          description:
            "Sourcing the finest, freshest produce from trusted local suppliers.",
        },
        {
          title: "Refined Presentations",
          description:
            "Every dish is a visual masterpiece, a testament to culinary artistry.",
        },
        {
          title: "Unique Flavors",
          description:
            "Harmonious balance of tastes and aromas in every creation.",
        },
      ],
      cuisineTypes: [
        {
          title: "French Cuisine",
          description:
            "Classic French gastronomy featuring traditional techniques and refined presentations from all regions of France.",
        },
        {
          title: "Mediterranean Cuisine",
          description:
            "Fresh, vibrant flavors inspired by the Mediterranean coast, emphasizing olive oil, fresh vegetables, and seafood.",
        },
        {
          title: "Italian Cuisine",
          description:
            "Authentic Italian preparations celebrating quality ingredients and traditional cooking methods.",
        },
        {
          title: "Mexican Cuisine",
          description:
            "Authentic Mexican culinary traditions with bold flavors and traditional cooking techniques.",
        },
      ],
    },
    // Portfolio Page
    portfolio: {
      title: "Portfolio",
      allCategories: "All",
      categories: {
        dishes: "Dishes",
        presentation: "Presentation",
        events: "Events",
        tables: "Tables",
      },
    },
    // Contact Page
    contact: {
      title: "Get in Touch",
      description:
        "Ready to create an unforgettable culinary experience? Contact us to discuss your event or culinary needs.",
      contactInfo: "Contact Information",
      phone: "Phone",
      email: "Email",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        eventDate: "Event Date",
        guestCount: "Number of Guests",
        serviceType: "Type of Service",
        message: "Additional Details",
        submit: "Send Request",
        nameRequired: "Name is required",
        emailRequired: "Valid email is required",
        phoneRequired: "Phone number is required",
        success: "Thank you! We will contact you soon.",
        error: "An error occurred. Please try again.",
      },
      serviceTypes: [
        "Personal Chef at Home",
        "Private Receptions",
        "On-Board Service",
        "Event Management",
        "Long-Term Stays",
      ],
      faq: {
        title: "Frequently Asked Questions",
        minBudget: {
          q: "What is the minimum budget for a service?",
          a: "The budget varies depending on the type of service, the schedule, and the number of guests. Contact us for a personalized quote.",
        },
        allergies: {
          q: "Can you adapt menus for allergies?",
          a: "Absolutely. We carefully manage all allergies and dietary restrictions without compromising quality. Please inform us when booking.",
        },
        international: {
          q: "Do you operate outside France?",
          a: "Yes, Maison Gauthier provides services internationally. Travel expenses are covered, with rates based on destination.",
        },
        timeline: {
          q: "What booking timeline is recommended?",
          a: "Ideally 2-4 weeks for day services. For week-long stays or events, 1-3 months is recommended. We can sometimes accommodate urgent requests.",
        },
        tastings: {
          q: "Do you offer tastings before events?",
          a: "Yes, for larger events. A tasting can be arranged a few days prior by special request.",
        },
        beverages: {
          q: "Do you provide beverages and wine pairings?",
          a: "We can advise on wine selections and pairings. Beverages can be provided by you or arranged through us upon request.",
        },
      },
    },
  },
  fr: {
    // Navigation & Header
    nav: {
      home: "Accueil",
      chef: "Le Chef",
      prestations: "Prestations",
      cuisine: "Cuisine",
      portfolio: "Portfolio",
      contact: "Contact",
      reserve: "Réserver",
    },
    // Header/Footer
    header: {
      brand: "Maison Gauthier",
      tagline: "Art de la Cuisine Française Privée",
    },
    footer: {
      phone: "+33 7 49 36 22 54",
      email: "maisongauthier.ghc@gmail.com",
      instagram: "@maisongauthier__",
      rights: "© 2025 Maison Gauthier. Tous droits réservés.",
    },
    // Home Page
    home: {
      hero: {
        subtitle: "GASTRONOMIE FRANÇAISE PRIVÉE",
        title: "Bienvenue chez Maison Gauthier",
        description:
          "Maison Gauthier est née de l'ambition d'un chef français de faire découvrir l'art de la cuisine française dans les maisons du monde entier. Créer des expériences gastronomiques privées pour des clients VIP.",
        cta: "Réservez Votre Expérience",
      },
      philosophy: {
        title: "Notre Philosophie",
        description1:
          "La philosophie de Maison Gauthier repose sur la création d'un environnement chaleureux où chacun peut se sentir à l'aise, tout en bénéficiant d'un service attentif et authentique guidé par des valeurs profondes.",
        description2:
          "Opérant à l'international, nous apportons l'art de vivre français aux réceptions, aux dîners privés et aux séjours de longue durée. De la gastronomie au service, chaque détail est soigneusement pensé et exécuté pour offrir une expérience harmonieuse et raffinée.",
        learnMore: "En Savoir Plus",
      },
      services: {
        title: "Nos Services",
        description:
          "Maison Gauthier vous accompagne avec une gamme de services adaptés à vos besoins. Chaque service est conçu comme une création unique.",
        servicesList: [
          {
            title: "Chef Personnel à Domicile",
            icon: "👨‍🍳",
            description:
              "Service culinaire dédié à votre résidence avec des menus sur mesure et un service élégant.",
          },
          {
            title: "Réceptions Privées",
            icon: "🍽️",
            description:
              "Dîners exquis pour des réunions intimes ou des célébrations grandioses avec une cuisine raffinée.",
          },
          {
            title: "Service à Bord",
            icon: "⛵",
            description:
              "Expériences culinaires exceptionnelles à bord de yachts et de navires de luxe dans le monde.",
          },
          {
            title: "Gestion d'Événements",
            icon: "🎉",
            description:
              "Coordination gastronomique complète pour les mariages, galas et événements exclusifs.",
          },
          {
            title: "Séjours de Longue Durée",
            icon: "🏠",
            description:
              "Confort culinaire complet pour les séjours prolongés en villa et résidence.",
          },
          {
            title: "Producteurs Locaux",
            icon: "🌿",
            description:
              "Travail exclusif avec les producteurs locaux pour garantir la qualité et l'authenticité.",
          },
        ],
      },
      portfolio: {
        title: "Portfolio Culinaire",
        description:
          "Découvrez une sélection de nos créations et réalisations récentes en excellence gastronomique.",
        viewGallery: "Voir la Galerie Complète",
      },
      testimonials: {
        title: "Témoignages Clients",
      },
      finalCta: {
        title: "Prêt pour une Expérience Culinaire Exceptionnelle ?",
        description:
          "Contactez-nous pour discuter de votre événement ou de vos besoins culinaires. Ensemble, nous créerons des moments inoubliables de gastronomie et de raffinement.",
        cta: "Nous Contacter",
      },
    },
    // Chef Page
    chef: {
      title: "À Propos du Chef",
      content: `Maison Gauthier est née de l'ambition d'un chef français de faire découvrir l'art de la cuisine française dans les maisons du monde entier.

La philosophie de Maison Gauthier repose sur la création d'un environnement chaleureux où chacun peut se sentir à l'aise tout en bénéficiant d'un service attentif et authentique guidé par des valeurs profondes.

Opérant à l'international, le chef apporte l'art de vivre français aux réceptions, aux dîners privés et aux séjours de longue durée. De la gastronomie au service, chaque détail est soigneusement pensé et exécuté pour offrir une expérience harmonieuse et raffinée.

Engagée envers des pratiques durables, Maison Gauthier travaille exclusivement avec des producteurs locaux pour garantir la qualité et l'authenticité des ingrédients. Cet engagement garantit que chaque plat reflète la véritable essence de la gastronomie française tout en respectant l'environnement et en soutenant les communautés locales.`,
      certifications: [
        {
          title: "Certification HACCP",
          description:
            "Certification de gestion de la sécurité alimentaire et de l'hygiène",
        },
        {
          title: "Certificat Médical",
          description: "Certificat professionnel de santé et de sécurité",
        },
        {
          title: "Certificat de Cuisinier de Navire",
          description:
            "Certification internationale pour les services culinaires à bord",
        },
        {
          title: "Certificat STCW",
          description:
            "Normes de formation, de certification et de service pour les marins",
        },
      ],
    },
    // Prestations Page
    prestations: {
      title: "Services et Forfaits",
      description:
        "Explorez nos forfaits de services curatés conçus pour des expériences inoubliables.",
      chapter1: {
        title: "Chapitre 1 : Un Jour en France",
        description:
          "Vivez la gastronomie française tout au long d'une journée avec des repas et services soigneusement curatés.",
        includes: "Comprend petit-déjeuner, déjeuner et dîner",
        pricing: "À partir de 3 500 €",
      },
      chapter2: {
        title: "Chapitre 2 : Une Semaine en France",
        description:
          "Immergez-vous dans la culture culinaire française avec une semaine complète d'expériences culinaires exceptionnelles.",
        includes: "Comprend tous les repas et service complet",
        pricing: "À partir de 18 000 €",
      },
      seasonalMenu: {
        title: "Menu Saisonnier",
        starters: "Entrées",
        mains: "Plats Principaux",
      },
      menu: {
        starters: [
          {
            name: "Foie Gras Demi-Cuit",
            description:
              "Foie gras délicat avec brioche grillée et compote de figues",
          },
          {
            name: "Bisque de Homard",
            description:
              "Soupe crémeuse avec homard frais et herbes aromatiques",
          },
          {
            name: "Pétoncles Poêlés",
            description: "Pétoncles poêlés avec beurre blanc au champagne",
          },
          {
            name: "Salade Burrata et Tomates Anciennes",
            description:
              "Burrata fraîche avec tomates anciennes de saison et basilic",
          },
        ],
        mains: [
          {
            name: "Wellington de Boeuf",
            description:
              "Filet de boeuf tendre enrobé de duxelles de champignons et pâte feuilletée",
          },
          {
            name: "Sole Meunière",
            description: "Sole entière poêlée avec beurre noisette et citron",
          },
          {
            name: "Agneau Rôti aux Herbes",
            description: "Agneau croûte d'herbes avec légumes de saison",
          },
          {
            name: "Flétan en Papillote",
            description:
              "Flétan cuit à la vapeur avec légumes en papier sulfurisé",
          },
        ],
      },
      dietaryAdaptations: "Adaptations Alimentaires",
      dietaryAdaptationsText:
        "Tous les menus peuvent être adaptés aux régimes alimentaires spéciaux, y compris végétarien, végan, sans gluten et allergies.",
      importantInfo: {
        title: "Informations Importantes",
        groceries: "Provisions Supplémentaires",
        groceriesText:
          "Les ingrédients frais et les provisions sont facturés séparément au coût plus frais de service.",
        payment: "Paiement et Réservation",
        paymentText:
          "Un acompte de 30% est requis pour confirmer la réservation. Le solde est dû à la fin du service. Les cryptomonnaies sont acceptées.",
      },
    },
    // Cuisine Page
    cuisine: {
      title: "Excellence Culinaire Française",
      description:
        "La cuisine française n'est pas simplement de la nourriture—c'est un art, une philosophie, et une façon de vivre.",
      highlights: [
        {
          title: "Techniques Classiques",
          description:
            "Maîtrise des méthodes de cuisson françaises traditionnelles perfectionnées au cours des siècles.",
        },
        {
          title: "Ingrédients de Saison",
          description:
            "Sourçage des plus beaux produits frais auprès de fournisseurs locaux de confiance.",
        },
        {
          title: "Présentations Raffinées",
          description:
            "Chaque plat est un chef-d'œuvre visuel, un témoignage de l'art culinaire.",
        },
        {
          title: "Saveurs Uniques",
          description:
            "Équilibre harmonieux des saveurs et des arômes dans chaque création.",
        },
      ],
      cuisineTypes: [
        {
          title: "Cuisine Française",
          description:
            "Gastronomie française classique mettant en avant les techniques traditionnelles et les présentations raffinées de toutes les régions de France.",
        },
        {
          title: "Cuisine Méditerranéenne",
          description:
            "Saveurs fraîches et vibrantes inspirées par la côte méditerranéenne, mettant l'accent sur l'huile d'olive, les légumes frais et les fruits de mer.",
        },
        {
          title: "Cuisine Italienne",
          description:
            "Préparations italiennes authentiques célébrant la qualité des ingrédients et les méthodes de cuisson traditionnelles.",
        },
        {
          title: "Cuisine Mexicaine",
          description:
            "Traditions culinaires mexicaines authentiques avec des saveurs audacieuses et des techniques de cuisson traditionnelles.",
        },
      ],
    },
    // Portfolio Page
    portfolio: {
      title: "Portfolio",
      allCategories: "Tous",
      categories: {
        dishes: "Plats",
        presentation: "Dressage",
        events: "Événements",
        tables: "Tables",
      },
    },
    // Contact Page
    contact: {
      title: "Nous Contacter",
      description:
        "Prêt à créer une expérience culinaire inoubliable ? Contactez-nous pour discuter de votre événement ou de vos besoins culinaires.",
      contactInfo: "Coordonnées",
      phone: "Téléphone",
      email: "Email",
      form: {
        name: "Nom Complet",
        email: "Adresse Email",
        phone: "Numéro de Téléphone",
        eventDate: "Date de l'Événement",
        guestCount: "Nombre de Convives",
        serviceType: "Type de Service",
        message: "Détails Supplémentaires",
        submit: "Envoyer la Demande",
        nameRequired: "Le nom est requis",
        emailRequired: "Une adresse email valide est requise",
        phoneRequired: "Le numéro de téléphone est requis",
        success: "Merci ! Nous vous contacterons bientôt.",
        error: "Une erreur s'est produite. Veuillez réessayer.",
      },
      serviceTypes: [
        "Chef Personnel à Domicile",
        "Réceptions Privées",
        "Service à Bord",
        "Gestion d'Événements",
        "Séjours de Longue Durée",
      ],
      faq: {
        title: "Questions Fréquemment Posées",
        minBudget: {
          q: "Quel est le budget minimum pour un service ?",
          a: "Le budget varie en fonction de la demande, des horaires et du nombre de convive. Contactez-nous pour un devis personnalisé.",
        },
        allergies: {
          q: "Pouvez-vous adapter les menus aux allergies ?",
          a: "Absolument. Nous gérons soigneusement toutes les allergies et restrictions alimentaires sans compromettre la qualité. Veuillez nous en informer lors de la réservation.",
        },
        international: {
          q: "Opérez-vous en dehors de la France ?",
          a: "Oui, Maison Gauthier fournit des services à l'international. Les frais de déplacement sont couverts, avec des tarifs basés sur la destination.",
        },
        timeline: {
          q: "Quel délai de réservation est recommandé ?",
          a: "Idéalement 2 à 4 semaines pour les services d'une journée. Pour les séjours d'une semaine ou les événements, 1 à 3 mois sont recommandés. Nous pouvons parfois accommoder les demandes urgentes.",
        },
        tastings: {
          q: "Proposez-vous des dégustations avant les événements ?",
          a: "Oui, pour les événements plus importants. Une dégustation peut être arrangée quelques jours avant sur demande spéciale.",
        },
        beverages: {
          q: "Fournissez-vous les boissons et les accords mets-vins ?",
          a: "Nous pouvons vous conseiller sur les sélections de vins et les accords. Les boissons peuvent être fournies par vous ou arrangées par nous sur demande.",
        },
      },
    },
  },
};

export function getTranslation(lang: Language, path: string): any {
  const keys = path.split(".");
  let value: any = translations[lang];

  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return path;
  }

  return value;
}
