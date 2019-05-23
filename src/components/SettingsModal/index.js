import React, { useState, useContext } from "react";
import DashboardContext from "../Dashboard/context/dashboardContext";
import { modulesList } from "../Dashboard";

import "./styles.css";

const SettingsModal = () => {
  const {
    isModalOpened,
    displayModal,
    firstname,
    jobName,
    modules,
    setFirstname,
    setJobName,
    setModules
  } = useContext(DashboardContext);

  const [firstnameInput, setFirstnameInput] = useState(firstname);
  const [jobNameInput, setJobNameInput] = useState(jobName);
  const [modulesInput, setModulesInput] = useState(modules);

  const modalClassName = `modal ${isModalOpened ? "is-active is-clipped" : ""}`;

  const handleModulesChange = moduleKey => {
    const updatedModules = modulesInput.includes(moduleKey)
      ? modulesInput.filter(m => m !== moduleKey)
      : modulesInput.concat([moduleKey]);

    setModulesInput(updatedModules);
  };

  const handleSave = () => {
    setFirstname(firstnameInput);
    setJobName(jobNameInput);
    setModules(modulesInput);

    displayModal(false);
  };

  return (
    <div className={modalClassName}>
      <div className="modal-background" onClick={() => displayModal(false)} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Gérer mon dashboard</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => displayModal(false)}
          />
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Prénom</label>
            <input
              className="input"
              type="text"
              value={firstnameInput}
              onChange={e => setFirstnameInput(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="label">Poste</label>
            <input
              className="input"
              type="text"
              value={jobNameInput}
              onChange={e => setJobNameInput(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="label">Modules en accès rapide</label>
            {Object.keys(modulesList).map(moduleKey => (
              <label key={moduleKey} className="checkbox">
                <input
                  type="checkbox"
                  checked={modulesInput.includes(moduleKey)}
                  onChange={() => handleModulesChange(moduleKey)}
                />
                {modulesList[moduleKey]}
              </label>
            ))}
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleSave}>
            Sauvegarder
          </button>
          <button className="button" onClick={() => displayModal(false)}>
            Annuler
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SettingsModal;
