
import React from 'react'
import { Link } from 'react-router-dom'

const FormSesion = (props) => (
    <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login100">
                <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                    <span className="login100-form-title">
                        {props.action}
                    </span>

                    <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                        <input className="input100" type="text" name="username" value={props.data.username} placeholder="Username" onChange={props.handleChange}/>
                        <span className="focus-input100"></span>
                    </div>

                    <div class="wrap-input100 validate-input" data-validate = "Please enter password">
                        <input className="input100" type="password" name="password" value={props.data.password} placeholder="Password" onChange={props.handleChange}/>
                        <span className="focus-input100"></span>
                    </div>
                    <br/>
                    <br/>
                    {/*<div className="text-right p-t-13 p-b-23">
                        <span className="txt1">
                            Forgot
                        </span>

                        <a href="#" className="txt2">
                            Username / Password?
                        </a>
                    </div>*/}

                    <div className="container-login100-form-btn">
                        <button type="button" className="login100-form-btn" onClick={props.onClick}>
                            {props.action}
                        </button>
                    </div>

                    <div class="flex-col-c p-t-170 p-b-40">
                        <span class="txt1 p-b-9">
                            {props.messageBack}
                        </span>

                        <Link to={props.link} class="txt3">
                            {props.btnName}
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default FormSesion