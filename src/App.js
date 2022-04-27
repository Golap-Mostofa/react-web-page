
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddServices from './Pages/AddServices/AddServices';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header'
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <Home></Home>
        }></Route>
        <Route path='/home' element={

          <Home></Home>

        }></Route>
        <Route path='service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}>
        </Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddServices></AddServices>
          </RequireAuth>
        }>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
