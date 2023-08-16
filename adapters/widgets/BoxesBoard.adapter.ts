import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IBoard, IBoxesBoard } from "../../models/widgets/IBoxesBoard";
import { Adapter } from "../Adapter";

export class BoxesBoardAdapter extends Adapter<
IBoxesBoard,
  Nullable<IBoxesBoard>
> {
  adapt: (source: any) => Nullable<IBoxesBoard> = (source) => {
    if (!source.length) return null;
    const boardData = source[0];
    const ctaData = source[1];

    const boards = boardData?.items?.map(
      (board: any): IBoard => ({
        title: board?.teaserTitle1,
        subTitle: board?.teaserTitle2,
        backgroundImage: getAdapterImage(board?.pictures)[0],
        cta: getAdapterCTA(board?.teaserTargets)?.[0] || {
          label: "Read more",
          url: "#",
        },
      })
    );

    return {
      title: boardData?.collectionTitle,
      boards: boards,
      cta: getAdapterCTA(ctaData.teaserTargets)?.[0] || {
        label: "View all",
        url: "#"
      }
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
