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
