import { useState } from "react";

function useForm(initialState) {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (fieldName, value) => {
    setFormState({
      ...formState,
      [fieldName]: value,
    });
  };

  return [formState, handleInputChange];
}

export default useForm;
