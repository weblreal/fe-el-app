import type { GetServerSideProps } from "next";
import { jsonToLayoutAdapter } from "../../adapters/JsonToLayoutAdapter";
import { cmsRepo } from "../../logic/graphql/CMSRepo";

const Stories = () => {
  return <></>;
};

export default Stories;

export const getServerSideProps: GetServerSideProps = async ({
  res,
  locale,
  params,
}) => {
  try {
    const path = ((params?.page as string[]) || []).join("/");

    const placementData = await cmsRepo.getLayoutData(`el-${locale}/`, path);
    const jsonTolayoutData = jsonToLayoutAdapter.adapt(placementData);

    res.setHeader("content-type", "application/json");
    res.write(JSON.stringify(jsonTolayoutData || []));
  } catch (err) {
    res.write(JSON.stringify(err));
  }

  res.end();
  return { props: {} };
};
