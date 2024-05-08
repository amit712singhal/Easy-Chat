import Header from "./components/Header"
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Chat from "./pages/Chat"
import Notfound from "./pages/Notfound"
import { useAuth } from "./components/context/AuthContext"
// import Logo from "./components/shared/Logo"
function App(){
  console.log(useAuth()?.isLoggedIn());
    return <main>
    <Header/>
    <Routes>
    <Route path="/" element={<Home  />}/>
    <Route path="/login" element={<Login  />}/>
    <Route path="/signup" element={<Signup  />} />
    <Route path="/chat" element={<Chat />}/>
    <Route path="/" element={<Notfound />}/>
    </Routes>
    </main>
}
export default App ;