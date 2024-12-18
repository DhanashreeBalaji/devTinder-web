import { Provider } from "react-redux"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import appStore from "./utils/appStore"
import Feed from './components/Feed';
import Connections from "./components/Connections"
import Requests from "./components/Requests"
import Error from "./components/Error"


function App() {
 
  return (
    // Providing access to the store for the whole app
    <Provider store = {appStore} >
    <BrowserRouter basename="/">
     <Routes>
      <Route path = "/"          element = { <Body/> } >
      <Route path = "/"          element = { <Feed/> } /> 
      <Route path="/connections" element = {<Connections/>} />
      <Route path="/requests"    element = {<Requests/>} />
      <Route path = "/login"     element = { <Login/> } />
      <Route path = "/profile"   element = { <Profile/> } />
      <Route path= "/error"      element = { <Error/> } />
               </Route>

     </Routes>
    </BrowserRouter>
 
    </Provider>
  )
}

export default App
