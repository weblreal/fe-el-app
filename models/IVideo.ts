export interface IVideo {
  src: string;
  muted?: boolean;
  play?: boolean;
  maxWidth?: "screen" | "screen2" | "screen3" | "screen4" | "100vw";
  autoPlay?: boolean;
}
