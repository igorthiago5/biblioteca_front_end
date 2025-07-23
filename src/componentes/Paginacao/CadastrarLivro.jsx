import React, { useEffect, useState } from "react";

import SERVER from '../config.js'
import {addLivro,listGenero} from '../config.js'

import { FormGenero } from "../componentesCadastroItens/cadastrargenero";

import {Alerta,ToasCadastrarLivro} from './../componentesCadastroItens/alerta.jsx'

const server = SERVER+"/genero/add"


export function CadastrarLivro(){
    const [msgCadastroSucesso,setMsgCadastroSucesso] = useState(false)
    const [listaGenero,setListaGenero] = useState([])
    const [msg,setMsg] = useState(true)
    const [dadosGen,setDadosGen] = useState()
    const validacao = false;
    const [validar,setValidacao] = useState(validacao)
    
    const [nomeAutor,setNomeAutor] = useState("")
    const [nomeLivro,setNomeLivro] = useState("")
    const [isbn,setIsbn] = useState("")
    const [genero,setGenero] = useState("")
    useEffect(()=>{
        fetch(listGenero,{method:"GET"})
        .then(result =>result.json())
        .then(request =>{
           setListaGenero(request)
             
             
        })
       
    },[])
    const procuraItem = ()=>{
        fetch(listGenero,{method:"GET"})
        .then(result =>result.json())
        .then(request =>{
            setListaGenero(request)
             
             
        })
    }
    
    const cadastrarGenero = ()=>{   
        let novaValidacao = !validar ? true : false  
        setValidacao(novaValidacao)
        
    }
    const receberDadoMsg = (resposta) =>{
        setMsg(resposta)
    }
    const receberDado = (dado) => {
        setDadosGen(dado)
        let validar_receber_dado = !dado?true:false;
        if(dadosGen){
            setValidacao(false)
            procuraItem()
        }
    }
    const verificarValidacao = ()=>{
        
        if(validar ){
             
            return <FormGenero aoConfirmarEnvio={receberDado} msgVazia={receberDadoMsg}/>
           
        }
        
        
    }
    const cadastrarLivrosForm = (event)=>{
        event.preventDefault()
        
        let novoLivro = {
            "nome":nomeAutor,
            "autor":nomeAutor,
            "isbn":isbn,
            "genero":{
                "idGenero":genero,
            },
            "data_cricao":""
        }
        console.log(novoLivro)
        if(!(novoLivro.nome == "" || novoLivro.autor == "" || novoLivro.isbn == ""  || novoLivro.genero == "")){
           
            fetch(addLivro,{
                   method:'POST',
                   headers:{'Content-type':'application/json'},
                   body:JSON.stringify(novoLivro)
                    
                }).then(dados=>dados.json())
                .then(request=>{
                    if(request.result){
                        setMsgCadastroSucesso(true)
                        setNomeAutor("")
                        setIsbn("")
                        setNomeLivro("")
                    }
                }).catch(e=>{
                    console.log(e)
                })
                        
        }else{
             alert('Vazio')
        }
      
        
    }
    const finalizarTempo = (dados)=>{
        let validar_msg = !dados ? true:false
         setMsg(validar_msg)
    }
    const verificarMensagemAlertaVaiza = ()=>{
        if(!msg){
            return <Alerta msg="Campo vazio" finish={finalizarTempo} msgItem={"Genero núlo"}></Alerta>
            
        }
    }
    const getTempoToasCadastrarLivro = (dados)=>{
        let validar_dado = dados ? true:false
        setMsgCadastroSucesso(validar_dado)
    }
    const mensagemCadastroRealizadoComSucesso = ()=>{
        if(msgCadastroSucesso){
            return <ToasCadastrarLivro retornoTempoMsg={getTempoToasCadastrarLivro}></ToasCadastrarLivro>
        }
    }
   
   
        
   

    
    
     return(
        
        <section className="container mt-4">
            
            <div className="row">
                <div className="col-12">
                   {
                    mensagemCadastroRealizadoComSucesso()
                   }
                    <div className="card-forms">          
                        <div className="card-forms-title">
                            
                           {
                                verificarMensagemAlertaVaiza()
                              
                           }
                            <div className="config-title">
                                <h2>Cadastro de Livros</h2>
                                 <button className="btn-person" onClick={cadastrarGenero}> 
                                    Cadastrar Gênero
                                 </button>
                            </div>
                            
                        </div>{
                            verificarValidacao()
                        }
                       
                        <div className="card-forms-body">
                            <form >
                                <div className="row">
                                    <div className="col-md-6">
                                             <div >
                                                <label for="exampleInputEmail1" className="form-label">Nome</label>
                                                <input type="text" name="nome" value={nomeLivro} onChange={(event)=>setNomeLivro(event.target.value)} className="form-control-person" id="exampleInputEmail1" aria-describedby="emailHelp" name="" />
                                              
                                                
                                            </div>
                                             <div className="mt-4">
                                                <label for="exampleInputEmail1" className="form-label">Autores</label>
                                                <input type="text" class="form-control-person" name="autor" value={nomeAutor} onChange={event=>setNomeAutor(event.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                <div id="emailHelp" class="form-text text-white">Caso tenha mais de um, os separe por virgula.</div>
                                            </div>
                                            
                                    </div>  
                                    <div className="col-md-6">
                                        <div >
                                                <label for="exampleInputEmail1" className="form-label">ISBN</label>
                                                <input type="email" name="isbn" className="form-control-person" id="exampleInputEmail1" aria-describedby="emailHelp" value={isbn } onChange={event=>{setIsbn(event.target.value)}}/>
                                                <div id="emailHelp" className="form-text">Digite apenas números</div>
                                                
                                            </div>
                                             <div >
                                                <label for="exampleInputEmail1" class="form-label">Gênero</label>
                                                <select className="form-control-person" onChange={event=>setGenero(event.target.value)}>
                                                    <option value={""}>Escolha um genero</option>
                                                    {
                                                        listaGenero.map((element,key)=>(
                                                            <option key={key} value={element.id}>{element.nome}</option>
                                                        ))
                                                    }
                                                </select>
                                                
                                                <div id="emailHelp" className="form-text text-white">Selecione o gênero</div>
                                            </div>
                                    </div>
                                    <div className="mt-3">
                                        <button className="btn-person" onClick={cadastrarLivrosForm}>  
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}