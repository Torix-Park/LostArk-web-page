import { BrowserRouter } from 'react-router-dom';
import RouteNavigation from '@routes/RouteNavigation';

const App = () => {
  return (
    <BrowserRouter>
      <RouteNavigation />
    </BrowserRouter>
  );
};

export default App;
