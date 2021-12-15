import React from 'react';
import { Table } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Read() {

   
    const setData = (data) => {
        let { img,text } = data;
        localStorage.setItem('IMG', img);
        localStorage.setItem('TEXT', text);
       
}
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://61a843ef387ab200171d3075.mockapi.io/text`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const onDelete = (id) => {
        axios.delete(`https://61a843ef387ab200171d3075.mockapi.io/text/${id}`)
        .then(() => {
            getData();
        })
      }
      const getData = () => {
        axios.get(`https://61a843ef387ab200171d3075.mockapi.io/text`)
            .then((getData) => {
                 setAPIData(getData.data);
                 
             })
    }
    
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Danh sách Blog</h1>
                <div>
                    {APIData.map((data) => {
                    return (
                        <div style={{display: "flex", gridTemplate: "auto auto auto"}}>
                            <div>
                        <img height="300px" width="300px" src={data.img} alt="anh lỗi" />
                            <h5>{data.text}</h5>
                            
                            <Link to='/update'>
                                <p> 
                                     <button onClick={() => setData(data)}>Update</button>
                                </p>
                            </Link>
                            {/* tha thu */}
                            <Table.Cell>
   <button onClick={() => onDelete(data.id)}>Delete</button>
</Table.Cell>
                        </div></div>
                            )})}
                </div>      
        </div>
    )
}