import { requestSecureGet } from '@libs/api';
import {
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
      `characters/${userName}/siblings`,
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
      `armories/characters/${userName}/profiles`,
      {},
    );

    if (config.status === 200 && data) {
      console.log(data);
      setProfilesData(data);
    } else {
      //
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
            }
          }}
        />
        <button onClick={loadUserInfo}>검색</button>

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
