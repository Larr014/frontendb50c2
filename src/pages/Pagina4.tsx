import { obtenerPersonas } from '@/Firebase/Promesas'
import { Persona } from '@/Interfaces/IPersona'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const Pagina4 = () => {
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=>{
        //Traer listado de personas desde las promesas
        obtenerPersonas().then((personas)=>{
            //Meter el listado dentro del estado
            setPersonas(personas)
        }).catch((e)=>{
            console.log(e)
            alert("Algo ocurrio")
        })
    },[])

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Rut</th>
                        <th>Correo</th>
                        <th>Fecha Nacimiento</th>
                        <th>Edad</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        personas.map((p)=>{
                            return(
                                <tr>
                                    <td>{p.nombre}</td> 
                                    <td>{p.apellido}</td>
                                    <td>{p.rut}</td>
                                    <td>{p.correo}</td>
                                    <td>{p.fechaNacimiento}</td>
                                    <td>{p.edad}</td>
                                    <td>
                                        <Link href={{pathname:'Pagina5',query:{key:p.key}}}>
                                        <Button variant='warning'><FaEdit /></Button>
                                        </Link>
                                        <Button variant='danger'><MdDelete /></Button>    
                                    </td>         
                                </tr>
                            )
                            
                        })
                    }
                </tbody>
            </Table>
        </>
  )
}
export default Pagina4