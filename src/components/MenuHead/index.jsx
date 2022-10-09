import React from 'react';
import './style.scss';
import {img} from '../json/menu';
export const Menu = ()=>{
    return (
        <div className='container'>
            <div className='d-flex'>
                <div className='prueba'>
                    <img src={img[0]} alt="" className='tamano' / >
                    <button className='btnpersonalizado'>SHOP</button>
                </div>
                <div className='prueba'>
                    <img src={img[1]} alt="" className='tamano' / >
                    <div className='description'>
                        <strong>Pufi RAIN</strong>
                        <hr ></hr>
                        <p>Descripcion del producto. Este es <br></br>
                           un texto Simulado</p>

                           <p className='vermas'>  VER MAS</p>
                    </div>
                    
                </div>
            </div>
            <div className='d-flex'>
                <div className='prueba'>
                    <img src={img[2]} alt="" className='tamano' / >
                    <div className='description2'>
                        <strong>Pufi PUFF</strong>
                        <hr ></hr>
                        <p>Descripcion del producto. Este es <br></br>
                           un texto Simulado</p>

                           <p className='vermas'>  VER MAS</p>
                    </div>
                </div>
                <div className='prueba'>
                    <img src={img[3]} alt="" className='tamano' / >
                </div>
            </div>
            <div className='d-flex'>              
                <div className='prueba'>
                    <img src={img[5]} alt="" className='tamano' / >
                    <div className='description3'>
                        <strong>Pufi CART</strong>
                        <hr ></hr>
                        <p>Descripcion del producto. Este es <br></br>
                           un texto Simulado</p>

                           <p className='vermas'>  VER MAS</p>
                    </div>
                </div>
                <div className='prueba'>
                    <img src={img[4]} alt="" className='tamano' / >
                </div>
            </div>
    </div>
    )
  
}