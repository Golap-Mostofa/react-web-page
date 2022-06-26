
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
import Header from '../src/Pages/Shared/Header/header'
import Manage from './Pages/Manage/Manage';
function App() {
  return (
    <div className='bg'>
      <Header></Header>
      <Routes> 
        <Route path='/' element={<Home></Home> }></Route>
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
         
            <AddServices></AddServices>
      
        }>
        </Route>
        <Route path='/manage' element={
    
            <Manage></Manage>
          
        }>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
