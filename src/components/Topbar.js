import React from 'react';
import "./topbar.css"
import Create from './text/Create';
import {Link} from 'react-router-dom'
// import img_logo from './images/logo192.png'
import img_moi from './images/new-badge.9116f07c.png'
import Slick from './Slick'
import Text from './Text'
import Footer from './Footer';
import login from './login/Login'
import Game from './game/Game'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Read from './text/Read'
import Menu from './Menu'

const Topbar = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
       
       <div><Menu/></div>
        <div id="b"><Slick /></div>
        <h1>BLOCK GAME</h1>
        <ul style={{paddingBottom: "100px", display: "flex"}}>
            <li style={{textAlign: "center", paddingRight: "30px", borderRight: "1px solid #151515"}}> <Link to="/game"><h3>Chơi game X-O</h3> <br /><img src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/149/39/149-39-101P/XO-THE-MOTIVATED-TYPE-Poster.jpg" alt="" style={{maxWidth: "150px"}}/></Link></li>
            <li style={{paddingLeft: "30px"}}> <Link to="/create"><h3>Thêm text</h3></Link>
            </li>
        </ul>
        <div><Read /></div>
        <div><Footer /></div>
        <div class="messenger">
            <a target="_blank" href="https://www.facebook.com/han.hieu.980/ "><span><i class="fab fa-facebook-messenger"></i></span></a>
        </div>

        
        </>
    );
}

export default Topbar;
