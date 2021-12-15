
import React, { useState, useEffect  } from 'react';
import "./topbar.css"
import {Link} from 'react-router-dom'
// import img_logo from './images/logo192.png'
import img_moi from './images/new-badge.9116f07c.png'
import Slick from './Slick'
import Text from './Text'
import Footer from './Footer';
import login from './login/Login'

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { button } from 'react-bootstrap';


const Menu = () => {
    const [user, setUser] = useState('Đăng nhập');
    
    useEffect(() => {
        const y = JSON.stringify(localStorage.getItem('name'));
        console.log(y)
        if(y != "null" ){
           setUser(y);
        }
        console.log(user);
    }, []);

    useEffect(() => {
        console.log(user);
    },
    [user]);

    return (
        <div>
            <div className="menu">
        <div id="a">
            <div className="container a">
            
                <div className="row">
                
                    <div className="col-lg-2 col-xl-2 col-md-2">
                            <img className="img-logo" src="/images/logo192.png" alt="" />
                    </div>
                    <div className="col-lg-10 col-xl-10 col-md-10">
                        <ul className="main-menu">
                            <li className="line1 line"><Link to="/">BLOCK</Link></li>
                            <li className="line2 line">Chương trình giáo dục GDPT 2018</li>
                            <li className=" main-menu_2 line">Tập huấn <i class="fas fa-angle-down"></i>
                                <div>
                                    <li>Tài liệu tập huấn</li>
                                    <li>Học liệu điện tử</li>
                                    <li>Bài kiểm tra tập huấn</li>
                                </div>
                            </li>
                            <li className="line4 line">Bài giảng điện tử 
                                <img className="img_moi" src={img_moi} alt="" />
                            </li>
                            <li className="menu-button line"><span>Kích hoạt sách</span></li>
                            <Link to="/login">
                            <li className="menu-button line menu-button2"><span id='user'>{user}</span></li>
                            </Link>
                            
                        </ul>
                    </div>
                    </div>

                    
                </div>
                {/* đã xong menu */}
            </div>
        </div>
        </div>
    );
}

export default Menu;
