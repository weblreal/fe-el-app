import React, { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import {
  clearRelatedTags,
  setCurrentArticleID,
  updateRelatedTags,
} from "../redux/slices/Stories/StoriesSlice";
import { IArticleTitleAndBody } from "../models/widgets/IArticleTitleAndBody";
import AppConfig from "../logic/configs/AppConfig";
import BackToListBanner from "../components/BackToListBanner/BackToListBanner";
import useTranslateTags from "../hooks/useTranslateTags";
// Components
import Body from "../components/ArticleTitleAndBody/Body";

const ArticleTitleAndBody = ({
  backToListText,
  tags,
  shareText,
  publishDate,
  title,
  text,
  text2,
  backgroundImage,
  tagsToQuery,
  articleId,
  croppings,
  timeToRead,
  publishText,
}: IArticleTitleAndBody) => {
  // Hooks
  const { tagList } = useTranslateTags(tags);
  const dispatch = useAppDispatch();

  // Effects
  useEffect(() => {
    dispatch(updateRelatedTags(tagsToQuery));
    if (articleId) dispatch(setCurrentArticleID(articleId));
    return () => {
      dispatch(clearRelatedTags());

      if (articleId) dispatch(setCurrentArticleID(null));
    };
  }, [dispatch, tagList, articleId]);

  return (
    <>
      <BackToListBanner
        backToListText={backToListText}
        backgroundImage={backgroundImage}
        title={title}
        publishDate={publishDate}
        timeToRead={timeToRead || ""}
        publishText={publishText || ""}
        croppings={croppings}
      />
      <Body
        backgroundImage={backgroundImage}
        newText={text}
        publishDate={publishDate}
        shareText={shareText}
        tagList={tagList}
        text2={text2}
        title={title}
      />
    </>
  );
};

export default ArticleTitleAndBody;
