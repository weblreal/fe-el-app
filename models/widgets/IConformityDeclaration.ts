export interface IOptions {
  id: number | string;
  label: string;
  tooltipTitle: string;
  tooltipPicture: string;
  tooltipDescription: string;
}

interface IConformityDeclaration {
  paragraph?: string;
  errorMessage?: string;
  options?: IOptions[];
}

export default IConformityDeclaration;
