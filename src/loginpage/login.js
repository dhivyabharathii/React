import React,{useState} from 'react';

import {useHistory} from 'react-router-dom'
export default function Login(){
    const [NameInput, setNameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const history = useHistory();

const handleNameChange = (e) => {
    setNameInput(e.target.value);
}

const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
}

const a=() => {
    if(NameInput=="Dhi" && passwordInput=="1234"){
       alert("Login Successful");
       history.push('/hii')
        
    }
    else{
        alert("in");
    }
}
    return(
<div>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="style.css"/>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>

    <title>Login</title>

        <div class="box">
    <div class="container">

        <div class="top">
            
            <header>Login</header>
        </div>

        <div class="input-field">
            <input type="text" class="input" id="name" value={NameInput} placeholder="Username"  onChange={handleNameChange} />
            <i class='bx bx-user' ></i>
        </div>

        <div class="input-field">
            <input type="Password" class="input" id="password" value={passwordInput} placeholder="Password" onChange={handlePasswordChange} />
            <i class='bx bx-lock-alt'></i>
        </div>

        <div class="input-field">
            <input type="submit" class="submit" value="Login" onclick={a} />
        </div>

        <div class="two-col">
            <div class="one">
               <input type="checkbox" name="" id="check"/>
               <label for="check"> Remember Me</label>
            </div>
            <div class="two">
                <label><a href="#">Forgot password?</a></label>
            </div>
        </div>
    </div>
</div> 
</div>  
       

    );
}