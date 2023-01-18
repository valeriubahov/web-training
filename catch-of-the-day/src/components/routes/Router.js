import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import NotFound from "../UI/NotFound";
import StorePicker from "../UI/StorePicker";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route exact path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
