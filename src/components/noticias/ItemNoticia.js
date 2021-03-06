import React from 'react';
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt,faTrashAlt,faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

const ItemNoticia = (props) => {
    
    // borrar noticia segun el ID
    const eliminaNoticia = (idNoticia)=>{
    Swal.fire({
        title: 'Quiere eliminar la Noticia?',
        text: "No puede volver atrás esta operación luego de eliminar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    }).then(async(result) => {
        if (result.isConfirmed) {
                try{
                const URL = `${process.env.REACT_APP_API_URLnoticias}/noticias-por-id/${idNoticia}`;
                const respuesta = await fetch(URL,{
                    method:"DELETE",
                    headers:{"Content-Type":"application/json"}
                });
                console.log('respuesta de DELETE: ',respuesta)
                if (respuesta.status===200){
                    Swal.fire(
                        'Noticia Eliminada!',
                        'La Noticia seleccionada fue correctamente eliminada.',
                        'success'
                    )
                    props.consultarAPInoticias();
                }
            }catch(error){
                console.log(error)
                Swal.fire(
                    'Se ha producido un Error!',
                    'Intentelo nuevamente en unos minutos',
                    'warning'
                )
            }
        }
    })
    }   

    return (
        <tr className="textoNoticia">
            {
            (props.info.destacada==="on") ? <td className='text-center'><FontAwesomeIcon icon={faClipboardCheck} size="2x" color="orange"></FontAwesomeIcon></td> : <td></td>
            }
            <td className='text-center'>{props.info.fechaNoticia.substring(8,10)+'-'+props.info.fechaNoticia.substring(5,7)+'-'+props.info.fechaNoticia.substring(0,4)}</td>
            <td>{props.info.categoria}</td>
            <td>{props.info.tituloNoticia}</td>
            <td className='d-none d-md-table-cell'>{props.info.noticiaBreve}</td>
            <td>{props.info.autorNoticia}</td>
        
            <td className='in-line'>
                <Link className='btn btn-outline-warning mb-2' to={'/noticias/editar/'+props.info._id}><FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon></Link>
                <Button variant='' className='btn btn-outline-danger' onClick={()=> eliminaNoticia(props.info._id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Button>
            </td>
        </tr>
    );
};
export default ItemNoticia;











