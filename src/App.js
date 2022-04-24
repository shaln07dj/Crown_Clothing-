import {Routes,Route} from 'react-router-dom';

import Navigation from './routes/navgation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';
// import './categories.styles.scss';

const App = () => {


const Shop= ()=>{
  return(
    <div>
      <h1>I am Shop</h1>
    </div>

  )
}

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        {/* index =true tells this route is that when you match just slash, so with nothing on it, then this should home component. */}

        <Route path='shop' element={<Shop/>}/>
        <Route path='signin' element={<SignIn/>}/>
      </Route>
     
     
    </Routes>
   
  
  );
};

export default App;
