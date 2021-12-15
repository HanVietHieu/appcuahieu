import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios'

import { Link } from 'react-router-dom';

export default function Register() {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('')
    const postData = () => {
        axios.post(`https://61a843ef387ab200171d3075.mockapi.io/login`, {
            userName,
            passWord,
            confirmPassword,
            phone,
            email
        });
        var x = document.getElementsByTagName('input');
        for(let i = 0; i < x.length; i++){ 
                x[i].value='';
            } 
            
            alert("bạn đã ký thành công") 
        }

    return (
        <div style={{backgroundImage: 'url("https://phunugioi.com/hinh-anh-dep-cho-powerpoint/hinh-anh-dep-cho-powerpoint-trinh-chieu/")', minHeight: "130vh", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",}}>        
        <div className="login-img" style={{textAlign: "center"}}>
      <img style={{width: "300px"}} src="https://d160p8tq559394.cloudfront.net/images/login/login-form-img.png" alt="" />
    </div>
            <Form className="create-form" style={{width: "30%", marginLeft: "40%", paddingTop: "50px"}}>
                <Form.Field>
                    <label style={{fontSize: "18px", paddingBottom: "10px"}}>User Name</label>
                    <input placeholder='User Name' onChange={(e) => setUserName(e.target.value)}/>
                    <span className="err" style={{display:"none", color:"red", fontSize:"13px"}}>Vui lòng điền thông tin vào đây</span>
                </Form.Field>
                <Form.Field>
                    <label style={{fontSize: "18px", paddingBottom: "10px"}}>Pass Word</label>
                    <input placeholder='Pass Word' type="password" onChange={(e) => setPassWord(e.target.value)}/>
                    <span className="err" style={{display:"none", color:"red", fontSize:"13px"}}>Vui lòng điền thông tin vào đây</span>
                </Form.Field>
                <Form.Field>
                <label style={{fontSize: "18px", paddingBottom: "10px"}}>Confirm password</label>
                    <input placeholder='Confirm password' type="password"  onChange={(e) => setconfirmPassword(e.target.value)}/>
                    <span className="err" style={{display:"none", color:"red", fontSize:"13px"}}>Vui lòng điền thông tin vào đây</span>
                </Form.Field>
                <Form.Field>
                <label style={{fontSize: "18px", paddingBottom: "10px"}}>Phone</label>
                    <input placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)}/>
                    <span className="err" style={{display:"none", color:"red", fontSize:"13px"}}>Vui lòng điền thông tin vào đây</span>
                </Form.Field>
                <Form.Field>
                <label style={{fontSize: "18px", paddingBottom: "10px"}}>Email</label>
                    <input placeholder='123@gmail.com' onChange={(e) => setEmail(e.target.value)}/>
                    <span className="err" style={{display:"none", color:"red", fontSize:"13px"}}>Vui lòng điền thông tin vào đây</span>
                </Form.Field>
                <div style={{display:"flex"}}>
                <Button style={{backgroundColor: "aqua"}} onClick={postData} type='submit'>Đăng Ký</Button>
                   <Link to="/"> <Button style={{backgroundColor: "#fff"}}>Trở về trang chủ</Button> </Link></div>
            </Form>
        </div>
    )
}