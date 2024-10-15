import { useState } from 'react';
import './SignUp.css'
import axios from 'axios';


export default function SignUp() {
    const [toggle, setToggle] = useState(false)
    const [formContent, setFormContent] = useState({
        email: "",
        password: ""
    });
    const [message, setMessage] = useState("Y")
    const changeColor = (e) => {
        setToggle(prev => !prev)
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormContent(prev => {
            return { ...prev, [name]: value }
        })
    }
    const onLogin = async (e) => {
        e.preventDefault();
        if (formContent.email === "" || formContent.password === "") {
            setMessage("Missing field details!");
            setTimeout(() => {
                setMessage("Y")
            }, 3000);
            return;
        }
        axios({
            method: "POST",
            data: formContent,
            withCredentials: true,
            url: process.env.REACT_APP_API_URL + "/login",
        })
            .then((res) => {
                if (res.data === "Y") {
                    window.location.reload();
                    return;
                }
                setMessage(res.data);
            });
        setTimeout(() => {
            setMessage("Y")
        }, 3000);
    }
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
            <div className="SignUp-card">
                <div style={{ width: '100%', height: 'fit-content', display: 'flex' }}>
                    <div className='SignUp-toggle-1' name="t1" onClick={changeColor} style={{ backgroundColor: !toggle ? 'rgb(234, 231, 231)' : 'white', }}>
                        Signup
                    </div>
                    <div className='SignUp-toggle-2' name='t2' onClick={changeColor} style={{ backgroundColor: toggle ? 'rgb(234, 231, 231)' : 'white', }}>
                        Register
                    </div>
                </div>

                <div className='SignUp-form'>
                    {toggle ?
                        <form onSubmit={onLogin}>
                            <input placeholder="zId" name="zid" type="text" onChange={handleChange} value={formContent.email}></input>
                            <input placeholder="Password" name="password" type="password" autoComplete="on" onChange={handleChange} value={formContent.password}></input>
                            <button type="submit">Lets Go!</button>
                        </form> :
                        <form onSubmit={onLogin}>
                            <input placeholder="Name" name="name" type="text" onChange={handleChange} value={formContent.email}></input>
                            <input placeholder="zId" name="zid" type="text" onChange={handleChange} value={formContent.email}></input>
                            <input placeholder="Password" name="password" type="password" autoComplete="on" onChange={handleChange} value={formContent.password}></input>
                            <button type="submit">Register & Go!</button>
                        </form>}

                </div>
            </div>
        </div>
    )
}