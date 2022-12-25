import React, { useEffect, useState } from 'react';
import icon from "../images/icon.jpg"
import camera from '../images/camera.jpg'
import Card from '../Card';
import '../styles/PostViewStyle.css';
import axios from 'axios';

import {Link} from 'react-router-dom';

const PostView = () => {
    const [setstate, updateState] = useState([]);

    useEffect( () => {
        function getData() {
           
            axios.get('https://instaclone-node-backend.onrender.com/PostView')
          
            .then(ress =>{
                console.log(ress.data);
                // console.log( typeof ress.data.found)
                // let it=Object.entries(ress.data.found).map((ele)=>{console.log(ele[1].file)})
                // console.log(it);
                // updateState(Object.entries(ress.data.found))
                updateState(ress.data)
            } )
            .catch(err => console.log(err))
        }
        getData()
        console.log(setstate)
    }, []);

    return (
        <div className='page'>
            <div className="box-top">
                <div className='pics'>
                    <img src={icon} alt='app icons' />
                </div>
                <p className='heading'>Instaclone</p>
                <div className='pics'>
                    <Link to='/PostData'><img src={camera} alt='cam' /></Link>
                    
                </div>
            </div>
            <div className='line'></div>
             {setstate.map((ele,i)=>{
                return(<Card post={ele} key={i}/>)
             })}
        </div>
    )
}

export default PostView;