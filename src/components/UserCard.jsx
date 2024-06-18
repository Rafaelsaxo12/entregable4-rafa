import React from 'react';
import './styles/userCard.css';
import { FaRegTrashCan } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import { CiGift } from "react-icons/ci";


   

const UserCard = ({user, deleteUser, setUpdate, setIsShow}) => {

    const handleDelete = () => {
        deleteUser('/users', user.id);
    }

    const handleEdit = () => {
        setUpdate(user);
        setIsShow(true)
    }

    return (
    <article className='usercard'>
        <h2 className='usercard__name'>{user.first_name} {user.last_name}</h2>
        <hr />
        <ul className='usercard__list'>
            <li className='usercard__item'><span>Email: </span><span>{user.email}</span></li>
            <li className='usercard__item'><span>Birthday: </span><span><CiGift />
            {user.birthday}</span></li>
        </ul>
        <hr />
        <div className='usercard__buttons'>
            <button className='usercard__delete' onClick={handleDelete}><FaRegTrashCan /></button>
            <button className='usercard__edit' onClick={handleEdit}><LuPencilLine />
            </button>
        </div>
    </article>
    )
}

export default UserCard