import React, { useState } from "react";
import SERVER from '../config.js'
export function FormGenero(){
    
    const [genero,setGenero] = useState()
    
    const enviarGenero = event=>{
       event.preventDefault()
       const servidor = SERVER+"/genero/add"
        let dados = {
            "idGenero":"",
            "nome":genero
        }
        fetch(servidor,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(dados)
        }).then( dados => dados.json())
        .then(response =>{
            console.log(response)
        }).catch(erro=>{
            console.log(erro)
        })
            
    }
    return (
        
            <div className="form-genero">
                <div className="box-config-genero">
                    <form method="POST" >
                        <div className="row">
                            <div className="col-md-6">
                                 <div className="mt-0">
                                    <label for="exampleInputEmail1" className="form-label">Nome do Gênero</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" name="genero" value={genero} 
                                    onChange={event=>setGenero(event.target.value)}aria-describedby="emailHelp" />
                                    
                                </div>
                            </div>
                            <div className="col-md-6">
                                 <div className="mt-4">
                                    <button type="submit" className="btn btn-primary" onClick={enviarGenero}>Cadastrar</button>
                                </div>  
                            </div>
                        </div>
                                         
                    </form>
                </div>
            </div>
        
    )
}