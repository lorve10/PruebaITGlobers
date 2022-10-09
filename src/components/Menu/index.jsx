import React, { useState } from "react";
import { img } from "../json/menu";
import "../Menu/style.scss";
import Swal from "sweetalert2";
export const MenuBody = () => {
  const [email, setEmail ] = useState('');

  ///validacion email
  const validateEmail = async (data) => {
    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(data);
  }
///mensajes SWAL
  const MessageError = async (data) => {
    Swal.fire({
      title: 'Error',
      text: data,
      icon: 'warning',
    })
}
  
const MessageSuccess = async (data) => {
    Swal.fire({
        text: data,
        icon: 'success',
    })
}
  const enviar = async () =>{
    let valida  = await validateEmail(email) 
    if(email === ""){
      MessageError("debes ingresar correo") 
    }
    else{
        if(valida === false){
          MessageError("El correo no es correcto o está vacío")
        }
        else{
          MessageSuccess("se envio informacion")
          setEmail("")
        }
    }
   
  }
  return (
    <div>
      <h2 className="insta">INSTAGRAM</h2>
      <h1>#ESPUFI</h1>
      <div className="body">
        <div className="lugar">
          {img.map((item) => {
            return <img src={item} className="image" alt="" />;
          })}
        </div>
      </div>
      <div>
        <p className="subs">NEWSLETTER
        <h1>SUBSCRIBETE</h1>
         y enterate de todas las novedades 
        </p>
      </div>

        <div className="input">
          <input
          className="input-email" 
            id="email"
            type="email" 
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          
            <span class="material-symbols-outlined" 
            style={{fontSize: "15px",
            position: "absolute",
            right: "31%",
            cursor: "pointer",
            top: "484%"}} onClick={()=>enviar()}>
            arrow_right_alt
            </span>
        </div>
        
    </div>
  );
};
