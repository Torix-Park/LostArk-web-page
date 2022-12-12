import Markets from '@components/Markets/Markets';
import UserInfo from '@components/UserInfo/UserInfo';
import { Route, Routes } from 'react-router';

const RouteNavigation = () => {
  return (
    <Routes>
      <Route path='/*' element={<UserInfo />} />
      <Route path='/markets' element={<Markets />} />
    </Routes>
  );
};

export default RouteNavigation;
