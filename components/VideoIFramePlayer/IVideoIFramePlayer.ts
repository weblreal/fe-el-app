import { IVideo } from "../../models/IVideo";

export interface IVideoIFramePlayer extends IVideo {
  fixed?: boolean;
  loop?: boolean;
  controls?: boolean;
  fullScreen?: boolean;
  scale?: boolean;
}
