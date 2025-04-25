import React from 'react';
import {AppBar, Button, Toolbar, styled} from '@mui/material';  
import { Link } from 'react-router-dom';
const MenuBg = styled(AppBar)`
    background: #fff;
    color: #000; 
`;
const MainMenu = styled(Toolbar)`
    justify-content: center;
    & > a {
        text-decoration: none;
        color: inherit;
        margin: 0 20px;
        font-size: 18px;
    }`;


const Header = () => {
    return (
        <MenuBg position="static">
            <MainMenu> 
                <Link to={'/'}> Home  </Link>
                <Link to={'/about'}> About  </Link>
                <Link to={'/contact'}> Contact  </Link>
                <Link to={'/login'}> Logout  </Link> 
                <Link to={'/addpost'}><Button variant="contained">Add Blog</Button></Link>
            </MainMenu>
        </MenuBg>
    );
};

export default Header;