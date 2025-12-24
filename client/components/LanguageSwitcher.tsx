import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1 text-sm font-body hover:bg-secondary transition-colors"
      title={i18n.language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
    >
      <Globe className="w-4 h-4" />
      <span>{i18n.language.toUpperCase()}</span>
    </button>
  );
}
