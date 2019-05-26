import React, { useContext } from "react";
import DashboardContext from "../../contexts/dashboardContext";
import TranslationContext from "../../../../contexts/translationContext";
import useField from "../../../../hooks/useField";
import { modulesList } from "../../";

import "./styles.css";

const SettingsModal = () => {
  const [t] = useContext(TranslationContext);
  const [state, dispatch] = useContext(DashboardContext);
  const { firstname, jobName, modules, isModalOpened } = state;

  const [fieldValue, setFieldValue] = useField({
    firstname,
    jobName,
    modules
  });

  const modalClassName = `modal ${isModalOpened ? "is-active is-clipped" : ""}`;

  const handleModulesChange = moduleKey => {
    const modules = fieldValue("modules");
    const updatedModules = modules.includes(moduleKey)
      ? modules.filter(m => m !== moduleKey)
      : modules.concat([moduleKey]);

    setFieldValue("modules", updatedModules);
  };

  const handleSave = e => {
    e.preventDefault();

    dispatch({
      type: "SET_STATE",
      firstname: fieldValue("firstname"),
      jobName: fieldValue("jobName"),
      modules: fieldValue("modules"),
      isModalOpened: false
    });
  };

  const closeModal = () => {
    dispatch({ type: "DISPLAY_MODAL", isModalOpened: false });
  };

  return (
    <form className={modalClassName} onSubmit={handleSave}>
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{t("dashboard_manage")}</p>
          <button className="delete" aria-label="close" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">{t("dashboard_settings_firstname")}</label>
            <input
              className="input"
              type="text"
              value={fieldValue("firstname")}
              onChange={e => setFieldValue("firstname", e.target.value)}
            />
          </div>
          <div className="field">
            <label className="label">{t("dashboard_settings_jobName")}</label>
            <input
              className="input"
              type="text"
              value={fieldValue("jobName")}
              onChange={e => setFieldValue("jobName", e.target.value)}
            />
          </div>
          <div className="field">
            <label className="label">
              {t("dashboard_settings_modules_title")}
            </label>
            {Object.keys(modulesList).map(moduleKey => (
              <label key={moduleKey} className="checkbox">
                <input
                  type="checkbox"
                  checked={fieldValue("modules").includes(moduleKey)}
                  onChange={() => handleModulesChange(moduleKey)}
                />
                {t(modulesList[moduleKey])}
              </label>
            ))}
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleSave}>
            {t("dashboard_settings_save")}
          </button>
          <button className="button" onClick={closeModal}>
            {t("dashboard_settings_cancel")}
          </button>
        </footer>
      </div>
    </form>
  );
};

export default SettingsModal;
