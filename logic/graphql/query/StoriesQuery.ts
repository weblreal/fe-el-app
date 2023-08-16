import { gql } from "@apollo/client";

export const StoriesQuery = (variables?: any) => {
  return {
    query: gql`
      query StoriesQuery(
        $tags: String!
        $limit: Int!
        $sortFields: [SortFieldWithOrder]!
        $siteId: String!
      ) {
        content {
          search(
            query: $tags
            limit: $limit
            siteId: $siteId
            includeSubTypes: false
            docTypes: "CMArticle"
            sortFields: $sortFields
          ) {
            numFound
            result {
              id
              name
              ... on CMArticle {
                id
                extDisplayedDate
                teaserTitle
                title
                detailText
                teaserText
                pictures {
                  id
                  name
                  title
                  data {
                    uri
                    contentType
                  }
                  uriTemplate
                  crops {
                    aspectRatio {
                      height
                      width
                    }
                    name
                    minWidth
                    minHeight
                    sizes {
                      height
                      width
                    }
                  }
                }
                subjectTaxonomy {
                  id
                  name
                  externalReference
                  settings(paths: [["en"], ["fr"], ["it"]])
                }
                related {
                  ... on CMTeaser {
                    viewtype
                    id
                    type
                    name
                    title
                    teaserTitle
                    teaserText
                    detailText
                    pictures {
                      id
                      name
                      title
                      data {
                        uri
                        contentType
                      }
                      uriTemplate
                      crops {
                        aspectRatio {
                          height
                          width
                        }
                        name
                        minWidth
                        minHeight
                        sizes {
                          height
                          width
                        }
                      }
                    }
                    teaserOverlaySettings {
                      enabled
                      style
                    }
                    teaserTargets {
                      callToActionEnabled
                      callToActionText
                      target {
                        id
                        name
                        type
                        title
                        navigationPath {
                          name
                          segment
                        }
                      }
                    }
                  }
                  ... on CMDownload {
                    filename
                    id
                    data {
                      contentType
                      uri
                      size
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables,
  };
};

export const StoriesTagsQuery = (variables?: any) => {
  return {
    query: gql`
      query StoriesQuery($tags: String!, $limit: Int!, $siteId: String!) {
        content {
          search(
            query: $tags
            limit: $limit
            siteId: $siteId
            includeSubTypes: false
            docTypes: "CMArticle"
            sortFields: EXTERNALLY_DISPLAYED_DATE_DESC
          ) {
            numFound
            result {
              ... on CMArticle {
                subjectTaxonomy {
                  id
                  name
                  externalReference
                  settings(paths: [["en"], ["fr"], ["it"]])
                }
              }
            }
          }
        }
      }
    `,
    variables,
  };
};
