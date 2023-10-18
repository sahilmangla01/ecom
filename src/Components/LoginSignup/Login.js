import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer ,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const loginData ={
    email: "",
    password :""
  }
const Login = () => {
    const [data , setData]= useState(loginData);
  
    const navi =useNavigate()
    const changeHandler=(input , value)=>{
      setData((prev)=>{
       return{
        ...prev,
        [input] : value
       }
  
      })
    }
  
    const submit =(e)=>{
      e.preventDefault();
  
      setData(loginData)
  
     axios.post("https://ecommerceserver-tn9j.onrender.com/api/login",data)
     .then(res => {
      if(res.data.token){
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("login",true)
        localStorage.setItem("user",res.data.user.firstName)
        toast("Login Sucessfully")
        navi("/")
      }
      else{
        toast("Wrong Password")
      }
        console.log(res.data)
    })
     .catch(err => console.log(err))
  
     
  
    }
  
  
    
  
    return (
      
      <Wrapper >
             


          <form className='login__form'
         
      >
          <h1>LOGIN</h1>
        <div className='login__display'>
        
        <input id='email' type='email' placeholder=' ' onChange={event=> changeHandler("email", event.target.value)} value={data['email']} autoComplete='off' required/>
        <span>Email</span>
        </div>
        
        <div className='login__display'>
        
        <input id='password' type='password' placeholder=' ' onChange={event =>changeHandler("password", event.target.value)} value={data['password']} autoComplete='off' required/>
        <span>Password</span>
        </div>
        
        <div className='login__display'>
          <button type='submit'  onClick={submit}>Sign in</button>
        </div>
        <Link to='/register'><div className='registerPage' >Don't have an acoount? signup</div></Link>
  
  
      </form>
      
        <ToastContainer/>
      </Wrapper>
  
    )
  
}

const Wrapper = styled.section`
margin:3rem auto;
width:120rem;
display:flex;
justify-content:center;

.login__form{
  width: 30vw;
  height: 60vh;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  justify-content: left;
  position: relative;
  border:2px solid gray;
  border-radius: 10px;
  
}
.login__form h1{
  padding-left: 5vw;
  margin-bottom:3rem;
  color: ${({theme})=>theme.colors.help};
  letter-spacing: 4px;
  font-size: 3rem;
  border-left: 10px solid #614BC3;
 
}
.login__display{
  padding: 0 5vw;
  display: flex;
  margin-top: 5vh;
  flex-direction: column;
  justify-content: space-between;
  height: 30vh;
  position: relative;
}
.login__display input{
  height: 6vh;
  width: 20vw;
  border: transparent;
  background-color: transparent;
  border-bottom: 2px solid lightgray;
  font-size: 3em;
  z-index: 1;
  
}
.login__display span{
  position: absolute;
  left: 5vw;
  top: 1vh;
  font-size: 2.5rem;
  color: rgb(71, 70, 70);

}

.login__display input:focus{

 outline: none;
 border-bottom: 2px solid #614BC3;
}
.login__display input:focus ~ span , .login__display input:not(:placeholder-shown) + span{
  font-size: 2rem;
  top: -3.5vh;
  color: gray;
  transition: 0.5s;
}

.login__display button{
  height: 8vh;
  width: 15vw;
  margin: auto;
  font-size: 3rem;
  color: gray;
  padding: 5px 0;
  background-color: white;
  border:2px solid gray;
  border-radius: 30px;
}
.login__display button:hover{
  color: white;
  background-color: #614BC3;
  transition: 0.2s;
  border: 2px solid #614BC3;
}
.registerPage{
  
  color: white;
  font-size: 2rem;
  text-align: center; 
  
  background-color: #614BC3;

  
}

@media only screen and (max-width: ${({ theme }) => theme.media.mobile}){
  width:80vw;
  .login__form{
      width: 70vw;
      height: 60vh;
  }
  .login__form h1{
      padding-left: 8vw;
  }
  .login__display{
      margin-top: 20px;
      padding: 0 8vw;
  }
  .login__display span{
      left: 8vw;
  }
  .login__display button{
      height: 10vh;
      width: 50vw;
  }
  .registerPage{
      padding: 10px 30px;
      right: -50px;
  }
  .login__display input{
      width: 50vw;
  }
}

@media only screen and (max-width : ${({theme})=>theme.media.tab}) and (min-width : 540px){
  width:80vw;
  .login__form{
      width: 70vw;
      height: 60vh;

      h1{
        margin-bottom:3rem;
      }
  }
  .login__form h1{
      padding-left: 8vw;
  }
  .login__display{
      margin-top: 20px;
      padding: 0 8vw;
      height: 20vh;
      
  }
  .login__display input{
    font-size:3.4rem;
  }
  .login__display span{
      left: 8vw;
      font-size:3.4rem;
  }
  .login__display input:focus ~ span , .login__display input:not(:placeholder-shown) + span{
    font-size:3rem;
  }
  .login__display button{
      height: 10vh;
      width: 50vw;
  }
  .registerPage{
      
      right: -50px;
  }
  .login__display input{
      width: 50vw;
  }
  .login__display button{
    font-size:4.5rem;
    border-radius:10rem;
  }
  .registerPage{
    font-size:4rem;
  }
}

`

export default Login
