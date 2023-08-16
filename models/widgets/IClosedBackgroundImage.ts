import { IBackgroundImage } from "../components/IBackground";
import { ICta } from "../components/ICta";

export interface IClosedBackgroundImage{
    title?: string,
    subTitle?: string,
    paragraphs?: string;
    cta?: ICta;
    backgroundImage: IBackgroundImage[];
    portalId: string;
    showLabel?: string;
    hideLabel?: string;
    blackColor?: boolean;
    darkOverlay?: boolean;
}