import { BrowserRouter } from "react-router-dom";
import RouteNavigation from "@routes/RouteNavigation";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <RouteNavigation />
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
