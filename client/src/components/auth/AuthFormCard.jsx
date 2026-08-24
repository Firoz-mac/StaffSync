import React, { useState } from 'react'
import FormHeader from './FormHeader'
import Input from '../Input'
import { Eye, EyeOff } from 'lucide-react'

const AuthFormCard = () => {

    const [isLogin, setIslogin] = useState(true);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [authForm, setAuthForm] = useState({
        email:'',
        password:'',
        confirmPassword:'',
    });

    const handleChange = (e)=>{
        const {name, value}= e.target;

        setAuthForm((prev)=> ({
            ...prev,
            [name]:value
        }));
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        console.log(authForm);
    };

  return (
    <div className='w-full lg:max-w-sm bg-violet-400/20 backdrop-blur-md rounded-4xl p-10'>

        <FormHeader isLogin={isLogin}/>

        <form 
            onSubmit={handleSubmit} 
            className='mt-8 space-y-4'
        >

            <Input 
                type='email' 
                label='Email'
                name='email'
                placeholder='example@gmail.com'
                isAuthPage={true}
                onChange={handleChange}
            />
            <Input 
                type={showPassword ? 'text' : 'password'} 
                label='Password'
                name='password'
                placeholder='********'
                isAuthPage={true}
                onChange={handleChange}
                rightIcon={
                    <button 
                        type='button' 
                        onClick={() => setShowPassword((prev) => !prev)}
                        aria-label={ showPassword ? 'Hide password' :'Show password' } 
                        className='cursor-pointer'
                    >
                        {
                            showPassword ? <EyeOff size={18} /> : <Eye size={18} />
                        }
                    </button>
                }
            />

            {
                !isLogin && (

                    <Input 
                        type={showConfirmPassword ? 'text' : 'password'} 
                        label='Confirm Password'
                        name='confirmPassword' 
                        placeholder='********'
                        isAuthPage={true}
                        onChange={handleChange}
                        rightIcon={
                            <button 
                                type='button' 
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                aria-label={ showConfirmPassword ? 'Hide password' :'Show password' } 
                                className='cursor-pointer'
                            >
                                {
                                    showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />
                                }
                            </button>
                        }
                    />
             
                )
            }

            <div className='mt-10 flex justify-center'>

                <p className='text-center text-sm text-slate-300'>

                    { isLogin ? `Don't have an account? ` : 'Already have account? '}

                    <span onClick={()=> setIslogin((prev)=> !prev)} className='font-medium text-white cursor-pointer'>
                        
                        { isLogin ? 'Create Acoount.' : 'Login.'}
                    </span>
                </p>

            </div>

            <button
                type='submit' 
                className='w-full rounded-full bg-slate-200 p-3 font-medium text-violet-900 
                transition-colors hover:bg-white cursor-pointer'
            >
                {
                    isLogin ? 'Login' : 'Create'
                }
                
            </button>

        </form>
        
    </div>
  )
}

export default AuthFormCard