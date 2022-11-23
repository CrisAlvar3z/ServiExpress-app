'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

const page = () => {

    const [error, setError] = useState()
    const [token, setToken] = useState(localStorage.getItem("token"))

    useEffect(() => {
      token ?
        window.location.href = 'http://localhost:3000'
      : null
    }, [token])

    // useEffect(() => {
    //     setError(undefined)
    // }, [error])
    
    const handleSubmit = async (event) => {

        event.preventDefault();
       // console.log(event.target.firstName.value)

        axios({
            method: 'post',
            url: 'http://localhost:8080/accounts/authenticate',
            data : {  
                "email": event.target.email.value,
                "password": event.target.password.value
            }

            }).then(function (response) {
                setError(undefined)
                console.log(response.data)
                localStorage.setItem('token', response.data.jwtToken);
                setToken(response.data.jwtToken);
        }).catch((error) => setError(error.response.data.message))

    }
      
    return (
        <>
            <div className="container-fluid w-75">
                <h3 className="card-header">Inicia sesion</h3>
                <div className="card-body">
                    { error 
                        ?
                        <h3 style={{ color: 'red' }}> { error } </h3>
                        : null
                    }
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="row">
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" className="form-control" />
                            <div className="invalid-feedback">
                                <div>Email requerido</div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Contraseña</label>
                                <input type="password" name="password" className="form-control" />
                                <div className="invalid-feedback">
                                    <div>Contraseña requerida</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">
                                {/* <span className="spinner-border spinner-border-sm mr-1"></span> */}
                                Ingresar
                            </button>
                        </div>
                        <a href="" className="btn btn-secondary">Volver</a>
                    </form>
                </div>
            </div>
        </>
    )
  }
  export default page