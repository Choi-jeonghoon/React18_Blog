import { useCallback, useState } from "react";

const useForm = (initialValue) => {
  const [formValue, setFormValue] = useState(initialValue);

  const handleFormValueChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValue((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    },
    [setFormValue]
  );

  const handleFormValueSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return {
    formValue,
    handleFormValueChange,
    handleFormValueSubmit,
  };
};

export default useForm;
