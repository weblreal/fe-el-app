// Modules
import { useFetchNotFoundQuery } from "../redux/slices/404/NotFoundAPI";
import { useRouter } from "next/router";
import { useFetchGenericSettingsQuery } from "../redux/slices/404/GenericSettingsAPI";
import { useEffect } from "react";
import { setLabels } from "../redux/slices/Financial/FinancialSlice";
import { useAppDispatch } from "../redux/hooks";

// Components
import OneCloumnLayout from "../Layout/OneColumnLayout";

type NotFoundProps = {
  data: any;
};

const NotFound: React.FC<NotFoundProps> = () => {
  // Hooks
  const { locale } = useRouter();
  const dispatch = useAppDispatch();
  const { data } = useFetchNotFoundQuery({ locale: locale });
  const { data: genericSettings } = useFetchGenericSettingsQuery({
    locale: locale,
    path: ""
  });

  // Variables

  // Functions

  // Effects
  useEffect(() => {
    const saveEnergyToggleText =
      genericSettings?.SuperHeader?.[0]?.saveEnergyToggleText;
    const sharePriceText = genericSettings?.SuperHeader?.[0]?.sharePriceText;
    const target = genericSettings?.SuperHeader?.[0]?.target;
    const targetTag = genericSettings?.SuperHeader?.[0]?.targetTag;

    dispatch(
      setLabels({
        saveEnergyToggleText: saveEnergyToggleText,
        sharePriceText: sharePriceText,
        target: target,
        targetTag: targetTag,
      })
    );
  }, [dispatch, genericSettings]);

  return (
    <>
      <OneCloumnLayout data={data} />
    </>
  );
};

export default NotFound;
