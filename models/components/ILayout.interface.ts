import { IWidgetModel } from "./../IWidget.interface";

export interface ILayoutModel {
  layoutType: string;
  widgets: Array<IWidgetModel>;
  title: string;
  description: string;
  settings?: any;
  canonicalUrls?: {
    href?: string;
    hreflang?: string;
    rel?: string;
  };
  metaTags?: {
    property?: string;
    content?: string;
    name?: string;
  };
  footerData?: any;
  navigationData?: any;
}

export class LayoutModel implements ILayoutModel {
  layoutType: string;
  widgets: IWidgetModel[];
  title: string;
  description: string;

  constructor(
    layoutType: string,
    widgets: IWidgetModel[],
    title: string,
    description: string
  ) {
    this.layoutType = layoutType;
    this.widgets = widgets;
    this.title = title;
    this.description = description;
  }
}

export interface ILayoutContext {
  inputSettings: any;
  storeLocatorSettings: any;
  lensBuilderSettings: any;
  localeId: string;
  searchPageSettings: any;
}
