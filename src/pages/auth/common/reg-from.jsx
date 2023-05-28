import React, { useState } from "react";
import { toast } from "react-toastify";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Checkbox from "@/components/ui/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { handleRegister } from "./store";
import axios from "axios";

const schema = yup
  .object({
    name: yup.string().required("Name is Required"),
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup
      .string()
      .min(6, "Password must be at least 8 characters")
      .max(20, "Password shouldn't be more than 20 characters")
      .required("Please enter password"),
    // confirm password
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();



const RegForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });



  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [succ, setSucess] = useState('')
  const [err, setErr] = useState('')

  const registerData = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5555/register', {
      Name: name,
      Email: email,
      Password: password
    }).then((res) => {
      console.log('data saved', res.data)
      setSucess('Your are Registered')
      setTimeout(() => {
        setSucess('')
        navigate('/')
      }, 1500);
      
    }).catch((res) => {
      console.log('some error occured')
      if(res.message === 'Request failed with status code 422'){
        setErr('Email Already Registered')

        setTimeout(() => {
          setErr('')
        }, 1500);
      }

    })
  }

  return (
    <form className="space-y-5">
      <Textinput
        name="name"
        label="name"
        type="text"
        placeholder=" Enter your name"
        onChange={(e) => setName(e.target.value)}
        register={register}
        error={errors.name}
      />{" "}
      <Textinput
        name="email"
        label="email"
        type="email"
        placeholder=" Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        register={register}
        error={errors.email}
      />
      <Textinput
        name="password"
        label="password"
        type="password"
        placeholder=" Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        register={register}
        error={errors.password}
      />

      <button onClick={registerData} className="btn btn-dark block w-full text-center">
        Create an account
      </button>

      <br />
      {
        succ?
        <div className="alert alert-success" role="alert">
        {succ}
      </div>
      :
      null
      }

      {
        err ? 
        <div className="alert alert-danger" role="alert">
        {err}
      </div>
      :
      null
      }
      
    </form>
  );
};

export default RegForm;
