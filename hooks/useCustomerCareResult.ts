import { Nullable } from "../models/Nullable.interface";
import { IBrandsSelection } from "../models/widgets/ICustomerCare";
import { useFetchContentByIdQuery } from "../redux/slices/Announcement/AnnouncementAPI";
import { useMemo } from "react";

const useCustomerCareResult = ({
    selectedBrand,
    formData,
    templateText,
  }: {
    formData: { [key: string]: string | number };
    selectedBrand?: Nullable<IBrandsSelection>;
    templateText: string;
  }) => {
    // Get Ids
    const ids = useMemo(() => {
      const rawIdOne = selectedBrand?.countries?.find((country) => country.value === formData?.country)?.parameterOne?.split("/");
      const rawIdTwo = selectedBrand?.countries?.find((country) => country.value === formData?.country)?.parameterTwo?.split("/");
  
      let idOne = rawIdOne?.[rawIdOne?.length - 1]?.replace(/]/g, "");
      let idTwo = rawIdTwo?.[rawIdTwo?.length - 1]?.replace(/]/g, "");
  
      return { idOne, idTwo };
    }, [selectedBrand, formData]);
  
    // Fetch by ID
    const { data: dataOne, isLoading: isLoadingOne } = useFetchContentByIdQuery({ id: ids?.idOne });
    const { data: dataTwo, isLoading: isLoadingTwo } = useFetchContentByIdQuery({ id: ids?.idTwo });
  
    // Generate anchors
    const parameterOne = dataOne?.content?.url ? `<pre><a href="${dataOne?.content?.url}">${dataOne?.content?.url}</a></pre>` : null;
    const parameterTwo = dataTwo?.content?.url ? `<pre><a href="${dataTwo?.content?.url}">${dataTwo?.content?.url}</a></pre>` : null;
  
    const paramOneEmail = dataOne?.content?.eMail ? `<pre><a href="mailto:${dataOne?.content?.eMail}">${dataOne?.content?.eMail}</a></pre>` : null;
    const paramTwoEmail = dataTwo?.content?.eMail ? `<pre><a href="mailto:${dataTwo?.content?.eMail}">${dataTwo?.content?.eMail}</a></pre>` : null;


    const paramOne = ids.idOne ? parameterOne || paramOneEmail || "" : "";
    const paramTwo = ids?.idTwo ? parameterTwo || paramTwoEmail || "" : "";

    const finalResultOne = paramOne ? templateText.replace(/{{PARAMETER_1}}/g, paramOne) : "";
    const finalResult = paramOne ? finalResultOne.replace(/{{PARAMETER_2}}/g, paramTwo) : "";
  
    return { finalResult, isLoading: isLoadingOne || isLoadingTwo };
  };
  
export default useCustomerCareResult;