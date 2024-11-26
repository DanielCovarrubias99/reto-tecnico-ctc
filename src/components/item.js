import './item.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Item({ id, title, description, date, location, responsible, initialLikes, onDelete }) {

    const navigate = useNavigate(); 
    const [likes, setLikes] = useState(Number(initialLikes));

    const edit = () => {
        navigate('/editar-tarea');
      };

      const like = () => {
        setLikes(likes + 1);
    };

    return <div className='item'>
        <div className='delete'>
            <button className='iconButton'><i className='fa fa-trash' onClick={onDelete}></i></button>
        </div>

        <h1 className='title'>{title}  <button className='iconButton' onClick={edit}><i className='fa fa-pencil-square-o'></i></button></h1>
        <hr></hr>
        <p className='description'>
            {description}
        </p>
        <p className='responsible'>{responsible}</p>
        <p className='dateLocation'>{location}, {date}</p>
        <button className='iconButton' onClick={like}><i className='fa fa-heart likes'></i> {likes}</button>
    </div>
}

export default Item;