// Libraries
import { useEffect, useRef, useState } from "react";

interface IUseForm {
  register: (name: string, options?: any) => IRegister | void;
  validateAll: () => void;
  formData: IFormData;
  error: any;
  isValid: boolean;
  reset: () => void;
  onMount?: any;
}

interface IRegister {
  type:
    | "text"
    | "password"
    | "number"
    | "email"
    | "select"
    | "radio"
    | "checkbox"
    | "textarea";
  pattern?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  min?: number;
  max?: number;
  defaultValue?: string;
  checked?: any;
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
}

type IFormData = {
  [property: string]: { error?: string; value: string | number };
};

export type IErrorTypes =
  | "Required field"
  | "Invalid value"
  | "maxLength"
  | "minLength"
  | "min"
  | "max";

function useForm(): IUseForm {
  /**
   * States
   */
  const [initialValues, setInitialValues] = useState<any>({});
  const [formData, setFormData] = useState<IFormData>({});
  const [formSettings, setFormSettings] = useState<any>({});
  const schemaRef = useRef<any>({});

  /**
   * Validation function
   */
  const onValidate = (
    name: string,
    value: number | string
  ): IErrorTypes | null => {
    if (!name) return null;
    if (!formSettings[name]?.validation) return null;

    const { pattern, required, maxLength, minLength, min, max } =
      formSettings[name];

    // Required
    if (required === true) {
      if (
        (!value && typeof value !== "boolean") ||
        (Array.isArray(value) && !value.length)
      ) {
        return "Required field";
      }
    }

    // Pattern
    if (pattern) {
      if (typeof value === "string") {
        if (!value.toLowerCase().match(pattern) && value !== "")
          return "Invalid value";
      }

      if (value === undefined && required === true) return "Invalid value";
    }

    // Max Length
    if (maxLength) {
      if (typeof value === "string")
        if (value.length > maxLength) return "maxLength";
    }

    // min Length
    if (minLength) {
      if (typeof value === "string")
        if (value.length < minLength) return "minLength";
      if (value === undefined) return "minLength";
    }

    // Min
    if (min) {
      if (value < min) return "min";
    }

    // Max
    if (max) {
      if (value > max) return "max";
    }

    return null;
  };

  const validateAll = () => {
    const keys = Object.keys(formData);

    keys.forEach((key) => {
      const err = onValidate(key, formData[key].value);
      setFormData((prev: any) => ({
        ...prev,
        [key]: { ...prev[key], error: err },
      }));
    });
  };

  /**
   * Handlers
   */
  const onChange = (e: any) => {
    const { name, value, type, checked } = e.target || e;
    const err = onValidate(name, value);

    setFormData((prev: any) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: type === "checkbox" ? checked : value,
        error: err,
      },
    }));
  };

  const onBlur = (e: any) => {
    const { name, value } = e.target;
    const err = onValidate(name, value);

    setFormData((prev: any) => ({
      ...prev,
      [name]: { ...prev[name], value, error: err },
    }));
  };

  /**
   * Register new input
   */
  const register = (name: string, options: IRegister) => {
    const {
      required,
      type,
      pattern,
      maxLength,
      minLength,
      defaultValue,
      min,
      max,
    } = options || {};

    const enableValidation =
      required || pattern || maxLength || minLength || min || max
        ? true
        : false;

    // Set Schema
    if (schemaRef.current) {
      schemaRef.current = {
        ...schemaRef.current,
        [name]: {
          value: defaultValue,
          error: null,
          required: required || false,
          pattern: pattern,
          maxLength: maxLength,
          minLength: minLength,
          min: min,
          max: max,
          validation: enableValidation,
        },
      };
    }

    const value = formData[name]?.value || "";

    return { type, name, onChange, onBlur, value, defaultValue };
  };

  /**
   * Reset
   */
  const reset = () => {
    setFormData(initialValues);
  };

  /**
   * Initialize schema
   */
  useEffect(() => {
    const schema = schemaRef.current;

    // Settings
    setFormSettings({ ...schema });

    const properties = Object.keys(schema);
    // Filter properties

    // Form values
    const formValues = properties.reduce((obj: any, key: any) => {
      const defaultValue = schema[key].value;
      const currentValue = formData[key];

      obj[key] = {
        value: schema[key].validation
          ? currentValue === undefined
            ? defaultValue
            : currentValue.value
          : "",
        error: undefined,
      };
      return obj;
    }, {});

    setInitialValues(formValues);
    setFormData(formValues);
  }, [schemaRef]);

  /**
   * Check form validity
   */
  let isValid = false;
  const errValue = Object.values(formData);
  const formValue = Object.values(formData);

  if (errValue.length && formValue.length) {
    const noError = errValue.every(
      (err) => err.error === null || err.error === undefined
    );
    const newValues = formValue.some((err) => err.value === undefined);

    if (newValues) {
      isValid = false;
    } else {
      isValid = noError;
    }
  }

  /**
   * Will set all errors for each key
   */
  const error: { [key: string]: any } = {};
  Object.keys(formData)?.forEach((data: any) => {
    error[data] = formData?.[data]?.error;
  });

  return {
    register,
    validateAll,
    formData,
    error,
    isValid,
    reset,
  };
}

export default useForm;
