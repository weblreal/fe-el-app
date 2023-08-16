import { gql } from "@apollo/client";

export const SearchResultsQuery = (variables?: any) => {
  return {
    query: gql`
      query PageQuery($id: String!, $search: String!) {
        content {
          search(
            query: $search
            limit: 300
            siteId: $id
            sortFields: [DOCUMENTTYPE_ASC]
            includeSubTypes: false
            docTypes: "CMChannel"
          ) {
            numFound
            result {
              id
              __typename
              ...CMChannel
            }
          }
        }
      }

      fragment CMChannel on CMChannel {
        id
        title
        segment
        htmlDescription
        navigationPath {
          id
          segment
        }
      }
    `,
    variables,
  };
};
