import React  from "react";

export function CadastrarUsuario(){
  return(
    <section className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <div className="card-forms">          
                        <div className="card-forms-title">
                            <h2>Cadastro de Usuários</h2>
                        </div>
                        <div className="card-forms-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                             <div class="">
                                                <label for="exampleInputEmail1" class="form-label">Nome</label>
                                                <input type="text" class="form-control-person" id="exampleInputEmail1"  aria-describedby="emailHelp" name="nome" />
                                                <div id="emailHelp" class="form-text text-white">Nome ou Nome e sobrenome</div>
                                                
                                            </div>
                                             <div class="">
                                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                                <input type="email" class="form-control-person" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                <div id="emailHelp" class="form-text text-white">Email para recuperar senha caso precise</div>
                                            </div>
                                            <div class="">
                                                <label for="exampleInputEmail1" class="form-label" >Tipo de Acesso</label>
                                                <select className="form-control-person" name="selecao_acesso">
                                                      <option>Opcao1</option>
                                                       <option>Opcao1</option>
                                                        <option>Opcao1</option>
                                                </select>
                                            </div>
                                            
                                    </div>  
                                    <div className="col-md-6">
                                      <div className="row">
                                          <div className="col-6">
                                              <div class="">
                                                <label for="exampleInputEmail1" class="form-label">CEP</label>
                                                <input type="number" class="form-control-person" id="exampleInputEmail1" aria-describedby="emailHelp" name="cep" />
                                              
                                              </div>
                                              <div class="mt-4">
                                                <label for="exampleInputEmail1" class="form-label">Rua</label>
                                                <input type="text" class="form-control-person" id="exampleInputEmail1" aria-describedby="emailHelp" name="rua" />
                                               
                                              </div>
                                              <div class="mt-4">
                                                <label for="exampleInputEmail1" class="form-label">Login</label>
                                                <input type="text" class="form-control-person" id="exampleInputEmail1" aria-describedby="emailHelp" name="login" />
                                               
                                              </div>
                                          </div>
                                          <div className="col-6">
                                                 <div class="">
                                                <label for="exampleInputEmail1" class="form-label">Número</label>
                                                <input type="number" class="form-control-person" id="exampleInputEmail1" aria-describedby="emailHelp" name="numero" />
                                               
                                              </div>
                                              <div class="mt-4">
                                                <label for="exampleInputEmail1" class="form-label">Bairro</label>
                                                <input type="text" class="form-control-person" id="exampleInputEmail1" aria-describedby="emailHelp" name="bairro"/>
                                               
                                              </div>
                                              <div class="mt-4">
                                                <label for="exampleInputEmail1" class="form-label">Senha</label>
                                                <input type="password" class="form-control-person" id="exampleInputEmail1" aria-describedby="emailHelp" name="senha" />
                                               
                                              </div>
                                              
                                          </div>
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