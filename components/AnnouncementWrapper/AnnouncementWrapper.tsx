import { AnnouncementAdapter } from "../../adapters/widgets/Announcement.adapter";
import { useFetchContentByIdQuery } from "../../redux/slices/Announcement/AnnouncementAPI";
import dynamic from "next/dynamic";
// Components
const Announcement = dynamic(() => import("../../widgets/Announcement"), {
  ssr: false,
});

const AnnouncementWrapper = ({ genericSettings }: any) => {
  // Variables
  const announcementId = genericSettings?.List?.[0]
    ?.split("/")
    ?.pop()
    ?.split("]")?.[0];

  // Hooks
  const { data } = useFetchContentByIdQuery({ id: announcementId });
  const { adapt } = new AnnouncementAdapter();
  const adaptedData = adapt(data?.content);

  return <Announcement {...adaptedData} />;
};

export default AnnouncementWrapper;
