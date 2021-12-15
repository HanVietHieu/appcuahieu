import React, { useState, useEffect } from 'react';
import Menu from '../Menu'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

const Update = () => {
    const [img, setImg] = useState('');
    const [text, setText] = useState('');

    const [id, setID] = useState(null);
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setImg(localStorage.getItem('IMG'));
        setText(localStorage.getItem('TEXT'));
}, []);

 const updateAPIData = () => {
        axios.put(`https://61a843ef387ab200171d3075.mockapi.io/text/${id}`, {
             img,
             text,
        })
    }
    


    // thêm ảnh
    const [avartar, setAvartar] = useState('');
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvartar(file)
        localStorage.setItem('img',URL.createObjectURL(file))
        setImg(URL.createObjectURL(file))
    }
    return (
        <>
            <Menu />
            <div style={{paddingTop: "25vh"}}>
            <input placeholder='First Name' value={img} onChange={(e) => setImg(e.target.value)}/>

                <br />



            <input type="file" onChange = {handlePreviewAvatar}/>

        {
    avartar && (
        <img src={avartar.preview} alt="" style={{maxHeight: "100px"}}/>
    )
        }

        <label>Sửa text</label>
        <input placeholder='Sửa văn bản' minlength="8" maxlength="300" value={text} onChange={(e) => setText(e.target.value)} style={{paddingBottom: "200px"}}/>
        <Button type='submit' onClick={updateAPIData}>Update</Button>
            </div>
        </>
    );
}

export default Update;
