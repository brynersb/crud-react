import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import '../styles/pages/show.css'
import api from '../services/api'


export default function Cliente() {

    const params = useParams()
    const [cliente, setCliente] = useState([]);

    useEffect(() => {
      api.get(`cliente/${params.id}`).then(res => {
        setCliente(res.data);
      });
    }, [params.id]);
  
    return (
        <div className="card">
            <section className="details">
                <h3>Detalhes do cliente</h3>

                <div className="item">
                    <div>Cliente</div>
                    <div>{cliente.name}</div>
                </div>
                <div className="item">
                    <div>idade</div>
                    <div> {cliente.age} </div>
                </div>

                <div className="item">
                    <div>Cpf</div>
                    <div>{cliente.cpf}</div>
                </div>

                <div className="item">
                    <div>telefone</div>
                    <div>
                    {cliente.phone}

                </div>
                </div>

                <div className="item">
                    <div>email</div>
                    <div>{cliente.email}</div>
                </div>

                < Link to="/edit" className="button">Editar</Link>

            </section>
        </div>
    );
}



