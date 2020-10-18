import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

//import image 
import CPLOGIN from 'assets/images/cp-login.png'
import { ReactComponent as PitoLogo } from 'assets/images/pito.svg'
import { ReactComponent as LoginIcon } from 'assets/images/login-icon.svg'
import { ReactComponent as PasswordIcon } from 'assets/images/password-icon.svg'


//import API function
import users from 'api/users'

//import setAuthorizationHeader
import { setAuthorizationHeader } from 'configs/axios'

//Import toastify notify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ history }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //state error handler
    const [errors, seterrors] = useState(null)

    //username on Change text
    function usernameChange(e) {
        setUsername(e.target.value)
    }
    //password on Change text
    function passwordChange(e) {
        setPassword(e.target.value)
    }

    //Check tokens if ready
    const token = localStorage.getItem('PITO:token')
    useEffect(() => {
        if (token) {
            history.push('/')
        }
    })

    //on submit Login
    const submit = (e) => {
        e.preventDefault();

        //use function login from users
        users.login({
            username,
            password
        }).then((res) => {
            console.log(res)
            setAuthorizationHeader(res.token);
            localStorage.setItem('PITO:token', JSON.stringify(res.token))
            toast.success("Berhasil Login !")
            setTimeout(() => {
                history.push("/")
            }, 2000);
        }).catch(err => {
            seterrors(err?.response?.data?.message)
        })
    }

    return (
        <section className="login-clipping w-full">
            <ToastContainer position="top-right" />
            <div className="clipper"></div>
            <div className="absolute">
                <img draggable="false" src={CPLOGIN} alt="pito logo" />
            </div>
            <div className="container mx-auto flex justify-end pt-20">
                <div className="w-1/2 px-24">
                    <PitoLogo className="mx-auto" />
                    <div className="pt-24 px-10">
                        <form onSubmit={submit}>
                            <div className={["pt-10 flex border-b-2 items-center pb-2 text-xl", errors ? "border-red-600" : "border-gray-400"].join(" ")}>
                                <LoginIcon />
                                <input type="text" name="username" value={username} onChange={usernameChange} className="ml-3 focus:outline-none relative w-full" placeholder="Username" />
                            </div>
                            <div className={["pt-10 flex border-b-2 items-center pb-2 text-xl", errors ? "border-red-600" : "border-gray-400"].join(" ")}>
                                <PasswordIcon />
                                <input type="password" name="password" value={password} onChange={passwordChange} className="ml-3 focus:outline-none relative w-full" placeholder="Password" />
                            </div>
                            <button type="submit" className="bg-red-600 py-2 px-10 w-full mt-6 text-xl rounded-3xl text-white font-medium hover:bg-red-700 transition-all duration-200 focus:outline-none">Login</button>
                            <div className="text-center mt-4">
                                <a href="/" className="text-red-600 border-b border-red-600 font-light hover:font-medium">Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter(Login);
