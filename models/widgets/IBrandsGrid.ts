import { ITags } from "../../components/PressRelease/IPressRelease";
import { ICta } from "../components/ICta";

export interface IBrandsGrid {
    title?: string;
    title2?: string;
    brands: IBrandsItem[];
    filters?: IBrandsGridFilter[]
}

export interface IBrandsGridFilter {
    name: string,
    value: string,
    translations: ITags
}
export interface IBrandsItem{
    title?: string;
    title2?: string;
    longText1?: string;
    logoImage: string[];
    cta: ICta[];
    keyword?: string;
    onClick?: () => void;
    active?: boolean;
}