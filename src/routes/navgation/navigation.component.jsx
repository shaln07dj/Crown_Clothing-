import { Fragment } from "react/cjs/react.production.min"
import { Outlet,Link } from "react-router-dom"

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'

import './navigation.styles.scss';

const Navigation =()=>{
    return (
      <Fragment>
        <div className="navigation">
         <Link className="logo-container" to=''>
         <CrownLogo className='logo'/>
         </Link>
         
         <div className="nav-links-container">
        <Link className="nav-link" to='/shop'>
            SHOP
        </Link>
        <Link className="nav-link" to='/auth'>
            SIGN IN
        </Link>
         </div>
        </div>
        <Outlet/>
        {/* This outlet will now, in turn, render everything else inside */}
  
      </Fragment>
    )
  }

export default Navigation