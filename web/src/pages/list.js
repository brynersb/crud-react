import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';

import '../styles/pages/list.css';


export default function List() {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.get('clientes').then(res => {
      setClientes(res.data);
    });
  }, []);


  return (
    <div>
      <div className="card table-container">

        <Link to="/create">Novo</Link>

        <div id="divBusca">
          <input type="text" id="txtBusca" placeholder="Buscar..." />
          <button id="btnBusca">Buscar</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>cliente</th>
              <th>cpf</th>
              <th>Ação</th>
            </tr>
          </thead>

          <tbody>

            {clientes.map(cliente => {
              return (
                <tr key={cliente.id}>
                  <td>
                    {cliente.name}
                  </td>
                  <td>{cliente.cpf}</td>
                  <td>
                    <Link to={`cliente/${cliente.id}`}>ver</Link>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </div>
  );
}


