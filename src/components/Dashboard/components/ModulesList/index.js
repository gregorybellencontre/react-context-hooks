import React, { useContext } from "react";
import DashboardContext from "../../contexts/dashboardContext";
import TranslationContext from "../../../../contexts/translationContext";
import { modulesList } from "../../";

import "./styles.css";

const ModulesList = () => {
  const [t] = useContext(TranslationContext);

  return (
    <DashboardContext.Consumer>
      {([state]) => {
        const { modules } = state;

        return (
          <div>
            <h1 className="title is-4 pageTitle">
              {t("dashboard_modules_list_title")}
            </h1>

            <div className="modules">
              {modules.map(moduleKey => (
                <div key={moduleKey} className="module">
                  <article>
                    <span>{t(modulesList[moduleKey])}</span>
                  </article>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </DashboardContext.Consumer>
  );
};

export default ModulesList;
