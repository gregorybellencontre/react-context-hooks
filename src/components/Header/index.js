import React, { useContext } from "react";
import TranslationContext from "../../contexts/translationContext";

const Header = () => {
  const [t, setLocale, locale] = useContext(TranslationContext);

  const changeLocale = (e, locale) => {
    e.preventDefault();
    setLocale(locale);
  };

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{ borderBottom: "1px solid #ccc", backgroundColor: "#eee" }}
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <strong>Paris.js - React Hooks &amp; React Context API</strong>
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <a href="/" className="navbar-link">
            {t("dashboard_locale_menu")}
          </a>

          <div className="navbar-dropdown">
            {locale !== "fr_FR" && (
              <a
                href="/"
                className="navbar-item"
                onClick={e => changeLocale(e, "fr_FR")}
              >
                Français
              </a>
            )}
            {locale !== "gb_GB" && (
              <a
                href="/"
                className="navbar-item"
                onClick={e => changeLocale(e, "gb_GB")}
              >
                English
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
