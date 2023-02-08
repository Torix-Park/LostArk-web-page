import { apiRoute, requestSecureGet, requestSecurePost } from "@libs/api";
import { userTokenSelector } from "@stories/userToken";
import {
  MarketItemDataType,
  MarketOptionDataType,
  MarketSearchItemDataType,
} from "@typedef/components/Markets/markets.types";
import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const Markets = () => {
  const userToken = useRecoilValue(userTokenSelector);
  const [itemId, setItemId] = useState<string>("");

  const loadMarketOptions = useCallback(async () => {
    const { config, data } = await requestSecureGet<MarketOptionDataType>(
      apiRoute.markets.options,
      {},
      userToken
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, [userToken]);

  // 거래소
  const loadMarketItem = useCallback(async () => {
    const { config, data } = await requestSecureGet<MarketItemDataType[]>(
      apiRoute.markets.getItems + itemId,
      {},
      userToken
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, [userToken, itemId]);

  // 경매장
  const searchMarketItem = useCallback(async () => {
    const { config, data } = await requestSecurePost<MarketSearchItemDataType>(
      apiRoute.markets.searchItems,
      {},
      {},
      userToken
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, [userToken]);

  useEffect(() => {
    loadMarketOptions();
  }, []);

  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setItemId(e.target.value);
          }}
        />
        <button onClick={loadMarketItem}>검색</button>
      </div>
    </>
  );
};

export default Markets;
