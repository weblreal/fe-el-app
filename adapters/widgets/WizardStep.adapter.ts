import { Nullable } from "../../models/Nullable.interface";
import { IWizardStep } from "../../models/widgets/IWizardStep";
import { Adapter } from "../Adapter";

export class WizardStepAdapter extends Adapter<
  IWizardStep,
  Nullable<IWizardStep>
> {
  adapt: (source: any) => Nullable<IWizardStep> = (source) => {
    if (!source.length) return null;
    const data = source?.[0];
    const paragraph = source?.[1];

    let phasesData = data.items.filter(
      (item: any) => item.name != "TeaserLink"
    );

    const phases = phasesData.map((phase: any) => ({
      title: phase.title,
      date: phase.teaserTitle,
      text: phase.teaserText,
      bgImg: phase.pictures?.[0]?.data.uri,
    }));

    return {
      title: data.collectionTitle,
      phases: phases,
      text: paragraph?.detailText,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
