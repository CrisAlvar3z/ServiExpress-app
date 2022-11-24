import Link from 'next/link'

const fetchServicios = () => {
    return fetch('http://localhost:8080/servicios').then(res => res.json())
}
const page = async () => {

    const servicios = await fetchServicios();
    console.log(servicios);


    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center mt-5">Reserva uno de nuestros servicios.</h1>
                <div className='text-center d-flex gap-5'>
                    {
                        servicios.map((servicio) => {
                            return <>
                            <div className="card" style={{ width: '18rem' }}>
                                {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}
                                <div className="card-body">
                                    <h5 className="card-title">{ servicio.nombre }</h5>
                                    <p className="card-text">{ servicio.descripcion }</p>
                                    <Link href="/servicios/[id]" as={`/servicios/${servicio.id}`}> Reservar hora</Link>
                                </div>
                            </div>
                            </>
                        })
                    }
                </div>
            </div>
        </>
    )

}
export default page