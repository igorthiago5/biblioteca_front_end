import React from "react";

export function CadastrarLivro(){
     return(
        <section className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <div className="card-forms">          
                        <div className="card-forms-title">
                            <h2>Cadastro de Livros</h2>
                        </div>
                        <div className="card-forms-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                             <div class="">
                                                <label for="exampleInputEmail1" class="form-label">Nome</label>
                                                <input type="email" class="form-control-person" id="exampleInputEmail1" aria-describedby="emailHelp" name="" />
                                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                                
                                            </div>
                                             <div class="">
                                                <label for="exampleInputEmail1" class="form-label">Autores</label>
                                                <input type="email" class="form-control-person" name="autor" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                <div id="emailHelp" class="form-text text-white">Caso tenha mais de um, os separe por virgula.</div>
                                            </div>
                                            
                                    </div>  
                                    <div className="col-md-6">
                                        <div class="">
                                                <label for="exampleInputEmail1" class="form-label">ISBN</label>
                                                <input type="email" class="form-control-person" id="exampleInputEmail1" aria-describedby="emailHelp" name="" />
                                                <div id="emailHelp" class="form-text">Digite apenas números</div>
                                                
                                            </div>
                                             <div class="">
                                                <label for="exampleInputEmail1" class="form-label">Gênero</label>
                                                <select className="form-control-person">
                                                    <option>Genero</option>
                                                     <option>Genero</option>
                                                      <option>Genero</option>
                                                       <option>Genero</option>
                                                </select>
                                                <div id="emailHelp" class="form-text text-white">Selecione o gênero</div>
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