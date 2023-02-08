// import { requestSecureGet } from '@libs/api';
import { apiRoute, requestSecureGet } from "../../libs/api";
import { NewsDataTypes } from "@typedef/components/News/news.types";
import React, { useCallback, useEffect, useState } from "react";
import { userTokenSelector } from "@stories/userToken";
import { useRecoilValue } from "recoil";

const News = () => {
  const userToken = useRecoilValue(userTokenSelector);

  const [data, setData] = useState<NewsDataTypes[]>([]);
  const LoadNews = useCallback(async () => {
    const { config, data } = await requestSecureGet<NewsDataTypes[]>(
      apiRoute.news.events,
      {},
      userToken
    );

    if (config.status === 200) {
      console.log(data);
      console.log(config);
      setData(data);
    }
  }, [userToken]);

  useEffect(() => {
    LoadNews();
  }, [LoadNews]);

  return (
    <React.Fragment>
      {data?.map((title) => (
        <div>
          <p key={title.Link}>{title.Title} </p>
          <img src={title.Thumbnail} alt="img" />
        </div>
      ))}
    </React.Fragment>
  );
};

export default News;
