import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Chef() {
  const { t } = useTranslation();
  const milestones = [
    {
      year: t("chef.journey.founded"),
      title: t("chef.journey.foundedTitle"),
      description: t("chef.journey.foundedDescription"),
    },
    {
      year: t("chef.journey.development"),
      title: t("chef.journey.developmentTitle"),
      description: t("chef.journey.developmentDescription"),
    },
    {
      year: t("chef.journey.excellence"),
      title: t("chef.journey.excellenceTitle"),
      description: t("chef.journey.excellenceDescription"),
    },
    {
      year: t("chef.journey.today"),
      title: t("chef.journey.todayTitle"),
      description: t("chef.journey.todayDescription"),
    },
  ];

  const values = [
    {
      title: t("chef.values.culinaryArt.title"),
      description: t("chef.values.culinaryArt.description"),
    },
    {
      title: t("chef.values.localProducers.title"),
      description: t("chef.values.localProducers.description"),
    },
    {
      title: t("chef.values.warmHospitality.title"),
      description: t("chef.values.warmHospitality.description"),
    },
    {
      title: t("chef.values.bespokeExperience.title"),
      description: t("chef.values.bespokeExperience.description"),
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
              'url("https://images.unsplash.com/photo-1589985643959-e4e5a56e5246?auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">{t("chef.hero.title")}</h1>
          <p className="mt-4 text-lg font-body opacity-90">
            {t("chef.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Chef Portrait and Intro */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552058544-f6b08422138a?auto=format&fit=crop&w=600&h=700&q=80"
                alt="Chef Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                {t("chef.story.title")}
              </h2>
              <p className="text-lg font-body text-muted-foreground mb-4 leading-relaxed">
                {t("chef.story.paragraph1")}
              </p>
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                {t("chef.story.paragraph2")}
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="mb-20 p-12 bg-secondary/30 border border-border">
            <h3 className="text-3xl font-serif font-bold mb-6">{t("chef.philosophy.title")}</h3>
            <p className="text-lg font-body text-muted-foreground leading-relaxed mb-4">
              {t("chef.philosophy.paragraph1")}
            </p>
            <p className="text-lg font-body text-muted-foreground leading-relaxed mb-4">
              {t("chef.philosophy.paragraph2")}
            </p>
            <p className="text-lg font-body text-muted-foreground leading-relaxed">
              {t("chef.philosophy.paragraph3")}
            </p>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h3 className="text-3xl font-serif font-bold mb-12 text-center">
              {t("chef.values.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="p-8 border border-border">
                  <h4 className="text-2xl font-serif font-bold mb-3">
                    {value.title}
                  </h4>
                  <p className="font-body text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Journey */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-12 text-center">
              Our Journey
            </h3>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex gap-8 items-start"
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-serif font-bold text-lg">
                      {milestone.year.substring(2)}
                    </div>
                    {index !== milestones.length - 1 && (
                      <div className="w-1 h-24 bg-border mt-4"></div>
                    )}
                  </div>

                  <div className="pt-2 flex-1">
                    <h4 className="text-2xl font-serif font-bold mb-2">
                      {milestone.title}
                    </h4>
                    <p className="font-body text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Explore Our Services
          </h2>
          <p className="text-lg font-body text-muted-foreground mb-8">
            Private dinners, exclusive events, on-board services, and bespoke culinary experiences...
          </p>
          <Link
            to="/prestations"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body hover:opacity-90 transition-opacity"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
