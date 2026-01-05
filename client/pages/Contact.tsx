import Layout from "@/components/Layout";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

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
    >,
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold">
            {t("contact.hero.title")}
          </h1>
          <p className="mt-4 text-lg font-body opacity-90">
            {t("contact.hero.subtitle")}
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
                <h3 className="text-xl font-serif font-bold">
                  {t("contact.phone.label")}
                </h3>
              </div>
              <p className="font-body text-muted-foreground">
                {t("contact.phone.number")}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {t("contact.phone.response")}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-serif font-bold">
                  {t("contact.email.label")}
                </h3>
              </div>
              <p className="font-body text-muted-foreground">
                {t("contact.email.address")}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {t("contact.email.response")}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-serif font-bold">
                  {t("contact.location.label")}
                </h3>
              </div>
              <p className="font-body text-muted-foreground">
                {t("contact.location.city")}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {t("contact.location.availability")}
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">
              {t("contact.social.title")}
            </h3>
            <div className="space-y-4">
              {[
                {
                  nameKey: "contact.social.instagram",
                  url: "https://instagram.com/maisongauthier__",
                },
                { nameKey: "contact.social.linkedin", url: "#" },
                { nameKey: "contact.social.facebook", url: "#" },
              ].map((social) => (
                <a
                  key={social.nameKey}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 border border-border text-foreground font-body hover:bg-secondary transition-colors"
                >
                  {t(social.nameKey)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="p-8 bg-secondary/30 border border-border">
            <h3 className="text-xl font-serif font-bold mb-4">
              {t("contact.bookingTimeline.title")}
            </h3>
            <ul className="space-y-3 font-body text-muted-foreground">
              <li>{t("contact.bookingTimeline.singleDay")}</li>
              <li>{t("contact.bookingTimeline.weekStay")}</li>
              <li>{t("contact.bookingTimeline.events")}</li>
              <li>{t("contact.bookingTimeline.custom")}</li>
            </ul>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/30 border border-border p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold mb-2">
              {t("contact.form.title")}
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              {t("contact.form.subtitle")}
            </p>

            {submitted && (
              <div className="mb-8 p-4 bg-accent text-accent-foreground font-body text-center">
                {t("contact.form.successMessage")}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block font-body font-bold mb-2">
                    {t("contact.form.name")} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t("contact.form.placeholder.name")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-body font-bold mb-2">
                    {t("contact.form.email")} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t("contact.form.placeholder.email")}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-body font-bold mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t("contact.form.placeholder.phone")}
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="block font-body font-bold mb-2">
                    {t("contact.form.serviceType")} *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">{t("contact.form.selectService")}</option>
                    <option value="day-service">
                      {t("contact.form.oneDay")}
                    </option>
                    <option value="week-stay">
                      {t("contact.form.weekStay")}
                    </option>
                    <option value="event">{t("contact.form.event")}</option>
                    <option value="custom-menu">
                      {t("contact.form.customMenu")}
                    </option>
                    <option value="yacht">
                      {t("contact.form.yachtService")}
                    </option>
                    <option value="consultation">
                      {t("contact.form.consultation")}
                    </option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block font-body font-bold mb-2">
                    {t("contact.form.preferredDate")} *
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
                    {t("contact.form.numberOfGuests")}
                  </label>
                  <input
                    type="number"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t("contact.form.placeholder.guests")}
                    min="1"
                  />
                </div>
              </div>

              {/* Dietary Restrictions */}
              <div>
                <label className="block font-body font-bold mb-2">
                  {t("contact.form.dietaryRequirements")}
                </label>
                <textarea
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder={t("contact.form.placeholder.dietary")}
                  rows={3}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-body font-bold mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder={t("contact.form.placeholder.message")}
                  rows={5}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
              >
                {t("contact.form.submit")}
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
            {t("contact.faq.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                qKey: "contact.faq.budget.q",
                aKey: "contact.faq.budget.a",
              },
              {
                qKey: "contact.faq.allergies.q",
                aKey: "contact.faq.allergies.a",
              },
              {
                qKey: "contact.faq.international.q",
                aKey: "contact.faq.international.a",
              },
              {
                qKey: "contact.faq.timeline.q",
                aKey: "contact.faq.timeline.a",
              },
              {
                qKey: "contact.faq.tastings.q",
                aKey: "contact.faq.tastings.a",
              },
              {
                qKey: "contact.faq.beverages.q",
                aKey: "contact.faq.beverages.a",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-background border border-border"
              >
                <h3 className="font-serif font-bold mb-3">{t(item.qKey)}</h3>
                <p className="font-body text-muted-foreground text-sm">
                  {t(item.aKey)}
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
            {t("contact.finalCta.title")}
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-8">
            {t("contact.finalCta.description")}
          </p>
        </div>
      </section>
    </Layout>
  );
}
