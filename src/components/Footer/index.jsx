import React from 'react';
import './style.scss';
import { social } from '../json/menu';
export const Footer = ()=>{
    return(
    <div className='footer' >
        <div className='contenedor-footer'>
            <div className='logo'>
                <span class="material-symbols-outlined">
                    cruelty_free
                </span>
            </div>
            <div className='item-contenido'>
                <div className='items-footer'>
                    <p>PURI PUFF</p>
                    <p>PURI RAIN</p>
                    <p>PURI CART</p>
                    <p>PURI NAP</p>
                </div>
                <hr></hr>
                <div className='contactos'>
                    <p>CONTACTOS</p>
                    <p>AYUDA</p>
                    <p>CÓMO COMPRAR</p>
                    <p>TERMINOS Y CONDICIONES</p>
                </div>
                <hr></hr>
                <div className='compra'>
                    <p>COMPRA 100% SEGURA</p>
                    <div style={{ gridGap: "1rem"}}>
                        <span class="material-symbols-outlined">
                        shopping_bag
                        </span>
                        <span class="material-symbols-outlined">
                        security
                        </span>
                    </div>
                    

                </div>
                <hr></hr>
                <div className='redes'>
                    <p>SIGUENOS EN:  </p>
                    {
                        social.map((item, index)=>{
                            return (
                            <div key={index} >
                                <img src={item} width="30px" alt=""/>
                            </div>
                            )
                            
                        })
                    }
                </div>
            </div>
        </div>
        <div>
             <div className='copy'>
            <hr></hr>
                <p>PUFICopyright2017-Todos los derechos reservados</p>         
            </div>
       
        </div>
    </div>
    )
  
}