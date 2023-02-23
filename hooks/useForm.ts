/* eslint-disable no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

// NOTE: reference: https://velog.io/@junghyeonsu/React-useForm
function useForm<returnValueType>({
  initialValues,
  onSubmit,
  validate,
}: {
  initialValues: returnValueType;
  onSubmit: (fields: returnValueType) => void;
  validate: (fields: returnValueType) => returnValueType;
}): {
  values: returnValueType;
  errors: returnValueType;
  isLoading: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.SyntheticEvent) => Promise<void>;
} {
  const [values, setValues] = useState<returnValueType>(initialValues);
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    setIsLoading(true);
    event.preventDefault();
    // eslint-disable-next-line no-promise-executor-return
    await new Promise(r => setTimeout(r, 1000));
    setErrors(validate(values));
  };

  useEffect(() => {
    if (isLoading) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
      setIsLoading(false);
    }
  }, [errors]);

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
