import { useLanguage } from './LanguageContext';
import { getTranslation, translations, Language } from './translations';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (path: string): string => {
    return getTranslation(language, path);
  };

  return { t, language };
}
