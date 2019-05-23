import React, { useState } from "react";
import DashboardHeader from "../DashboardHeader";
import DashboardModules from "../DashboardModules";
import SettingsModal from "../SettingsModal";
import DashboardContext from "./context/dashboardContext";

import "./styles.css";

export const modulesList = {
  payroll: "Bulletins de paie",
  absences: "Congés & absences",
  expenses: "Notes de frais",
  calendar: "Calendrier",
  timeTracking: "Temps de travail",
  orgchart: "Organigramme",
  settings: "Gestion du compte"
};

const Dashboard = () => {
  const [firstname, setFirstname] = useState("Grégory");
  const [jobName, setJobName] = useState("Software Engineer");
  const [modules, setModules] = useState(["expenses", "timeTracking"]);
  const [isModalOpened, displayModal] = useState(false);

  const contextData = {
    firstname,
    setFirstname,
    jobName,
    setJobName,
    modules,
    setModules,
    isModalOpened,
    displayModal
  };

  return (
    <DashboardContext.Provider value={contextData}>
      <DashboardHeader />

      <div className="pageContent">
        <DashboardModules />
      </div>

      <SettingsModal />
    </DashboardContext.Provider>
  );
};

export default Dashboard;
