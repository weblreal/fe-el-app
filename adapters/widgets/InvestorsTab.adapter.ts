import { Nullable } from "../../models/Nullable.interface";
import { IInvestorsTab } from "../../models/widgets/IInvestorsTab";
import { Adapter } from "../Adapter";

export class InvestorsTabAdapter extends Adapter<
  { tabs: IInvestorsTab[] },
  Nullable<{ tabs: IInvestorsTab[] }>
> {
  adapt: (source: any) => Nullable<{ tabs: IInvestorsTab[] }> = (source) => {
    if (!source.length) return null;
    const data = source;
    const tabs = data?.map((tab: any): IInvestorsTab => {

      return {
        layout: tab?.viewtype,
        title: tab?.teaserTitle1,
        hash: tab?.teaserTitle3,
        subTitle1: tab?.teaserText1,
        subTitle2: tab?.teaserText2,
        src: tab?.teaserTitle2,
        pictures: tab?.pictures.map((item: any) => item?.data?.uri || ""),
      };
    });
    return {
      tabs: tabs,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
