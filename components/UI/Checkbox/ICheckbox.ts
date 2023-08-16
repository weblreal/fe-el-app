import { TypographyProps } from "styled-system";
import { IIconType } from "../../../models/components/IIcon";

interface IOptions {
  label: string;
  value: string;
}

export interface ICheckbox {
  type?: IInputType;
  value?: any;
  label?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  errorMessage?: string;
  icon?: IIconType;
  clearAll?: boolean;
  clearOnclick?: (event?: any) => void;
  onChange?: (event: any) => void;
  submitHandler?: (event?: any) => void;
  className?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
  minLength?: number;
  onBlur?: (event: any) => void;
  autoFocus?: boolean;
  transparent?: boolean;
  onIconClick?: (event?: any) => void;
  options?: IOptions[];
  fonts?: TypographyProps;
}

export type IInputType = "text" | "password" | "number" | "email" | "select" | "radio" | "checkbox" | "textarea";
