import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";
import { useLanguage } from "@/lib/LanguageContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.chef'), href: "/chef" },
    { label: t('nav.prestations'), href: "/prestations" },
    { label: t('nav.cuisine'), href: "/cuisine" },
    { label: t('nav.portfolio'), href: "/portfolio" },
    { label: t('nav.contact'), href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="text-2xl font-serif font-bold text-foreground tracking-tight">
                {t('header.brand')}
              </div>
              <div className="text-xs text-muted-foreground font-body">
                {t('header.tagline')}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-body tracking-wide hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button and Language Switcher - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className="p-2 hover:bg-secondary transition-colors flex items-center gap-2"
                  title="Change language"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-body">{language.toUpperCase()}</span>
                </button>
                {langMenuOpen && (
                  <div className="absolute right-0 mt-0 bg-background border border-border shadow-lg z-50">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setLangMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm font-body hover:bg-secondary ${
                        language === 'en' ? 'bg-secondary' : ''
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('fr');
                        setLangMenuOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm font-body hover:bg-secondary ${
                        language === 'fr' ? 'bg-secondary' : ''
                      }`}
                    >
                      Français
                    </button>
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className="px-6 py-2 bg-primary text-primary-foreground font-body text-sm hover:opacity-90 transition-opacity"
              >
                {t('nav.reserve')}
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-body hover:bg-secondary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-2 border-t border-border">
                <p className="text-xs font-body text-muted-foreground mb-2">Language</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 text-sm font-body border border-border hover:bg-secondary ${
                      language === 'en' ? 'bg-secondary' : ''
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('fr');
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 text-sm font-body border border-border hover:bg-secondary ${
                      language === 'fr' ? 'bg-secondary' : ''
                    }`}
                  >
                    Français
                  </button>
                </div>
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-body bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                {t('nav.reserve')}
              </Link>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Maison Gauthier</h3>
              <p className="text-sm font-body opacity-90">
                Private French gastronomy for VIP clientele worldwide. Creating unforgettable culinary experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm font-body">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="opacity-90 hover:opacity-100">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm font-body opacity-90">
                <li>+33 7 49 36 22 54</li>
                <li>maisongauthier.ghc@gmail.com</li>
                <li>France</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-serif font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/maisongauthier__" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 text-sm">
                  Instagram
                </a>
                <a href="#" className="opacity-90 hover:opacity-100 text-sm">
                  LinkedIn
                </a>
                <a href="#" className="opacity-90 hover:opacity-100 text-sm">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm font-body opacity-90">
              <p>&copy; 2024 Maison Gauthier. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:opacity-100">
                  Legal Notice
                </a>
                <a href="#" className="hover:opacity-100">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
