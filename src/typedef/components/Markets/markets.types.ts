export type MarketOptionDataType = {
  Categories: [
    {
      Subs: [
        {
          Code: 0 | number;
          CodeName: string;
        },
      ];
      Code: 0 | number;
      CodeName: string;
    },
  ];
  ItemGrades: string[];
  ItemTiers: number[];
  Classes: string[];
};

export type MarketItemDataType = {
  Name: string;
  TradeRemainCount: 0 | number;
  BundleCount: 0 | number;
  Stats: {
    Date: string;
    AvgPrice: 0 | number;
    TradeCount: 0 | number;
  }[];
};

export type MarketSearchItemDataType = {
  PageNo: 0 | number;
  PageSize: 0 | number;
  TotalCount: 0 | number;
  Items: {
    Id: 0 | number;
    Name: string;
    Grade: string;
    Icon: string;
    BundleCount: 0 | number;
    TradeRemainCount: 0 | number;
    YDayAvgPrice: 0 | number;
    RecentPrice: 0 | number;
    CurrentMinPrice: 0 | number;
  }[];
};
