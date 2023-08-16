import { useRouter } from "next/router";
import { useMemo } from "react";
import { ITags } from "../components/PressRelease/IPressRelease";

const useTranslateTags = (
  tags: ITags[] = []
): { tagList: string[]; translateTag: (translations: ITags) => string } => {
  // Hooks
  const { locale = "" } = useRouter();

  const tagList = useMemo(
    () =>
      tags?.map((tag: ITags) => tag?.[locale])?.filter((tag) => tag !== null) ||
      [],
    [tags, locale]
  );

  const translateTag = (translations: ITags) => {
    return translations?.[locale];
  };

  return { tagList, translateTag };
};

export default useTranslateTags;
