import { a as useI18n, l as useGlobalLoading } from './server.mjs';
import { readonly } from 'vue';

const useLocale = () => {
  const { locale, setLocale } = useI18n();
  const { setLanguageLoading } = useGlobalLoading();
  const changeLocale = async (newLocale) => {
    try {
      setLanguageLoading(true, "در حال تغییر زبان...");
      await new Promise((resolve) => setTimeout(resolve, 500));
      await setLocale(newLocale);
      if (false) ;
      await new Promise((resolve) => setTimeout(resolve, 300));
    } finally {
      setLanguageLoading(false);
    }
  };
  const toggleLocale = async () => {
    const newLocale = locale.value === "en" ? "fa" : "en";
    await changeLocale(newLocale);
  };
  return {
    locale: readonly(locale),
    changeLocale,
    toggleLocale
  };
};

export { useLocale as u };
//# sourceMappingURL=useLocale-BU49rBmi.mjs.map
