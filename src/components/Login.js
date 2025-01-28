import React, { useState } from 'react';
import {Box, TextField, Button, DialogTitle, styled, Typography } from '@mui/material'; 
const Wrapper = styled(Box)`
width:400px; border:1px solid #ddd; box-shadow:3px 2px 3px  rgba(0, 0, 0, .15); margin: 100px auto 0; text-transform:none; 
`
const FormBox = styled(Box)`
padding:20px 25px; display:flex; flex:1; flex-direction:column;
& > div, & > button, & > p{margin-top:20px;}
`
export default function Login() {
    const [account, toggleAcount] = useState('Login');
    const SwitchAccount = () => {
        toggleAcount(account === 'Login' ? 'SignUp' : 'Login')
    }
  return (
    <Wrapper>
       
        {account === 'Login' ?
        <FormBox>
             <DialogTitle >Login</DialogTitle>
            <TextField type='text' name='UserName' label="User Name"></TextField>
            <TextField type='password' name='Password' label="Password" ></TextField>
            <Button variant='contained'>Signin</Button>
            <Typography style={{textAlign:'center'}}>OR</Typography>
            <Button onClick={() => SwitchAccount()}>Create a Account</Button>
        </FormBox>
        : 
        
        <FormBox>
            <DialogTitle >Sign Up</DialogTitle>
            <TextField type='text' name='name' label="Name"></TextField>
            <TextField type='text' name='UserName' label="User Name"></TextField>
            <TextField type='password' name='Password' label="Password" ></TextField> 
            <Button variant='contained'>Signup</Button>
            <Typography style={{textAlign:'center'}}>OR</Typography>
            <Button onClick={() => SwitchAccount()}>Allredy have a Account</Button>
        </FormBox> }
    </Wrapper>
  )
}
