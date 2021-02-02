import React from 'react'
import '../styles/pages/edit.css'
import { Link } from "react-router-dom"

export default function Edit() {
  return (
    <div>
      <form className="card" method="POST" action="/">

        <section className="details">

          <div className="item">
            <div>Nome do Cliente</div>
            <div>
              <input type="text" name="name" placeholder="Insira o nome completo" />
            </div>
          </div>

          <div className="item">
            <div>idade</div>
            <div>
              <input type="number" name="name" placeholder="Insira a idade" />
            </div>
          </div>

          <div className="item">
            <div>cpf</div>
            <div>
              <input type="number" name="cpf" placeholder="Insira o cpf sem ponto" />
            </div>
          </div>

          <div className="item">
            <div>telefone</div>
            <div>
              <input type="tel" name="tel" placeholder="apenas numeros" />
            </div>
          </div>

          <div className="item">
            <div>Email</div>
            <div>
              <input type="email" name="email" placeholder="Email" />
            </div>
          </div>

          <button className="form-save" type="submit">Salvar</button>
          <Link to="/" className="button">voltar</Link>
           <button className="form-delete"type="submit">Deletar</button>
        </section>
      
         
  
      </form>


    </div>



  );
}


