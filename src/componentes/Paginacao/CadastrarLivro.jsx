import React, { useState } from "react";


import { FormGenero } from "../componentesCadastroItens/cadastrargenero";



export function CadastrarLivro(){
    const validacao = false;
    const [validar,setValidacao] = useState(validacao)
    
    const cadastrarGenero = ()=>{   
        let novaValidacao = !validar ? true : false  
        setValidacao(novaValidacao)
    }
    const verificarValidacao = ()=>{
        if(validar ){
            
            return <FormGenero />
        }
    }
     return(
        <section className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <div className="card-forms">          
                        <div className="card-forms-title">
                            
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
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                             <div className="">
                                                <label for="exampleInputEmail1" class="form-label">Nome</label>
                                                <input type="text" className="form-control-person" id="exampleInputEmail1" aria-describedby="emailHelp" name="" />
                                              
                                                
                                            </div>
                                             <div className="mt-4">
                                                <label for="exampleInputEmail1" class="form-label">Autores</label>
                                                <input type="text" class="form-control-person" name="autor" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                <div id="emailHelp" class="form-text text-white">Caso tenha mais de um, os separe por virgula.</div>
                                            </div>
                                            
                                    </div>  
                                    <div className="col-md-6">
                                        <div className="">
                                                <label for="exampleInputEmail1" class="form-label">ISBN</label>
                                                <input type="email" className="form-control-person" id="exampleInputEmail1" aria-describedby="emailHelp" name="" />
                                                <div id="emailHelp" className="form-text">Digite apenas números</div>
                                                
                                            </div>
                                             <div className="">
                                                <label for="exampleInputEmail1" class="form-label">Gênero</label>
                                                <select className="form-control-person">
                                                    <option>Genero</option>
                                                     <option>Genero</option>
                                                      <option>Genero</option>
                                                       <option>Genero</option>
                                                </select>
                                                <div id="emailHelp" className="form-text text-white">Selecione o gênero</div>
                                            </div>
                                    </div>
                                    <div className="mt-3">
                                        <button className="btn-person">  
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