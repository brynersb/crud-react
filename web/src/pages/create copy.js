import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import '../styles/pages/create.css';
import * as Yup from 'yup'
import Input from '../components/form/input';
import api from '../services/api';


export default function Create() {

  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatorio'),
        age: Yup.number().required('A idade é obrigatorio'),
        cpf: Yup.number().required('O cpf é obrigatorio'),
        phone: Yup.number().required('O telefone é obrigatorio'),
        email: Yup.string().email().required('O email é obrigatorio'),
      });

      await schema.validate(data, {
        abortEarly: false,
      })


      await api.post('clientes', data)

      console.log(data)

    
      alert('cadastro realizado com sucesso!!!')

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err);
      }
    }
  }

  return (

    <Form ref={formRef} onSubmit={handleSubmit} className="card">

      <section className="details">

        <div className="item">
          <div>Nome do Cliente</div>
          <div>
            <Input name="name" type="text" placeholder="Insira o nome completo" />
          </div>
        </div>

        <div className="item">
          <div>idade</div>
          <div>
            <Input name="age" type="number" placeholder="Insira a idade" />
          </div>
        </div>

        <div className="item">
          <div>cpf</div>
          <div>
            <Input name="cpf" type="number" placeholder="Insira o cpf sem ponto" />
          </div>
        </div>

        <div className="item">
          <div>telefone</div>
          <div>
            <Input name="phone" type="phone" placeholder="apenas numeros" />
          </div>
        </div>

        <div className="item">
          <div>Email</div>
          <div>
            <Input name="email" type="email" placeholder="Email" />
          </div>
        </div>

        <button type="submit">Salvar</button>
        <Link to="/" className="button">Voltar</Link>

      </section>
    </Form>

  );
}


