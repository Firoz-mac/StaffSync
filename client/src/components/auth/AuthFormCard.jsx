import React, { useState } from 'react'
import FormHeader from './FormHeader'
import Input from '../Input'
import { Eye, EyeOff } from 'lucide-react'
import { toast } from 'sonner'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'

const AuthFormCard = () => {

    const navigate = useNavigate();
    const setUser = useAuthStore(state => state.setUser);

    const [isLogin, setIslogin] = useState(true);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formError, setFormError] = useState({})

    const { signupUser, loginUser, loading} = useAuth();

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

        setFormError((prev) => {
            const updatedError = { ...prev }

            delete updatedError[name]

            return updatedError;

        })
    }

    const validateForm = () => {

        const errors = {}

        if (!authForm.email.trim()){
            errors.email = 'Email is required.'
        }

        if (!authForm.password){
            errors.password = 'Password is required.'
        }

        if (!isLogin){

            if (authForm.password.length < 8){
                errors.password = 'Password must be at least 8 characters.'
            }
            
            if (authForm.password !== authForm.confirmPassword){
                errors.confirmPassword = 'Passwords do not match.'
            }

        }

        setFormError(errors)

        return Object.keys(errors).length === 0
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        

        const isValid = validateForm();

        if (!isValid) return;

        const userDataPayload = {
            email: authForm.email,
            password: authForm.password
        }

        if (!isLogin){
            
            try {
                const response = await signupUser(userDataPayload);
            
                toast.success(response.message)

                setAuthForm({
                    email:'',
                    password:'',
                    confirmPassword:'',
                })

                setIslogin(true)
                
            } catch (error) {
                toast.error('Signup failed.', {
                    description: error.message,
                })
            }

        }

        if (isLogin){
            try {
                const response = await loginUser(userDataPayload);
                setUser(response.user)
                toast.success(response.message)

                setAuthForm({
                    email:'',
                    password:'',
                    confirmPassword:'',
                })

                navigate('/dashboard');


            } catch (error) {
                toast.error('Login failed.', {
                    description: error.message,
                })
            }
        }
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
                value={authForm.email}
                name='email'
                id='email'
                placeholder='example@gmail.com'
                isAuthPage={true}
                onChange={handleChange}
                error={formError.email}
            />
            <Input 
                type={showPassword ? 'text' : 'password'} 
                label='Password'
                value={authForm.password}
                name='password'
                id='password'
                placeholder='********'
                isAuthPage={true}
                onChange={handleChange}
                error={formError.password}
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
                        value={authForm.confirmPassword}
                        name='confirmPassword'
                        id='confirmPassword' 
                        placeholder='********'
                        isAuthPage={true}
                        onChange={handleChange}
                        error={formError.confirmPassword}
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

                    { isLogin 
                        ? `Don't have an account? ` 
                        : 'Already have an account? '
                    }

                    <span 
                        onClick={()=> setIslogin((prev)=> !prev)} 
                        className='font-medium text-white cursor-pointer'
                    >
                        
                        { isLogin 
                            ? 'Create Acoount.' 
                            : 'Login.'
                        }
                    </span>
                </p>

            </div>

            <button
                type='submit'
                disabled={loading}
                className='w-full rounded-full bg-slate-200 p-3 font-medium text-violet-900 
                transition-colors hover:bg-white cursor-pointer disabled:bg-slate-400 disabled:text-slate-600
                disabled:cursor-not-allowed  disabled:hover:bg-slate-400'
            >
                {
                    loading
                        ? ( isLogin ? 'Logging in...' : 'Creating...')
                        : (isLogin ? 'Login' : 'Create Account')
                    
                }
                
            </button>

        </form>
        
    </div>
  )
}

export default AuthFormCard