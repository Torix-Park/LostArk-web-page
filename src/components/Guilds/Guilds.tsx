import { apiRoute, requestSecureGet } from '@libs/api';
import { GuildsRankingsDataType } from '@typedef/components/Guilds/guilds.types';
import { useCallback, useEffect } from 'react';

const Guilds = () => {
  const loadRankings = useCallback(async () => {
    const { config, data } = await requestSecureGet<GuildsRankingsDataType[]>(
      apiRoute.guilds.rankings,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, []);

  useEffect(() => {
    loadRankings();
  }, []);

  return <></>;
};

export default Guilds;
