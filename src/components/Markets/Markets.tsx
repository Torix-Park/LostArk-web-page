import { requestSecureGet } from '@libs/api';
import {
  MarketItemDataType,
  MarketOptionDataType,
} from '@typedef/components/Markets/markets.types';
import { useCallback, useEffect, useState } from 'react';

const Markets = () => {
  const [itemId, setItemId] = useState<string>('');

  const loadMarketOptions = useCallback(async () => {
    const { config, data } = await requestSecureGet<MarketOptionDataType>(
      'markets/options',
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, []);

  const loadMarketItem = useCallback(async () => {
    const { config, data } = await requestSecureGet<MarketItemDataType[]>(
      `/markets/items/${itemId}`,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, [itemId]);

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
