import UserInfo from '@components/UserInfo/UserInfo';
import { Route, Routes } from 'react-router';

const RouteNavigation = () => {
  return (
    <Routes>
      <Route path='/*' element={<UserInfo />} />
    </Routes>
  );
};

export default RouteNavigation;
