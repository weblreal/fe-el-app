interface IContacts {
  email: string;
  name?: string;
  role: string;
}

interface IForms {
  label?: string;
  placeholder?: string;
  required?: boolean | string;
  type: string;
}

interface ICta {
  requiredField?: string;
  subscribe?: string;
  unsubscribe?: string;
}

export interface IIRAlerts {
  contactHeader?: string;
  contacts?: IContacts[];
  forms?: {
    description: string;
    inputs?: IForms[];
    title: string;
  };
  cta?: ICta;
  src: string;
}
