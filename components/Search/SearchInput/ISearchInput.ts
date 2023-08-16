export interface ISearchInput {
  placeholder?: string;
  label1?: string;
  defaultValue?: string;
  onChange?: (events: any) => void;
  onSubmit?: (events: any) => void;
  onCancel?: () => void;
}

export interface IInput {
  placeholder?: string;
  onChange?: (events: any) => void;
  onSubmit?: (events?: any) => void;
  onCancel?: () => void;
  value?: string;
}
