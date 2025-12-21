import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Config } from './config/config';

import en from './locales/en.json';
import tr from './locales/tr.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            tr: { translation: tr },
            de: { translation: de },
            fr: { translation: fr },
            es: { translation: es },
            pt: { translation: pt },
        },
        lng: Config.locale, // Set language from config
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;
