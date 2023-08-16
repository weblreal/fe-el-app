import { getAdapterViewtype } from "../../logic/utilities";
import { IGalleryItem } from "../../models/components/IGalleryItem";
import { IGallerySection } from "../../models/components/IGallerySection";
import { Nullable } from "../../models/Nullable.interface";
import { IGallery } from "../../models/widgets/IGallery";
import { Adapter } from "../Adapter";

export class GalleryAdapter extends Adapter<IGallery, Nullable<IGallery>> {
  adapt: (source: any) => Nullable<IGallery> = (source) => {
    if (!source.length) return null;
    const data = getAdapterViewtype(source, "Filter");

    const labels = data.selected?.settings;

    const section = data?.unselected?.map((section: any): IGallerySection => {
      const galleryItems = section?.items?.map(
        (item: any): IGalleryItem => ({
          title: item?.title || item?.name,
          media: item?.data?.uri,
          // copyright: "Copyright: <EssilorLuxottica TBD>",
          copyright: "",
          // endofrights: "End of rights: <date/”no limitation”>",
          endofrights: "",
          mediaFile: {
            url: item?.data?.uri,
            size: Math.round(item?.data?.size / 10000) / 100,
            type: item?.data?.contentType,
          },
        })
      );

      return {
        title: section?.collectionTitle,
        galleryItems: galleryItems,
      };
    });

    return {
      gallerySection: section,
      downloadLabel: labels?.Label1,
      selecLabel: labels?.Label2 || "-",
      deselectLabel: labels?.Label3 || "-",
      selectedLabel: labels?.Label4,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
