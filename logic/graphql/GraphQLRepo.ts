import getConfig from "next/config";
import { stripIgnoredCharacters } from "graphql";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { StoriesQuery, StoriesTagsQuery } from "./query/StoriesQuery";
import { IRepo } from "../../models/IRepo.interface";
import { PageQuery } from "./query/Page";
import { PathsQuery } from "./query/Paths";
import { PathsIdQuery } from "./query/PathsID";
import { SettingsQuery } from "./query/Settings";
import { SearchResultsQuery } from "./query/SearchResultsQuery";
import { RelatedPaths } from "./query/RelatedPaths";
import { FileLinkQuery } from "./query/FileLink";
import { ContentByIdQuery } from "./query/ContentID";

const { serverRuntimeConfig } = getConfig();

export class GraphQLRepo implements IRepo {
  currentPage = "";

  currentContext() {
    return new ApolloClient({
      ssrMode: false,
      link: new HttpLink({
        uri: serverRuntimeConfig.RUNTIME_GRAPHQL_URL || process.env.GRAPHQL_URL,
        credentials: "same-origin",
        useGETForQueries: true,
      }),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "no-cache",
          errorPolicy: "ignore",
        },
        query: {
          fetchPolicy: "no-cache",
          errorPolicy: "all",
        },
      },
    });
  }

  getLayoutData(language: string, path: string): Promise<any> {
    this.currentPage = language + path;

    const currentContext = new ApolloClient({
      ssrMode: false,
      link: new HttpLink({
        uri:
          (serverRuntimeConfig.RUNTIME_GRAPHQL_URL || process.env.GRAPHQL_URL) +
          "?area=" +
          language.replace("le-", ""),
        credentials: "same-origin",
        useGETForQueries: true,
        print: (ast, originalPrint) =>
          stripIgnoredCharacters(originalPrint(ast)),
      }),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "no-cache",
          errorPolicy: "ignore",
        },
        query: {
          fetchPolicy: "no-cache",
          errorPolicy: "all",
        },
      },
    });

    return currentContext.query(PageQuery({ path: language + path }));
  }

  getPathsData(id: string): Promise<any> {
    return this.currentContext().query(PathsQuery({ id: id }));
  }

  getRelatedPaths(path: string): Promise<any> {
    return this.currentContext().query(RelatedPaths({ path: path }));
  }

  getPathsId(): Promise<any> {
    return this.currentContext().query(PathsIdQuery());
  }

  getCMSSettings(path: string, names?: string[] | string): Promise<any> {
    return this.currentContext().query(
      SettingsQuery({
        path: path,
        names: names,
      })
    );
  }

  getStories(
    tags: string,
    limit: number = 12,
    sortFields: string = "EXTERNALLY_DISPLAYED_DATE_DESC",
    siteId: string
  ) {
    return this.currentContext().query(
      StoriesQuery({
        tags: tags,
        limit: limit,
        sortFields: sortFields,
        siteId: siteId,
      })
    );
  }

  getStoriesTags(limit: number = 999999, siteId: string, tags: string) {
    return this.currentContext().query(
      StoriesTagsQuery({
        tags: tags,
        limit: limit,
        siteId: siteId,
      })
    );
  }

  getPressReleaseTags(limit: number = 999999, siteId: string) {
    return this.currentContext().query(
      StoriesTagsQuery({
        tags: "__press_Release",
        limit: limit,
        siteId: siteId,
      })
    );
  }

  getSearchResults(localeId: string, search: string) {
    return this.currentContext().query(
      SearchResultsQuery({
        search: search,
        id: localeId,
      })
    );
  }

  getFileLink(id: string) {
    return this.currentContext().query(FileLinkQuery({ id: id }));
  }

  getContentById(id: string) {
    return this.currentContext().query(ContentByIdQuery({ id: id }));
  }
}
