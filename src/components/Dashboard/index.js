import React, { useReducer } from "react";
import DashboardHeader from "./components/Header";
import DashboardModules from "./components/ModulesList";
import SettingsModal from "./components/SettingsModal";
import DashboardContext from "./contexts/dashboardContext";
import dashboardReducer, {
  dashboardInitialState
} from "../../reducers/dashboardReducer";

import "./styles.css";

export const modulesList = {
  payroll: "dashboard_module_payroll",
  absences: "dashboard_module_absences",
  expenses: "dashboard_module_expenses",
  calendar: "dashboard_module_calendar",
  timeTracking: "dashboard_module_time_tracking",
  orgchart: "dashboard_module_orgchart",
  settings: "dashboard_module_settings"
};

const Dashboard = () => {
  const [dashboardState, dashboardDispatch] = useReducer(
    dashboardReducer,
    dashboardInitialState
  );

  return (
    <DashboardContext.Provider value={[dashboardState, dashboardDispatch]}>
      <DashboardHeader />

      <div className="pageContent">
        <DashboardModules />
      </div>

      <SettingsModal />
    </DashboardContext.Provider>
  );
};

export default Dashboard;
