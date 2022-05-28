import {Routes,Route} from 'react-router-dom';

import Navigation from './routes/navgation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
// import './categories.styles.scss';
import Shop from './routes/shops/shop.component';
import Checkout from './routes/checkout/checkout.component';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        {/* index =true tells this route is that when you match just slash, so with nothing on it, then this should home component. */}

        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
     
     
    </Routes>
   
  
  );
};

export default App;
