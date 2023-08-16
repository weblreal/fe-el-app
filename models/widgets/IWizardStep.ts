export interface IWizardStep {
    title?: string;
    phases?: Array<IPhase>;
    text?: string;
}

export interface IPhase{
    title: string;
    date: string;
    text: string;
    bgImg: string;
}