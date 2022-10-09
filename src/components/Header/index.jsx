import React from 'react';
import './style.scss';
import { img } from '../json/header';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from '../redux/imagenes/ImageneSlice';

export const Header = () =>{
    const { lista } = useSelector((state)=>state.counter);
    const dispatch = useDispatch();


    const next = () => dispatch(increment(lista)); 
    const prev = () => dispatch(decrement(lista)); 

    return(
        <div className='header'  style={{ backgroundImage: `url(${img[lista]})` }} >
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <section className='content'>

                <div className='item-content'>  
                    
                    <div className='items'>
                    <div className='logo'>
                        <span class="material-symbols-outlined">
                                    cruelty_free
                        </span>
                    </div>
                        <hr></hr>
                        <div>
                            <span class="material-symbols-outlined">
                                cruelty_free
                            </span>
                            <p>PURI PUFF</p>
                        </div>
                        
                        <hr></hr>
                        <div>
                            <span class="material-symbols-outlined">
                                beach_access
                            </span>
                            <p>PURI RAIN</p>
                        </div>
                      
                        <hr></hr>
                        <div>
                            <span class="material-symbols-outlined">
                                local_mall
                            </span>
                            <p>PURI CART</p>
                        </div>
                       
                        <hr></hr>
                        <div>   
                            <span class="material-symbols-outlined">
                                storefront
                            </span>
                            <p>PURI NAP</p>
                        </div>
                       
                        <hr></hr>
                    </div>
                    <div className='box'>
                        <p> MI CUENTA </p>
                        <hr></hr>
                        <p> MI COMPRA </p>
                    </div>
                    
                </div>
            </section>
            <div className='titulo'>
                <h1>ESTAR COMODO, <br></br>
                    NUNCA FUE TAN FACIL </h1>
                    <button className='btnpersonalizado'>SHOP</button>
            </div>
                
            <div className="carousel">
                <span class="material-symbols-outlined" onClick={()=>prev()}>
                radio_button_checked
                </span>
                 <span class="material-symbols-outlined" onClick={()=>next()}>
                 radio_button_checked
                </span> 
                
            </div>    
            
        </div>
    )
} 