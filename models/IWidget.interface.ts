import {
  GenericWidgetIdModel,
  GenericWidgetNameModel,
  GenericWidgetValueModel,
} from "./IGenericWidgetValue.interface";

export interface IWidgetModel {
  widgetName: GenericWidgetNameModel;
  widgetValue: GenericWidgetValueModel;
  widgetContainerId: string | number;
  widgetAnimation?: string;
  widgetPagePath?: string;
  widgetBackgroundColor?: string;
  initialWidget?: boolean;
  setContenHeight?: (widgetName: string) => any;
  show?: boolean;
}

export class WidgetModel implements IWidgetModel {
  widgetName: GenericWidgetNameModel;
  widgetValue: GenericWidgetValueModel;
  widgetContainerId: string | number;
  widgetAnimation?: string;
  widgetPagePath?: string;

  constructor(
    widgetName: GenericWidgetNameModel,
    widgetValue: GenericWidgetValueModel,
    widgetContainerId: string | number,
    widgetAnimation?: string,
    widgetPagePath?: string
  ) {
    this.widgetContainerId = widgetContainerId;
    this.widgetName = widgetName;
    this.widgetValue = widgetValue;
    this.widgetAnimation = widgetAnimation;
    this.widgetPagePath = widgetPagePath;
  }
}
