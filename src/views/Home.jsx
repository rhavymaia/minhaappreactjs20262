import { Button, Container, Table } from 'react-bootstrap';
import Main from '../components/Main';
import Carrossel from '../components/Carrossel';
import { useState } from 'react';

const Home = () => {
  let itensCarrossel = [
    {
      srcImagem:
        'https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titulo: 'Nossas Salas de aula',
      descricao:
        'Nos Institutos Federais você tem uma infraestrutura de laboratórios conformatável.',
    },
    {
      srcImagem:
        'https://images.unsplash.com/photo-1758270705031-ebd46917a454?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      titulo: 'Professores qualificados',
      descricao: 'Professores com pós-graduação.',
    },
  ];
  return (
    <>
      <Carrossel itensCarrossel={itensCarrossel}></Carrossel>
    </>
  );
};

export default Home;
