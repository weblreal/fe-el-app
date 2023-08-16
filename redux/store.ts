import { NavigationSlice } from "./slices/Navigation/NavigationSlice";
import { StoriesSlice } from "./slices/Stories/StoriesSlice";
import { configureStore } from "@reduxjs/toolkit";
import { financialAPI } from "./slices/Financial/FinancialAPI";
import { storiesAPI } from "./slices/Stories/StoriesAPI";
import { pressReleaseAPI } from "./slices/PressRelease/PressReleaseAPI";
import { SearchSlice } from "./slices/Search/SearchSlice";
import { SearchAPI } from "./slices/Search/SearchAPI";
import { AnnouncementAPI } from "./slices/Announcement/AnnouncementAPI";
import { FinancialSlice } from "./slices/Financial/FinancialSlice";
import { NotFoundAPI } from "./slices/404/NotFoundAPI";
import { GenericSettingsAPI } from "./slices/404/GenericSettingsAPI";
import { PageAPI } from "./slices/Page/PageAPI";
import { CustomerCareAPI } from "./slices/CustomerCare/CustomerCareAPI";
import { ConformityDeclarationSlice } from "./slices/ConformityDeclaration/ConformityDeclarationSlice";
import { conformityAPI } from "./slices/ConformityDeclaration/ConformityDeclarationAPI";

export const store = configureStore({
  reducer: {
    Navigation: NavigationSlice.reducer,
    StoriesSlice: StoriesSlice.reducer,
    SearchSlice: SearchSlice.reducer,
    FinancialSlice: FinancialSlice.reducer,
    ConformityDeclarationSlice: ConformityDeclarationSlice.reducer,
    [financialAPI.reducerPath]: financialAPI.reducer,
    [storiesAPI.reducerPath]: storiesAPI.reducer,
    [pressReleaseAPI.reducerPath]: pressReleaseAPI.reducer,
    [SearchAPI.reducerPath]: SearchAPI.reducer,
    [AnnouncementAPI.reducerPath]: AnnouncementAPI.reducer,
    [NotFoundAPI.reducerPath]: NotFoundAPI.reducer,
    [GenericSettingsAPI.reducerPath]: GenericSettingsAPI.reducer,
    [PageAPI.reducerPath]: PageAPI.reducer,
    [CustomerCareAPI.reducerPath]: CustomerCareAPI.reducer,
    [conformityAPI.reducerPath]: conformityAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      financialAPI.middleware,
      storiesAPI.middleware,
      pressReleaseAPI.middleware,
      SearchAPI.middleware,
      AnnouncementAPI.middleware,
      NotFoundAPI.middleware,
      GenericSettingsAPI.middleware,
      PageAPI.middleware,
      CustomerCareAPI.middleware,
      conformityAPI.middleware
    );
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
