import React from "react";
import DashboardContext from "../Dashboard/context/dashboardContext";

const DashboardHeader = () => {
  const handleOpenModal = (e, displayModal) => {
    e.preventDefault();
    displayModal(true);
  };

  return (
    <DashboardContext.Consumer>
      {({ firstname, jobName, displayModal }) => (
        <section className="hero" style={{ borderBottom: "1px solid #ddd" }}>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Bonjour {firstname}</h1>
              <h2 className="subtitle">
                Bienvenue sur votre dashboard {jobName}
              </h2>

              <a
                href="/"
                className="button is-link"
                onClick={e => handleOpenModal(e, displayModal)}
              >
                Gérer mon dashboard
              </a>
            </div>
          </div>
        </section>
      )}
    </DashboardContext.Consumer>
  );
};

export default DashboardHeader;
