import React from 'react';
import { TableContainer, Table, TableCell, TableHead, TableBody, Paper, TableRow, Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from "../store/DataSlice";

export const UsersList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const usersData = useSelector((state) => state.data.data);

    return (
        <TableContainer component={Paper} sx={{ mt: 1 }}>
            <Button variant='contained' size='small' sx={{ m: 2 }} onClick={() => navigate('user/add')}>Add User</Button>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name </TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                {
                    usersData.length !== 0 &&

                <TableBody>
                    {usersData.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.firstName}</TableCell>
                            <TableCell>{user.lastName}</TableCell>
                            <TableCell>{user.age}</TableCell>
                            <TableCell>{user.address}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button onClick={() => navigate(`/user/edit/${JSON.stringify(user)}`)}>edit</Button>
                                <Button onClick={() => dispatch(deleteData(user.id))}>delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                }
            </Table>
        </TableContainer>
    )
}