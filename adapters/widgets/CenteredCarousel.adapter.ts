import { getAkamayUrl } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IArticleCarousel } from "../../models/widgets/IArticleCarousel";
import { Adapter } from "../Adapter";

export class CenteredCarouselAdapter extends Adapter<
  IArticleCarousel,
  Nullable<IArticleCarousel>
> {
  adapt: (source: any) => Nullable<IArticleCarousel> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const getVideo = (videos: any) => {
      return videos.map((video: any) =>
        video.data === null ? video.dataUrl : video.data.uri
      );
    };

    return {
      backgroundImage: data.pictures.map((picture: any) => picture.data.uri),
      backgroundVideo: getVideo(data.videos),
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
