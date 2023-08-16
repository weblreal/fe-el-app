// Module
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
const AnimatedBanner = dynamic(() => import("../widgets/AnimatedBanner"));

const Home = ({ data }: { data: any }) => {
  return (
    <div>
      <AnimatedBanner
        {...{
          backgroundImage:
            "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/95866/data/picture/089afd83bfc6b2b564ed766fa55e34ab.jpg",
          cta: {
            label: "Visit our Careers page",
            url: "en/careers",
          },
          header:
            "<div><p>Embrace our vision.</p><p>Step into the EssilorLuxottica world.</p></div>",
        }}
      />
    </div>
  );
};


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { page: ["/"] } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      data: null,
    },
    revalidate: 60,
  };
};

export default Home;
