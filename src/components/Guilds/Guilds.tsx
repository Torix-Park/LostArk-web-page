import { apiRoute, requestSecureGet } from "@libs/api";
import { userTokenSelector } from "@stories/userToken";
import { GuildsRankingsDataType } from "@typedef/components/Guilds/guilds.types";
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";

const Guilds = () => {
  const userToken = useRecoilValue(userTokenSelector);

  const loadRankings = useCallback(async () => {
    const { config, data } = await requestSecureGet<GuildsRankingsDataType[]>(
      apiRoute.guilds.rankings,
      {},
      userToken
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, [userToken]);

  useEffect(() => {
    loadRankings();
  }, []);

  return <></>;
};

export default Guilds;
