export type UserInfoDataType = {
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
};

export type UserProfilesDataType = {
  CharacterImage: string;
  ExpeditionLevel: 0 | number;
  PvpGradeName: string;
  TownLevel: 0 | number;
  TownName: string;
  Title: string;
  GuildMemberGrade: string;
  GuildName: string;
  Stats: [
    {
      Type: string;
      Value: string;
      Tooltip: string[];
    },
  ];
  Tendencies: [
    {
      Type: string;
      Point: 0 | number;
      MaxPoint: 0 | number;
    },
  ];
  ServerName: string;
  CharacterName: string;
  CharacterLevel: 0 | number;
  CharacterClassName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
};

export type UserGemsDataType = {
  Gems: [
    {
      Slot: 0 | number;
      Name: string;
      Icon: string;
      Level: 0 | number;
      Grade: string;
      Tooltip: string;
    },
  ];
  Effects: [
    {
      GemSlot: 0 | number;
      Name: string;
      Description: string;
      Icon: string;
      Tooltip: string;
    },
  ];
};

export type UserCollectiblesDataType = {
  Type: string;
  Icon: string;
  Point: 0 | number;
  MaxPoint: 0 | number;
  CollectiblePoints: {
    PointName: string;
    Point: 0 | number;
    MaxPoint: 0 | number;
  }[];
};

export type UserEquipmentDataType = {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  Tooltip: string;
};

export type UserAvatarsDataType = {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  IsSet: boolean | true;
  IsInner: boolean | true;
  Tooltip: string;
};

export type UserCombatSkillsDataType = {
  Name: string;
  Icon: string;
  Level: 0 | number;
  Type: string;
  IsAwakening: boolean | true;
  Tripods: {
    Tier: 0 | number;
    Slot: 0 | number;
    Name: string;
    Icon: string;
    Level: 0 | number;
    IsSelected: boolean | true;
    Tooltip: string;
  }[];
  Rune: {
    Name: string;
    Icon: string;
    Grade: string;
    Tooltip: string;
  };
  Tooltip: string;
};

export type UserEngravingsDataType = {
  Engravings: {
    Slot: 0 | number;
    Name: string;
    Icon: string;
    Tooltip: string;
  }[];
  Effects: {
    Name: string;
    Description: string;
  }[];
};

export type UserCardsDataType = {
  Cards: {
    Slot: 0 | number;
    Name: string;
    Icon: string;
    AwakeCount: 0 | number;
    AwakeTotal: 0 | number;
    Grade: string;
    Tooltip: string;
  }[];
  Effects: {
    Index: 0 | number;
    CardSlots: number[];
    Items: {
      Name: string;
      Description: string;
    }[];
  }[];
};

export type UserColosseumsDataType = {
  Rank: 0 | number;
  PreRank: 0 | number;
  Exp: 0 | number;
  Colosseums: {
    SeasonName: string;
    Competitive: {
      Rank: 0 | number;
      RankName: string;
      RankIcon: string;
      RankLastMmr: 0 | number;
      PlayCount: 0 | number;
      VictoryCount: 0 | number;
      LoseCount: 0 | number;
      TieCount: 0 | number;
      KillCount: 0 | number;
      AceCount: 0 | number;
      DeathCount: 0 | number;
    };
    TeamDeathmatch: {
      PlayCount: 0 | number;
      VictoryCount: 0 | number;
      LoseCount: 0 | number;
      TieCount: 0 | number;
      KillCount: 0 | number;
      AceCount: 0 | number;
      DeathCount: 0 | number;
    };
    Deathmatch: {
      PlayCount: 0 | number;
      VictoryCount: 0 | number;
      LoseCount: 0 | number;
      TieCount: 0 | number;
      KillCount: 0 | number;
      AceCount: 0 | number;
      DeathCount: 0 | number;
    };
    TeamElimination: {
      FirstWinCount: 0 | number;
      SecondWinCount: 0 | number;
      ThirdWinCount: 0 | number;
      FirstPlayCount: 0 | number;
      SecondPlayCount: 0 | number;
      ThirdPlayCount: 0 | number;
      AllKillCount: 0 | number;
      PlayCount: 0 | number;
      VictoryCount: 0 | number;
      LoseCount: 0 | number;
      TieCount: 0 | number;
      KillCount: 0 | number;
      AceCount: 0 | number;
      DeathCount: 0 | number;
    };
    CoOpBattle: {
      PlayCount: 0 | number;
      VictoryCount: 0 | number;
      LoseCount: 0 | number;
      TieCount: 0 | number;
      KillCount: 0 | number;
      AceCount: 0 | number;
      DeathCount: 0 | number;
    };
  }[];
};
