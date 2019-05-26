export const dashboardInitialState = {
  firstname: "Grégory",
  jobName: "Software Engineer",
  modules: ["expenses", "timeTracking"],
  isModalOpened: false
};

function dashboardReducer(state, action) {
  switch (action.type) {
    case "SET_FIRSTNAME": {
      const { firstname } = action;
      return { ...state, firstname };
    }
    case "SET_JOBNAME": {
      const { jobName } = action;
      return { ...state, jobName };
    }
    case "SET_MODULES": {
      const { modules } = action;
      return { ...state, modules };
    }
    case "DISPLAY_MODAL": {
      const { isModalOpened } = action;
      return { ...state, isModalOpened };
    }
    case "SET_STATE": {
      const {
        firstname = state.firstname,
        jobName = state.jobName,
        modules = state.modules,
        isModalOpened = state.isModalOpened
      } = action;

      return { ...state, firstname, jobName, modules, isModalOpened };
    }
    default:
      return state;
  }
}

export default dashboardReducer;
