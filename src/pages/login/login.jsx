import React, {Component} from 'react'
import logo from '../../assets/images/logo.png'
import './login.scss'
class Login extends Component{
    render(){
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt={logo}/>
                    <h1>React后台管理系统</h1>
                </header>
                <section className='login-form'></section>
            </div>
        )
    }
}
export default Login