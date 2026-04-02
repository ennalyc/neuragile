'use client'
import { useActionState, useState } from 'react'
import { login } from '../actions/login'
import { signup } from "../actions/signup"
import Image from 'next/image'

import { Mail, Key, LogIn, UserPlus } from 'lucide-react'

import Logo from '@/app/assets/neuragileLogo.png'

type Auth = 'login' | 'signup'

const AuthForm = () => {
    const [signupMode, setSignupMode] = useState<Auth>('login')

    const [state, action, pending] = useActionState(async (prevState: any, formData: FormData) => {
    const authFn = signupMode === 'login' ? login : signup;
    
    return await authFn(prevState, formData);
    }, undefined);
    
    const modeBttn = [
        {
            id: 1,
            title: 'Login',
            icon: <LogIn size={24}/>,
            mode: 'login'
        },
        {
            id: 2,
            title: 'Sign-up',
            icon: <UserPlus  size={24}/>,
            mode: 'signup'
        }
    ]

    const handleModeChange = (newMode: Auth) => {
        if (newMode !== signupMode) {
            setSignupMode(newMode);
            if (state) {
                state.errors = undefined; 
            }
        }
    }
    
    return (
        <div className='flex w-56 md:w-80 flex-col gap-3'>
            <Image src={Logo} alt='logo' className='w-full object-contain'/>
            <div className='w-full p-1 gap-2 bg-black flex flex-row justify-between rounded-3xl'>
                {
                    modeBttn.map((bttn) => (
                        <div onClick={() => handleModeChange(bttn.mode as Auth)} key={bttn.id} className={`${bttn.mode === signupMode ? 'bg-white text-black' : 'text-white'} rounded-3xl cursor-pointer justify-center flex flex-row gap-3 w-full items-center px-4 py-2`}>
                            {bttn.icon}
                            <p className='font-medium'>{bttn.title}</p>
                        </div>
                    ))
                }
            </div>
            <form key={signupMode} action={action} className='flex flex-col gap-3'>
                <div className='w-full rounded-md bg-neutral-100 border border-neutral-300 text-neutral-400 flex flex-row gap-3 items-center py-3 pl-4 pr-2'>
                    <Mail size={16}/>
                    <div className='w-full'>
                        <label className='focus:text-neu' htmlFor="email"></label>
                        <input className='focus:outline-none focus:text-neutral-500 w-full' id="email" name="email" placeholder="Write your email" />
                    </div>
                </div>
                <div className='w-full rounded-md bg-neutral-100 border border-neutral-300 text-neutral-400 flex flex-row gap-3 items-center py-3 pl-4 pr-2'>
                    <Key size={16}/>
                    <div className='w-fuçç'>
                        <label className='focus:text-neu' htmlFor="password"></label>
                        <input type='password' className='focus:outline-none focus:text-neutral-500 w-full' id="password" name="password" placeholder="Write your password" />
                    </div>
                </div>
                <button type='submit' className='cursor-pointer w-56 md:w-80 rounded-md bg-black text-white font-semibold py-3 flex justify-center'>
                    Continue
                </button>
                
                {state?.errors?.email && <p className='text-sm text-center text-red-500'>{state.errors.email}</p>}
                {state?.errors?._form && <p className='text-center text-sm text-red-500'>{state.errors._form}</p>}

            </form>
            <p className='text-neutral-300 text-sm text-center'>You're currently {signupMode === 'login' ? 'logging in' : 'signing up'}.</p>
        </div>
    )
}

export default AuthForm