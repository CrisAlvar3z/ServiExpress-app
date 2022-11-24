'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react';
import CentroImg from './Images/Centro';

const page =  () => {

  const [token, setToken] = useState(localStorage.getItem("token"))

  const logout = () => {
    localStorage.removeItem('token');
    setToken(undefined)
  }
  useEffect(() => {
    !token ?
      window.location.href = 'http://localhost:3000/login'
    : null
  }, [token])

  return (
    <>
      <section className='container'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='display-1'>Taller mecanico ServiExpress</div> 
            <Link className='btn btn-primary' href="/servicios">
              Resevar Servicio
            </Link>
        </div>
        <div className="row align-items-center">
          <div className='col-12 col-xl-7'>
            <CentroImg></CentroImg> 
          </div>
          <div className='col-12 col-xl-5'>
              <ul className="d-flex" style={{ listStyle: 'none', gap: 20, textAlign: 'center', fontSize: '1.3rem', whiteSpace: 'nowrap' }}>
                  <li> Reserva de Horas <p><strong>2 2299 6000</strong> </p></li>
                  <li style={{ borderRight: '1px solid black', borderLeft: '1px solid black', padding: '0px 20px 0px 20px' }}> Informaciones <p><strong>2 2299 6000</strong></p> </li>
                  <li> Urgencia <p><strong>2 2299 6373</strong></p> </li>
              </ul>
          </div>
        </div>
        <img src="../public/CentroMedico.jpg" alt="" />
        <button style={{ bottom: 20, left: 20, position: 'absolute'}} className='btn btn-primary' onClick={logout}>Cerrar sesion</button>
      </section>
    </>

  )
}
export default page