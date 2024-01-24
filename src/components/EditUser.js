import React, {useCallback, useState} from "react";
import { Stack, Button, TextField, Box } from '@mui/material';
import { useDispatch } from "react-redux";
import {useNavigate, useParams} from "react-router";
import { updateData } from "../store/DataSlice";


export const EditUser = () => {
    const {user} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = JSON.parse(user);
    const [newData, setNewData] = useState(data);

    const submitHandler = useCallback(() => {
        dispatch(updateData(newData));
        navigate("/");
    }, [newData])

    const handleChange = (e, field) => {
        setNewData({
            ...newData,
            [field]: e.target.value,
            id: data.id
        })
    }

    return (
        <Stack>
            <form >
                <Box textAlign='center'>
                    <TextField
                        size='small'
                        label='First Name'
                        sx={{ mb: 1 }}
                        value={newData.firstName}
                        onChange={(e) => handleChange(e, 'firstName')}
                    />
                    <TextField
                        size='small'
                        label='Last Name'
                        sx={{ mb: 1 }}
                        value={newData.lastName}
                        onChange={(e) => handleChange(e, 'lastName')}
                    />
                    <TextField
                        size='small'
                        label='Age'
                        type='number'
                        sx={{ mb: 1 }}
                        value={newData.age}
                        onChange={(e) => handleChange(e, 'age')}
                    />
                    <TextField
                        size='small'
                        label='Address'
                        type='text'
                        sx={{ mb: 1 }}
                        value={newData.address}
                        onChange={(e) => handleChange(e, 'address')}
                    />
                    <TextField
                        size='small'
                        label='Email'
                        type='email'
                        sx={{ mb: 1 }}
                        value={newData.email}
                        onChange={(e) => handleChange(e, 'email')}
                    />
                    <div>
                        <Button onClick={submitHandler} style={{maxWidth: '200px', maxHeight: '50px', minWidth: '100px', minHeight: '50px'}} variant='contained' size='big' sx={{m: 2}}>Save</Button>
                    </div>
                </Box>
            </form>
        </Stack>
    )
}