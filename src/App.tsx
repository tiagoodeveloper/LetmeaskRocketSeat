// import {Button}  from './components/button';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import {AuthContextProvider} from './contexts/AuthContext'
import { Room } from "./pages/room";
import { AdminRoom } from "./pages/adminRoom";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
      {/* Switch Se uma rota foi satisfeita não procura pelas outras */}
        <Switch> 
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
