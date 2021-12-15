import React from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import topbar from "../Topbar";
import { Alert } from "react-bootstrap";
import axios from "axios";
import Topbar from "../Topbar";

export default function Login() {
  const [check, setCheck] = useState(false)
  const [index, setIndex] = useState(0)
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [passWord, setPassWord] = useState("");
  const url = "https://61a843ef387ab200171d3075.mockapi.io/login";
  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, []);
  console.log(user)
  console.log(users);  
  const login = () => {
    setIndex(users.map(e => e.userName).indexOf(user))
    if(passWord === users[index].passWord) {
      setCheck(true)
      localStorage.setItem('name', users[index].userName)
     
    }
  }
  return (
    <>
     {check &&  <Link to="/"><h1 style={{margin: "10px 10%"}}><button style={{backgroundColor: "aqua", border: 'none', padding: "10px 20px"}}>ĐI TỚI TRANG CHỦ</button></h1></Link>}
    <div style={{ minHeight: "100vh" }}>
      <div className="login-img" style={{ textAlign: "center" }}>
        <img
          style={{ width: "300px" }}
          src="https://d160p8tq559394.cloudfront.net/images/login/login-form-img.png"
          alt=""
        />
      </div>
      <Form>
        <Form.Field style={{ width: "30%", marginLeft: "40%" }}>
          <label>User Name</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="User Name"
            onChange={(e) => setUser(e.target.value)}
          />
          <span
            id="err1"
            style={{ display: "none", color: "red", fontSize: "13px" }}
          >
            Vui lòng điền thông tin vào đây
          </span>
        </Form.Field>
        <Form.Field style={{ width: "30%", marginLeft: "40%" }}>
          <label>Pass Word</label>
          <input
            type="password"
            name="password"
            placeholder="Pass Word"
            id="password"
            onChange={(e) => setPassWord(e.target.value)}
          />
          <span
            id="err2"
            style={{ display: "none", color: "red", fontSize: "13px" }}
          >
            Vui lòng điền thông tin vào đây
          </span>
        </Form.Field>
        <Button
          style={{ backgroundColor: "aqua", marginLeft: "40%" }}
          type="submit"
          onClick={login}
        >
          Submit
        </Button>
      </Form>
      <p style={{ marginLeft: "40%", paddingTop: "30px" }}>
        Bạn chưa có tài khoản
        <Link to="/Register">đăng ký ngay</Link>{" "}
      </p>
    </div>
   
    </>
  );
  }
