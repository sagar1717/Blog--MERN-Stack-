import Header from "./components/Header"
import Home from "./components/HOME/Home";
import Box from '@material-ui/core/Box';
import DetailView from "./components/post/DetailView";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import CreateView from "./components/post/CreateView";
import UpdateView from "./components/post/UpdateViews";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Box style={{marginTop:64}}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/details/:id" exact component={DetailView}/>
          <Route path="/create" exact component={CreateView}/>
          <Route path="/update/:id" exact component={UpdateView}/>
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
