import React, { useState } from 'react'
import  Form  from 'react-bootstrap/Form'
// import {Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export const Pagina1 = () => {
  const [nombre, setNombre] = useState("Joselito") 
  const [apellido, setApellido] = useState("Perez")
  const [errorNombre,setErrorNombre] = useState("")
  const validarNombre = (valor:string)=>{
    if(valor.length>4){
        setErrorNombre("");
    }else{
        setErrorNombre("Debes ingresar 4 caracteres como minimo")
    }
    setNombre(valor);
  }
 const handleRegistrar = ()=>{
    console.log("Se registro con exito");
    alert("Listo! "+nombre+" "+apellido);
 }




  return (
    <>
    <h1>Bienvenido {nombre} {apellido}</h1>
    <p>{errorNombre}</p>
    <Form>
        <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type='text' placeholder='Ingrese un nombre' onChange={(e)=>validarNombre(e.currentTarget.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label>Apellido:</Form.Label>
            <Form.Control type='text' placeholder='Ingrese un apellido'  onChange={(e)=>setApellido(e.currentTarget.value)}/>
        </Form.Group>
        <Button variant='primary' type='button' onClick={handleRegistrar}>Registrar</Button>
    </Form>



    </>
  )
}
export default Pagina1