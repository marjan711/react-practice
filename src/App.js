import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FriendInfo from './components/FriendInfo/FriendInfo';



function App() {
  return (
    <div className="App">
      
      
      
      

      <Router>
        <Header></Header>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/friends">
            <Friends></Friends>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/friend/:friendId">
            <FriendInfo></FriendInfo>
          </Route>

          <Route path="*">
             <Error></Error>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
