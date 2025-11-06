import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
/* Kabhi kabhi production mei aise bhi import hota hai. Ab kch nhi sari jagah 'authLogin' use karenge. */
import {login as storeLogin} from '../store/authSlice'
import {useDispatch} from 'react-redux'
import {Button, Input, Logo} from './index'
import {set, useForm} from 'react-hook-form'
import authService from '../appwrite/auth'

// So here we'll use react hook form.

function Login() {
    const navigate  = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')

    // Now vaise to method 'handleSubmit' hai lekin hum is method ko 'login' likha hai. Uska usage alag hai.
    const login = async (data) => {
        console.log(data)
        /* Now jab bhi form submit hota hai to sbse pehle setError ko empty karte hai. Its important and always do this. */
        setError('')
        try {
            const session = await authService.login(data)
            if (session) {
                // Ye 'userData' hume session se nhi balki getAccount se mil rha hai.
                const userData = authService.getAccount()
                if (userData) {
                    // Now we'll dispatch the user data to redux store.
                    dispatch(storeLogin(userData))
                    // After login we have to navigate the user to home page.
                    /* Vahi agar hum ye kaam Link tag se karte to hume click karna padta fir hum home page mei jate, lekin navigate se programmatically apne aap home page mei redirect ho jata hai. */
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%'/>
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className='font-medium text-primary transition-all duration-200 hover:underline'>
                            Sign Up
                        </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                {/* 'handleSubmit' ek method hai aur isme hum vo function pass karte hai jise hume login ke vaqt call karna hai, isliye humne jo upar 'login' function banaya tha uska naam 'handleSubmit' nhi kara kyunki vo keyword ban chuka hai kyunki vo useForm se aa rha hai. 'handleSumbit' ek event ki hi tarah hai jo call hota hai jab form submit hota hai. Ye event isliye zaroori hai kyunki hum jab input fields mei values denge vaha hum 'register' ka use karte hai to hume state mei manage karne ki jaroorat nhi hai ye event automatically vaha se values le leta hai. */}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input 
                        label= "Email: "
                        /* placeholder humne input component mei likha nhi hai lekin jo humne ...props likha tha vaha se aa jayega ye. */
                        placeholder="Enter your email: "
                        type="email"
                        /* 
                            1.) Now jab bhi hum oi input ya select field bana rhe hai aur hum useForm vaha use kar rhe hai to hume ek ye syntax likhna padta hai i.e. '...register()'.
                            Ab agar hum aisa nhi likhte to agar hum kisi ar field mei bhi register ka use karte hai to override ho jayegi purani value to isliye hum spread karte hai har baar. It's compulsory.
                            2.) Iske baad hum isme name/key dete hai here 'email' ur agar hum doosri input field mei bhi register use kar rhe hai to vaha par name alag hona chahiye, har baar name unique hona chahiye. Kyunki at the end of the day jo 'data' mei values aati hai vo isi naam se aati hai.
                            3.) Iske baad hum object mei options pass karte hai, bahut sare hai. Read Documentation.
                            4.) Isi option mei humne ek aur de rkha hai jo pattern matching ke liye hai. Iska name 'validate' hai aur aise hi use karna hota hai.
                            5.) Ab 'matchPattern' function mei directly value pass kar dete hai jo user input field mei type karega. Aur fir regex se test karne ke liye hum '.test(value)' likh diya hai. Agar vo value match nhi hoti hai to OR operator ka use karke humne kch aur print karwa diya hai. 
                        */
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value)=>{
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a vaild address !"
                                }
                            }
                        })}
                        />
                        <Input 
                        label="Pasword: "
                        placeholder="Enter your password"
                        type="password"
                        {...register("password", {
                            required: true
                        })}
                        />
                        <Button
                        type="submit"
                        className='w-full'
                        >
                            Sign in
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login