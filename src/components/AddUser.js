import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserData } from './UserData';
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../store/DataSlice";

export const AddUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({ firstName: '', lastName: '', age: 0, address: '', email: '' });

    const submitHandler = useCallback((e) => {
        e.preventDefault();
        dispatch(addData(data));
        navigate("/");
    }, [data]);

    const handleChange = (e, field) => {
        setData({
            ...data,
            [field]: e.target.value,
            id: Date.now()
        })
    }

    return (
        <UserData handleChange = {handleChange} submitHandler = {submitHandler}/>
    )
}