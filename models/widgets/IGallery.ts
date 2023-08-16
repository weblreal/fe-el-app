import { IGallerySection } from "../components/IGallerySection";

export interface IGallery {
  gallerySection?: IGallerySection[];
  downloadLabel?: string;
  selecLabel?: string;
  deselectLabel?: string;
  selectedLabel?: string;
}
