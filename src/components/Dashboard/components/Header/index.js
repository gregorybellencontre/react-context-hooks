import React, { useContext } from "react";
import DashboardContext from "../../contexts/dashboardContext";
import TranslationContext from "../../../../contexts/translationContext";

const Header = () => {
  const [t] = useContext(TranslationContext);

  const handleOpenModal = (e, dispatch) => {
    e.preventDefault();
    dispatch({ type: "DISPLAY_MODAL", isModalOpened: true });
  };

  return (
    <DashboardContext.Consumer>
      {([state, dispatch]) => {
        const { firstname, jobName } = state;

        return (
          <section className="hero" style={{ borderBottom: "1px solid #ddd" }}>
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  {t("dashboard_hello")} {firstname}
                </h1>
                <h2 className="subtitle">
                  {t("dashboard_welcome")} {jobName}
                </h2>

                <a
                  href="/"
                  className="button is-link"
                  onClick={e => handleOpenModal(e, dispatch)}
                >
                  {t("dashboard_manage")}
                </a>
              </div>
            </div>
          </section>
        );
      }}
    </DashboardContext.Consumer>
  );
};

export default Header;
