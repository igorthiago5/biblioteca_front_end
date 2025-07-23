import React, { useEffect, useState } from "react";

export function Alerta({finish,msgItem}){
    let [tempo,setTempo] = useState(100)
    
    useEffect(()=>{
        let i = 50
    let temp = setInterval(()=>{
       
            --i
            setTempo(i)
             if(i===0){
                clearInterval(temp)
                finish(false)
            }
            
            
        },100)
    },[])
   
    
    
    return(
        <div class="alert  alert-danger "  role="alert" >
            {
              msgItem
            }
            
            <div class="progress" role="progressbar" aria-label="danger example" aria-valuenow={tempo} aria-valuemin={tempo} aria-valuemax="100" style={{height:3}}>
                <div class="progress-bar text-bg-danger" style={{width: tempo+"%",}}></div>
           </div>
        </div>
    )
}
export function ToasCadastrarLivro({retornoTempoMsg}){
    let [tempo,setTempo] = useState(100)
    useEffect(()=>{
        let i = 50
        let time = setInterval(()=>{
             --i
             setTempo(i)
             if(i == 0){
                clearInterval(time)
                retornoTempoMsg(false)
             }
        },100)
    },[])
    return(
        <div class="alert alert-success "  role="alert" >
           <p className="text-success">Salvo com sucesso</p>
            <div class="progress" role="progressbar" aria-label="success example" aria-valuenow={tempo} aria-valuemin={tempo} aria-valuemax="100" style={{height:3}}>
                <div class="progress-bar text-bg-success" style={{width: tempo+"%",}}></div>
           </div>
        </div>
    

    )
}