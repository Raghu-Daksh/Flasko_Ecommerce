
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton,Menu,Drawer, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import './header.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import Login from "../login/Login";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useDispatch } from "react-redux";
import { SearchProductsAction } from "../../redux/action/productAction";
import styled from "@emotion/styled";

const Header = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [userData,setUSerData] = useState()
    const [openDrawer, setOpenDrawer] = useState(false);
    const [searchText, setSearchText] = useState();

    let productListCart = JSON.parse(localStorage.getItem('cartItems'));

    const closeHandle = ()=>{
        setOpen(true);
    }
    const handleClick = (event)=>{
        setOpenMenu(event.currentTarget);
    }
    const closeHandle2 = (e)=>{
        setOpenMenu(false);
    }
    const getData = (data)=>{
        setUSerData(data)    
    }
    const logoutUSer = ()=>{
        setUSerData('');
    }
    const handleSearchList = ()=>{
            navigate(`/search/${searchText}`)
            setSearchText('');
    }
    return (
        <header className="header">
            <div className="hamburger" onClick={()=>setOpenDrawer(!openDrawer)} >
                  <MenuIcon style={{color:"white", fontSize:"45px"}}  />
            </div>
            <div className="logo">
             <h4> <NavLink className='logo-icon' to='/'>FLASKO</NavLink></h4>
            </div>
            <div className="search-bar">
                <input value={searchText} type="text" placeholder="Search..." onChange={(e)=>setSearchText(e.target.value)} />
                    <div className="search-icon" onClick={handleSearchList} >
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
            </div>
            <div className= {openDrawer? "user": "closeUser"}>
                <div className="user-account">
                    {
                        userData   ?
                        <>   
                            <h6 onClick={handleClick}>{userData.username}</h6>  
                            <Menu
                                anchorEl={openMenu}
                                open={Boolean(openMenu)}
                                onClose={closeHandle2}
                            >
                                <MenuItem onClick={()=>{closeHandle2(); logoutUSer();}}>
                                    <PowerSettingsNewIcon/>Logout
                                </MenuItem>
                            </Menu>
                    </>
                        :
                            <div className="login-btn" onClick={()=>closeHandle()} >Login</div>
                    }
                </div>
                <Link to='/' style={{textDecoration:'none'}}>
                    <div className="nav-list">
                    <Link to='/' style={{textDecoration: 'none', color:' white', fontSize:'17px'}} > <p style={{marginTop:'14px '}} >Home</p></Link>
                    </div>
                </Link>
                <div className="nav-list">
                    <Link to='/about' style={{textDecoration: 'none', color:' white', fontSize:'17px'}} > <p style={{marginTop:'14px '}} >Abut Us</p></Link>
                </div>
                <div className="nav-list">
                    <Link to='/              ' style={{textDecoration: 'none', color:' white', fontSize:'17px'}} > <p style={{marginTop:'14px '}} >Contact Us</p></Link>
                </div>
                <Login open={open} setOpen={setOpen} getData={getData} />
            </div>
            <Link to='/cart'>
                    <div className="shopping-cart">
                        <ion-icon name="cart-outline"></ion-icon>
                        <span style={{textDecoration:'none'}}>{productListCart?.length}</span>
                    </div>  
                </Link> 
        </header>
    )
}

export default Header;