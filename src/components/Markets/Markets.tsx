import { apiRoute, requestSecureGet, requestSecurePost } from '@libs/api';
import {
  MarketItemDataType,
  MarketOptionDataType,
  MarketSearchItemDataType,
} from '@typedef/components/Markets/markets.types';
import { useCallback, useEffect, useState } from 'react';

const Markets = () => {
  const [itemId, setItemId] = useState<string>('');

  const loadMarketOptions = useCallback(async () => {
    const { config, data } = await requestSecureGet<MarketOptionDataType>(
      apiRoute.markets.options,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, []);

  // 거래소
  const loadMarketItem = useCallback(async () => {
    const { config, data } = await requestSecureGet<MarketItemDataType[]>(
      apiRoute.markets.getItems + itemId,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, [itemId]);

  // 경매장
  const searchMarketItem = useCallback(async () => {
    const { config, data } = await requestSecurePost<MarketSearchItemDataType>(
      apiRoute.markets.searchItems,
      {},
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, []);

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
