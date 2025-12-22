import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Le Chef", href: "/chef" },
    { label: "Prestations", href: "/prestations" },
    { label: "Cuisine", href: "/cuisine" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
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
                Chef Privé
              </div>
              <div className="text-xs text-muted-foreground font-body">
                Cuisine Méditerranéenne
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

            {/* CTA Button - Desktop */}
            <Link
              to="/contact"
              className="hidden md:inline-block px-6 py-2 bg-primary text-primary-foreground font-body text-sm hover:opacity-90 transition-opacity"
            >
              Réserver
            </Link>

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
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-sm font-body bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Réserver
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
              <h3 className="font-serif text-xl font-bold mb-4">Chef Privé</h3>
              <p className="text-sm font-body opacity-90">
                Excellence culinaire pour une clientèle de luxe.
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
                <li>+33 (0) 6 XX XX XX XX</li>
                <li>contact@chefprive.com</li>
                <li>Paris, France</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-serif font-bold mb-4">Réseaux</h4>
              <div className="flex gap-4">
                <a href="#" className="opacity-90 hover:opacity-100 text-sm">
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
              <p>&copy; 2024 Chef Privé. Tous droits réservés.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:opacity-100">
                  Mentions légales
                </a>
                <a href="#" className="hover:opacity-100">
                  Politique de confidentialité
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
