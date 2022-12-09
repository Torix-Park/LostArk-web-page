import { BrowserRouter } from 'react-router-dom';
import News from './News/News';
import UserInfo from './UserInfo/UserInfo';

const App = () => {
  return (
    <BrowserRouter>
      <UserInfo />
      <News />
    </BrowserRouter>
  );
};

export default App;
