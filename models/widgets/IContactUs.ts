interface IForms {
  label?: string;
  placeholder?: string;
  required?: boolean | string;
  type: string;
}

export interface IContactUs {
  header: string;
  descriptions: string;
  requiredField?: string
  forms: IForms[]
  recipient: string;
  captchaLabel?: string;
  disclaimer?: string;
  submit: string;
}
