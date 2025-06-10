import React  from "react";
import Home from './../Paginacao/Home'
import { BrowserRouter,Router,Routes,NavLink, Route } from "react-router-dom";
import { CadastrarLivro } from "../Paginacao/CadastrarLivro";
import { CadastrarUsuario } from "../Paginacao/CadastrarUsuario";
import {ListagemEmprestimo} from "../Paginacao/ListagemEmprestimo";
import { Empresatar } from "../Paginacao/Empresatar";
function HeaderApp(){
  return(
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <span className="nome-brand" href="#">BIBLIOTECA NACIONAL</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavLink to={"/"} className={"nav-link text-white"} classActiveName={"active"}>Home</NavLink>
        
          <NavLink to={"/CadastrarLivro"} className={"nav-link text-white"}>Cadastro de Livro</NavLink>
          <NavLink to={"/CadastrarUsuario"}className={"nav-link text-white"}>Cadastro de Usuário</NavLink>
          <NavLink to={"/ListagemEmprestimo"}className={"nav-link text-white"}>Listagem de Emprestimo</NavLink>
          <NavLink to={"/Empresatar"}className={"nav-link text-white"}>Emprestar</NavLink>
        </ul>
      
      </div>
    </div>
  </nav>
  <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/CadastrarLivro" element={<CadastrarLivro />} />
      <Route path="/CadastrarUsuario" element={<CadastrarUsuario />} />
      <Route path="/ListagemEmprestimo" element={<ListagemEmprestimo />} />
      <Route path="/Empresatar" element={<Empresatar />} />
  </Routes>
  </BrowserRouter>
  )
}
export default HeaderApp;