import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
/* Kabhi kabhi production mei aise bhi import hota hai. Ab kch nhi sari jagah 'authLogin' use karenge. */
import {login as authLogin} from '../store/authSlice'
import {useDispatch} from 'react-redux'
import {Button, Input, Logo} from './index'
import {useForm} from 'react-hook-form'

// So here we'll use react hook form.

function Login() {
    return (
        <div></div>
    )
}

export default Login