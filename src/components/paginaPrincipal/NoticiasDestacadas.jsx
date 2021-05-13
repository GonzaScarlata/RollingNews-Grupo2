import React from 'react';
import CardNoticia from './CardNoticia';
import CardNoticiaPrincipal from './CardNoticiaPrincipal';

const NoticiasDestacadas = (props) => {
    

    return (
        <div className='container-fluid d-flex w-75 p-5 justify-content-around'>
            <div>
                <h2 className='mb-5 text-center border-bottom'>Noticias destacadas</h2>
                <CardNoticiaPrincipal noticia={props.noticias[0]} width={'30rem'}/>
            </div>
            <div className='d-flex flex-column'>
            <CardNoticia noticia={props.noticias[1]} width={'18rem'}/>
            <CardNoticia noticia={props.noticias[3]} width={'18rem'}/>
            </div>
        </div>
    );
};

export default NoticiasDestacadas;