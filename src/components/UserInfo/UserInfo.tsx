import { apiRoute, requestSecureGet } from '@libs/api';
import {
  UserAvatarsDataType,
  UserCardsDataType,
  UserCollectiblesDataType,
  UserColosseumsDataType,
  UserCombatSkillsDataType,
  UserEngravingsDataType,
  UserEquipmentDataType,
  UserGemsDataType,
  UserInfoDataType,
  UserProfilesDataType,
} from '@typedef/components/UserInfo/userinfo.types';
import { useCallback, useState } from 'react';

const UserInfo = () => {
  const [userName, setUserName] = useState<string>('');

  const [userData, setUserData] = useState<UserInfoDataType[]>([]);

  const [profilesData, setProfilesData] = useState<UserProfilesDataType>();

  const loadUserInfo = useCallback(async () => {
    const { config, data } = await requestSecureGet<UserInfoDataType[]>(
      apiRoute.characters.default + userName + apiRoute.characters.siblings,
      {},
    );

    if (config.status === 200 && data) {
      setUserData(
        data.sort((a, b) =>
          Math.floor(Number(b.ItemMaxLevel.replace(',', ''))) >
          Math.floor(Number(a.ItemMaxLevel.replace(',', '')))
            ? 1
            : -1,
        ),
      );

      loadUserProfiles();
    } else {
      setUserData([]);
    }
  }, [userName]);

  const loadUserProfiles = useCallback(async () => {
    const { config, data } = await requestSecureGet<UserProfilesDataType>(
      apiRoute.armories.default + userName + apiRoute.armories.profiles,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
      setProfilesData(data);
    } else {
      //
    }
  }, [userName]);

  const loadUserGems = useCallback(async () => {
    const { config, data } = await requestSecureGet<UserGemsDataType>(
      apiRoute.armories.default + userName + apiRoute.armories.gems,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    } else {
      //
    }
  }, [userName]);

  const loadUserCollectibles = useCallback(async () => {
    const { config, data } = await requestSecureGet<UserCollectiblesDataType>(
      apiRoute.armories.default + userName + apiRoute.armories.collectibles,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    } else {
      //
    }
  }, [userName]);

  const loadUserEquipment = useCallback(async () => {
    const { config, data } = await requestSecureGet<UserEquipmentDataType[]>(
      apiRoute.armories.default + userName + apiRoute.armories.equipment,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, [userName]);

  const loadUserAvatars = useCallback(async () => {
    const { config, data } = await requestSecureGet<UserAvatarsDataType[]>(
      apiRoute.armories.default + userName + apiRoute.armories.avatars,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, [userName]);

  const loadUserCombatSkills = useCallback(async () => {
    const { config, data } = await requestSecureGet<UserCombatSkillsDataType[]>(
      apiRoute.armories.default + userName + apiRoute.armories.combatskills,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, [userName]);

  const loadUserEngravings = useCallback(async () => {
    const { config, data } = await requestSecureGet<UserEngravingsDataType>(
      apiRoute.armories.default + userName + apiRoute.armories.engravings,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, [userName]);

  const loadUserCards = useCallback(async () => {
    const { config, data } = await requestSecureGet<UserCardsDataType>(
      apiRoute.armories.default + userName + apiRoute.armories.cards,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, [userName]);

  const loadUserColosseumns = useCallback(async () => {
    const { config, data } = await requestSecureGet<UserColosseumsDataType>(
      apiRoute.armories.default + userName + apiRoute.armories.colosseums,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
    }
  }, [userName]);

  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              loadUserInfo();
              loadUserGems();
              loadUserCollectibles();
              loadUserEquipment();
              loadUserCombatSkills();
              loadUserColosseumns();
              loadUserCards();
              loadUserEngravings();
            }
          }}
        />
        <button
          onClick={() => {
            loadUserInfo();
            loadUserGems();
            loadUserCollectibles();
            loadUserEquipment();
            loadUserAvatars();
          }}
        >
          검색
        </button>

        {userData.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>이름</th>
                <th>전투레벨</th>
                <th>아이템 레벨</th>
                <th>직업</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((user) => (
                <tr style={{ textAlign: 'center' }}>
                  <td>{user.CharacterName}</td>
                  <td>{user.CharacterLevel}</td>
                  <td>{user.ItemMaxLevel}</td>
                  <td>{user.CharacterClassName}</td>
                </tr>
              ))}
              <tr></tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default UserInfo;
