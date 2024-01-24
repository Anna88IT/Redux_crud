import { Stack, Button, TextField, Box } from '@mui/material'

export const UserData = ({ handleChange, submitHandler }) => {

    return (
        <Stack>
            <form >
                <Box textAlign='center'>
                    <TextField
                        size='small'
                        label='First Name'
                        sx={{ mb: 1 }}
                        onChange={(e) => handleChange(e, 'firstName')}
                    />
                    <TextField
                        size='small'
                        label='Last Name'
                        sx={{ mb: 1 }}
                        onChange={(e) => handleChange(e, 'lastName')}
                    />
                     <TextField
                        size='small'
                        label='Age'
                        type='number'
                        sx={{ mb: 1 }}
                        onChange={(e) => handleChange(e, 'age')}
                    />
                     <TextField
                        size='small'
                        label='Address'
                        type='text'
                        sx={{ mb: 1 }}
                        onChange={(e) => handleChange(e, 'address')}
                    />
                     <TextField
                        size='small'
                        label='Email'
                        type='email'
                        sx={{ mb: 1 }}
                        onChange={(e) => handleChange(e, 'email')}
                    />
                    <div>
                        <Button onClick={submitHandler} style={{maxWidth: '200px', maxHeight: '50px', minWidth: '100px', minHeight: '50px'}} variant='contained' size='big' sx={{m: 2}}>Add</Button>
                    </div>
                </Box>
            </form>
        </Stack>
    )
}