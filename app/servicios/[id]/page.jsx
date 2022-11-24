'use client'

import axios from 'axios';
import Link from 'next/link';
import { NextResponse } from 'next/server'
import { useEffect, useState } from 'react';

export default function Servicio ({ params }) {

    const { id } = params
    const [servicio, setServicio] = useState()
    useEffect(() => {
        fetch(`http://localhost:8080/servicios/${id}`)
        .then(res => res.json())
        .then(data => { setServicio(data) })
    }, [])

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            axios({
                method: 'post',
                url: 'http://localhost:8080/reservas',
                data : {
                  "servicio": servicio.nombre,
                  "fecha": event.target.fecha.value,
                  "hora": event.target.hora.value,
                  "accountId": 1,
                }
              }).then(function (response) {
                // console.log(response.data)
                return window.location.replace('http://localhost:3000/');
                // return NextResponse.redirect('http://localhost:3000/')  
            })
        } catch(error) {
            console.log(error)
        }
        
    }
    
    return <>
        <div className="container mx-auto row">
            <div className="col-12 col-md-6">
                <form method="post" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="form-group col-12 col-md-6">
                            <label>Fecha</label>
                            <input type="date" name="fecha" className="form-control" />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label>Hora</label>
                            <input type="text" name="hora" className="form-control" />
                        </div>
                        <div className="form-group col-12">
                            <label>Patente</label>
                            <input type="text" name="patente" className="form-control" />
                        </div>
                    </div>
                    <div className="d-flex align-items-end gap-2">
                        <div className="form-group mt-2">
                            <button type="submit" className="btn btn-primary mr-2">
                                {/* <span className="spinner-border spinner-border-sm mr-1"></span> */}
                                Reservar
                            </button>
                        </div>
                        <Link href="/" className="btn btn-primary"> Cancelar </Link>
                    </div>
                </form>
            </div>
            <div className="col-12 col-md-6">
                {
                    servicio ?
                        <h1> Servicio { servicio.nombre } </h1>
                    : null
                }
            </div>
        </div>

    </>

}