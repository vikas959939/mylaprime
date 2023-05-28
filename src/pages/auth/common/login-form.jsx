import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Checkbox from "@/components/ui/Checkbox";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleLogin } from "./store";
import { toast } from "react-toastify";
import axios from "axios";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();
const LoginForm = ({setLoginData}) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    //
    mode: "all",
  });
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5555/login',{
      Email : email,
      Password: password
    }).then((res)=>{
      if(res.data.mssg === 'login success'){
        if(res.data.data.user_type === 'admin'){
          dispatch(handleLogin(true));
          setLoginData(res.data.data)
          setTimeout(() => {
            navigate('/setup')
          }, 1500);
          
        }else{
          dispatch(handleLogin(true));
        setLoginData(res.data.data)
        setTimeout(() => {
          navigate('/calender')
        }, 1500);
        }
        
        
      }else{
        toast.error("Invalid credentials", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
      }
      console.log(res.data.mssg)
    }).catch(()=>{
      console.log('something went wrong')
    })
    
  };

  const [checked, setChecked] = useState(false);

  return (
    <form className="space-y-4 ">
      <Textinput
        name="email"
        label="email"
        placeholder = 'Email'
        type="email"
        onChange={(e)=> setEmail(e.target.value)}
        register={register}
        error={errors.email}
      />
      <Textinput
        name="password"
        label="passwrod"
        type="password"
        placeholder = 'Password'
        onChange={(e)=> setPassword(e.target.value)}
        register={register}
        error={errors.password}
      />
      <div className="flex justify-between">
        <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label="Keep me signed in"
        />
        <Link
          to="/forgot-password"
          className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
        >
          Forgot Password?{" "}
        </Link>
      </div>

      <button onClick={onSubmit} className="btn btn-dark block w-full text-center">Sign in</button>
    </form>
  );
};

export default LoginForm;
