import Layout from "@/components/Layout";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    date: "",
    numberOfGuests: "",
    dietaryRestrictions: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        date: "",
        numberOfGuests: "",
        dietaryRestrictions: "",
        message: "",
      });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1577431537627-90ff93245f98?auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">Contact</h1>
          <p className="mt-4 text-lg font-body opacity-90">
            Réservez votre expérience culinaire
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-serif font-bold">Téléphone</h3>
              </div>
              <p className="font-body text-muted-foreground">
                +33 (0) 6 XX XX XX XX
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Lundi - Dimanche, 10h - 20h
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-serif font-bold">Email</h3>
              </div>
              <p className="font-body text-muted-foreground">
                contact@chefprive.com
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Réponse dans les 24h
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-serif font-bold">Localisation</h3>
              </div>
              <p className="font-body text-muted-foreground">
                Paris, France
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Interventions sur toute la France et à l'étranger
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Réseaux Sociaux</h3>
            <div className="space-y-4">
              {[
                { name: "Instagram", url: "#" },
                { name: "LinkedIn", url: "#" },
                { name: "Facebook", url: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="inline-flex items-center gap-3 px-4 py-2 border border-border text-foreground font-body hover:bg-secondary transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="p-8 bg-secondary/30 border border-border">
            <h3 className="text-xl font-serif font-bold mb-4">Délais</h3>
            <ul className="space-y-3 font-body text-muted-foreground">
              <li>
                <span className="font-bold">Prestation 5 personnes:</span> 2
                semaines
              </li>
              <li>
                <span className="font-bold">Prestation 10+ personnes:</span> 1
                mois
              </li>
              <li>
                <span className="font-bold">Événements:</span> 3 mois
              </li>
              <li>
                <span className="font-bold">Menus spéciaux:</span> Sur
                consultation
              </li>
            </ul>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/30 border border-border p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold mb-2">
              Formulaire de Réservation
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Complétez ce formulaire pour demander une proposition personnalisée
            </p>

            {submitted && (
              <div className="mb-8 p-4 bg-accent text-accent-foreground font-body text-center">
                Merci ! Votre demande a été envoyée avec succès. Je vous contacterai
                sous 24h.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block font-body font-bold mb-2">Nom *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Votre nom complet"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-body font-bold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-body font-bold mb-2">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+33 6 XX XX XX XX"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block font-body font-bold mb-2">
                    Type de Prestation *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="chef-a-domicile">Chef à Domicile</option>
                    <option value="diner-prive">Dîner Privé</option>
                    <option value="evenement">Événement Haut de Gamme</option>
                    <option value="menu-sur-mesure">Menu Sur-Mesure</option>
                    <option value="service-yacht">Service à Bord</option>
                    <option value="consultance">Consultance Culinaire</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block font-body font-bold mb-2">
                    Date Souhaitée *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block font-body font-bold mb-2">
                    Nombre d'Invités
                  </label>
                  <input
                    type="number"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="10"
                    min="1"
                  />
                </div>
              </div>

              {/* Dietary Restrictions */}
              <div>
                <label className="block font-body font-bold mb-2">
                  Restrictions Alimentaires
                </label>
                <textarea
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Allergies, régimes spéciaux, préférences..."
                  rows={3}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-body font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Décrivez votre événement, vos attentes, vos souhaits..."
                  rows={5}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
              >
                Envoyer la Demande
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Questions Fréquentes
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Quel est le budget minimum pour une prestation ?",
                a: "Le budget dépend du type de prestation et du nombre de convives. Une prestation minimum commence généralement autour de 800€ pour un dîner à 4 personnes.",
              },
              {
                q: "Pouvez-vous adapter les menus aux allergies ?",
                a: "Absolument. Je gère scrupuleusement toutes les allergies et contraintes alimentaires. Cela doit être signalé lors de la réservation.",
              },
              {
                q: "Intervenez-vous en dehors de Paris ?",
                a: "Oui, j'interviens sur toute la France et à l'étranger. Les frais de déplacement sont calculés selon la destination.",
              },
              {
                q: "Quel délai pour réserver une prestation ?",
                a: "Idéalement 3-4 semaines. Pour un événement important, 3 mois est recommandé. Les urgences peuvent être étudiées.",
              },
              {
                q: "Proposez-vous des dégustations avant l'événement ?",
                a: "Oui, pour les événements importants. Une dégustation peut être organisée quelques jours avant.",
              },
              {
                q: "Fournissez-vous les boissons ?",
                a: "Je peux vous conseiller sur les vins et spiritueux. Vous pouvez fournir ou je peux m'en charger sur demande.",
              },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-background border border-border">
                <h3 className="font-serif font-bold mb-3">{item.q}</h3>
                <p className="font-body text-muted-foreground text-sm">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
