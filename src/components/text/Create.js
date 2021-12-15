import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios'
import Img from './Img'
import Menu from '../Menu'
import {Link} from 'react-router-dom'

export default function Create() {
    const [img, setImg] = useState('');
    const [text, setText] = useState('');

    // thêm ảnh
    const [avartar, setAvartar] = useState('');
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvartar(file)
        localStorage.setItem('img',URL.createObjectURL(file))
        setImg(URL.createObjectURL(file))
    }


    const postData = () => {
        axios.post(`https://61a843ef387ab200171d3075.mockapi.io/text`, {
            img,
            text,
        })
    
    };
    return (
        <div>
        <Menu />
            <Form style={{paddingTop: "25vh"}} className="creact">
            <input type="file" onChange = {handlePreviewAvatar}/>

            {
                avartar && (
                    <img src={avartar.preview} alt="" style={{maxHeight: "100px"}}/>
                )
            }
            <Form.Field>
                    <label>Thêm text</label>
                    <input placeholder='Thêm văn bản' minlength="8" maxlength="300" onChange={(e) => setText(e.target.value)} style={{paddingBottom: "200px"}}/>
                </Form.Field>
            </Form>
           <Button onClick={postData} type='submit'>Submit</Button>
        </div>
    )
}
