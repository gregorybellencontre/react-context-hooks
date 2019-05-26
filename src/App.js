import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import TranslationContext from "./contexts/translationContext";
import useTranslation from "./hooks/useTranslation";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  const [t, setLocale, locale] = useTranslation();

  return (
    <TranslationContext.Provider value={[t, setLocale, locale]}>
      <Header />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </TranslationContext.Provider>
  );
}

export default App;
