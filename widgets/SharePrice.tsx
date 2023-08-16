import React from "react";
import { ISharePrice } from "../models/widgets/ISharePrice";
import { useFetchFinanceDataQuery } from "../redux/slices/Financial/FinancialAPI";
// Components
import Container from "../components/UI/Container/Container";
import FinancialData from "../components/SharePrice/FinancialData";
import FinancialEvents from "../components/SharePrice/FinancialEvents";

const SharePrice = ({ sharePrice, latestEvent, nextEvents }: ISharePrice) => {
  //FETCH DATA
  const { data: price } = useFetchFinanceDataQuery(null, {
    pollingInterval: 30000,
  });

  const shareData = Object.values(sharePrice);
  shareData.pop();
  const renderShare = shareData.every((share: string) => share === "");
  
  return (
    <Container width="full" maxWidth="screen" margin="0 auto" overflow="hidden">
      {!renderShare && <FinancialData sharePrice={sharePrice} price={{ ...price }} />}
      {renderShare && <Container backgroundColor="neutral.10" height="1px"></Container>}
      <FinancialEvents latestEvent={latestEvent} nextEvents={nextEvents} />
    </Container>
  );
};

export default SharePrice;
