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
