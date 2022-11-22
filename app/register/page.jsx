'use client';

import axios from 'axios';

const page = () => {

    const handleSubmit = async (event) => {

        event.preventDefault();
        console.log(event.target.firstName.value)

        try {
            axios({
                method: 'post',
                url: 'http://localhost:8080/accounts/register',
                data : { account: { 
                  "rut": event.target.rut.value,
                  "firstName": event.target.firstName.value,
                  "lastName": event.target.lastName.value,
                  "email": event.target.email.value,
                  "password": event.target.password.value,
                  "confirmPassword": event.target.confirmPassword.value,
                  "acceptTerms": event.target.acceptTerms.value,
                }, 
                direccion: {
                    adress: event.target.adress.value,
                }}
    
              }).then(function (response) {
                console.log(response.data)
            })
        } catch(error) {
            console.log(error)
        }
        
    }
      
    return (
        <>
            <div className="container-fluid w-75">
                <h3 className="card-header">Crea tu Cuenta</h3>
                <div className="card-body">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-12 col-md-6">
                                <label>Nombre</label>
                                <input type="text" name="firstName" className="form-control" />
                                <div className="invalid-feedback">
                                    <div>Nombre requiredo</div>
                                </div>
                            </div>
                            <div className="form-group col-12 col-md-6">
                                <label>Apellido</label>
                                <input type="text" name="lastName" className="form-control" />
                                <div className="invalid-feedback">
                                    <div>Apellido requiredo</div>
                                </div>
                            </div>
                            <div className="form-group col-12">
                                <label>Rut</label>
                                <input type="text" name="rut" className="form-control" />
                                <div className="invalid-feedback">
                                    <div>Rut requiredo</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" className="form-control" />
                            <div className="invalid-feedback">
                                <div>Email requerido</div>
                                <div>El email tiene que ser uno valido</div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Direccion</label>
                            <input type="text" name="adress" className="form-control" />
                            <div className="invalid-feedback">
                                <div>Direccion requerida</div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Contraseña</label>
                                <input type="password" name="password" className="form-control" />
                                <div className="invalid-feedback">
                                    <div>Contraseña requireda</div>
                                    <div>Contraseña debe contener al menos 6 caracteres</div>
                                </div>
                            </div>
                            <div className="form-group col">
                                <label>Confirmar Contraseña</label>
                                <input type="password" name="confirmPassword" className="form-control" />
                                <div className="invalid-feedback">
                                    <div> Confirmar contraseña requiredo</div>
                                    <div> Contraseña deben coincidir</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group form-check mt-2 mb-2">
                            <input type="checkbox" name="acceptTerms" id="acceptTerms" className="form-check-input" />
                            <label for="acceptTerms" className="form-check-label">Acceptar Terminos & Condiciones</label>
                            <div className="invalid-feedback">Acceptar Ts & Cs requiredo</div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">
                                {/* <span className="spinner-border spinner-border-sm mr-1"></span> */}
                                Registrar
                            </button>
                        </div>
                        <a href="" className="btn btn-secondary">Cancelar</a>
                    </form>
                </div>
            </div>
        </>
    )
  }
  export default page