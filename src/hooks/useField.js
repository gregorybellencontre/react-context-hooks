import { useState } from "react";

const useField = (defaultValue = {}) => {
  const [state, setState] = useState(defaultValue);

  const fieldValue = key => (key in state ? state[key] : "");

  const setFieldValue = (key, value) =>
    setState({
      ...state,
      [key]: value
    });

  return [fieldValue, setFieldValue];
};

export default useField;
