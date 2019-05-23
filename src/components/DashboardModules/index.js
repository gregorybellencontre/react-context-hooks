import React from "react";
import DashboardContext from "../Dashboard/context/dashboardContext";
import { modulesList } from "../Dashboard";

import "./styles.css";

const DashboardModules = () => {
  return (
    <DashboardContext.Consumer>
      {({ modules }) => (
        <div>
          <h1 className="title is-4 pageTitle">Accès rapides</h1>

          <div className="modules">
            {modules.map(moduleKey => (
              <div key={moduleKey} className="module">
                <article>
                  <span>{modulesList[moduleKey]}</span>
                </article>
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardContext.Consumer>
  );
};

export default DashboardModules;
