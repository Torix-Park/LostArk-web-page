import { requestSecureGet } from '@libs/api';
import { UserInfoDataType } from '@typedef/components/UserInfo/userinfo.types';
import { useCallback, useState } from 'react';

const UserInfo = () => {
  const [userName, setUserName] = useState<string>('');

  const loadUserInfo = useCallback(async () => {
    const { config, data } = await requestSecureGet<UserInfoDataType>(
      `characters/${userName}/siblings`,
      {},
    );

    if (config.status === 200) {
      console.log(data);
    }
  }, []);
  return (
    <>
      <div>
        <input></input>
        <button></button>
      </div>
    </>
  );
};

export default UserInfo;
