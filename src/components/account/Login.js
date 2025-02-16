import React, { useState } from 'react';
import {Box, TextField, Button, DialogTitle, styled, Typography } from '@mui/material';  
import { API } from '../../services/api.js';
const Wrapper = styled(Box)`
width:400px; border:1px solid #ddd; box-shadow:3px 2px 3px  rgba(0, 0, 0, .15); margin: 100px auto 0; text-transform:none; 
`
const FormBox = styled(Box)`
padding:20px 25px; display:flex; flex:1; flex-direction:column;
& > div, & > button, & > p{margin-top:20px;}
`
const Error = styled(Typography)`
color:red; 
`

export default function Login() {
  const signupInitiallValue = {
    name:'',
    user:'',
    password:''
  }
    const [account, toggleAccount] = useState('Login'); 
   const [signUp, setSignup] = useState(signupInitiallValue); 
   const [error, setError] = useState('');

const SwitchAccount = () => {
   account === 'signUp' ? toggleAccount('Login') : toggleAccount('signUp');
} 
 
const onChangeFun = (e) => {
 setSignup ({...signUp, [e.target.name] : e.target.value});

}
 
 
const signupUser = async  () => {
  let response = await API.userSignup(signUp);
  if(response.isSuccess){
    setError('');
    setSignup(signupInitiallValue);
    toggleAccount('Login');
    
  }else{
    setError('Someting went wrong! please try again later');
  }
  }
 
    
  return (
    <Wrapper>
       
        {account === 'Login' ?
        <FormBox>
             <DialogTitle >Login</DialogTitle>
            <TextField type='text' name='UserName' label="User Name"></TextField>
            <TextField type='password' name='Pass' label="Pass" ></TextField>
            {error && <Error>{error}</Error>}
            <Button variant='contained'>Signin</Button>
            <Typography style={{textAlign:'center'}}>OR</Typography>
            <Button onClick={() => SwitchAccount()}>Create a Account</Button>
        </FormBox>
        : 
        
        <FormBox>
            <DialogTitle >Sign Up</DialogTitle>
            <TextField type='text' name='name' label="Name" onChange={(e) => onChangeFun(e)}></TextField>
            <TextField type='text' name='user' label="User" onChange={(e) => onChangeFun(e)}></TextField>
            <TextField type='password' name='password' label="Password"  onChange={(e) => onChangeFun(e)}></TextField> 
            {error && <Error>{error}</Error>}
            <Button variant='contained' onClick={() => signupUser()}>Signup</Button>
            <Typography style={{textAlign:'center'}}>OR</Typography>
            <Button onClick={() => SwitchAccount()}>Allredy have a Account</Button>
        </FormBox> }
    </Wrapper>
  )
}
