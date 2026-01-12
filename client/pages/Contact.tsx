import Layout from "@/components/Layout";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

export default function Contact() {
  const { t } = useTranslation();
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold">{t('contact.title')}</h1>
          <p className="mt-4 text-lg font-body opacity-90">
            {t('home.hero.cta')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-serif font-bold">{t('contact.phone')}</h3>
              </div>
              <p className="font-body text-muted-foreground">
                {t('footer.phone')}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Response within 24 hours
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-serif font-bold">{t('contact.email')}</h3>
              </div>
              <p className="font-body text-muted-foreground">
                {t('footer.email')}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                We'll respond promptly
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-serif font-bold">Location</h3>
              </div>
              <p className="font-body text-muted-foreground">
                France
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Services available worldwide
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Follow Us</h3>
            <div className="space-y-4">
              {[
                { name: "Instagram", url: "https://instagram.com/maisongauthier__" },
                { name: "LinkedIn", url: "#" },
                { name: "Facebook", url: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 border border-border text-foreground font-body hover:bg-secondary transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/30 border border-border p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold mb-2">
              {t('contact.title')}
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              {t('contact.description')}
            </p>

            {submitted && (
              <div className="mb-8 p-4 bg-accent text-accent-foreground font-body text-center">
                {t('contact.form.success')}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block font-body font-bold mb-2">{t('contact.form.name')} *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-body font-bold mb-2">{t('contact.form.email')} *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-body font-bold mb-2">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+33 7 49 36 22 54"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block font-body font-bold mb-2">
                    {t('contact.form.serviceType')} *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select...</option>
                    {t('contact.serviceTypes').map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block font-body font-bold mb-2">
                    {t('contact.form.eventDate')} *
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
                    {t('contact.form.guestCount')}
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
                  {t('prestations.dietaryAdaptations')}
                </label>
                <textarea
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Allergies, dietary restrictions, preferences..."
                  rows={3}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-body font-bold mb-2">{t('contact.form.message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Describe your event, expectations, and special requests..."
                  rows={5}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
              >
                {t('contact.form.submit')}
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
            {t('contact.faq.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: t('contact.faq.minBudget.q'), a: t('contact.faq.minBudget.a') },
              { q: t('contact.faq.allergies.q'), a: t('contact.faq.allergies.a') },
              { q: t('contact.faq.international.q'), a: t('contact.faq.international.a') },
              { q: t('contact.faq.timeline.q'), a: t('contact.faq.timeline.a') },
              { q: t('contact.faq.tastings.q'), a: t('contact.faq.tastings.a') },
              { q: t('contact.faq.beverages.q'), a: t('contact.faq.beverages.a') },
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

      {/* Final CTA */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            {t('home.finalCta.title')}
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-8">
            {t('home.finalCta.description')}
          </p>
        </div>
      </section>
    </Layout>
  );
}
