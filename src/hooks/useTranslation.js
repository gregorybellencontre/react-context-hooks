import { useState } from "react";

import fr_FR from "../i18n/fr_FR";
import gb_GB from "../i18n/gb_GB";

const defaultLocale = "fr_FR";

const messages = {
  fr_FR,
  gb_GB
};

const useTranslation = () => {
  const [locale, setLocale] = useState(defaultLocale);

  return [key => messages[locale][key] || key, setLocale, locale];
};

export default useTranslation;
