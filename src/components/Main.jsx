import { Button, Carousel, Table } from 'react-bootstrap';
import ieMaca from '../assets/iemaca.avif';
import { useState } from 'react';

const Main = () => {
  let nome = 'Maria';

  let [incremento, setIncremento] = useState(0);

  let [instituicoesEnsino, setInstituicoesEnsino] = useState([
    { nome: 'IFPB - Guarabira' },
    { nome: 'IFPB - Cajazeiras' },
  ]);

  const handleClickIncrementar = (event) => {
    setIncremento(incremento + 1);
  };

  const handleClickAdicionarIE = (event) => {
    console.log('Adionando uma IE');
    let instituicaoEnsino = { nome: 'IFPB - Campina Grande' };
    // instituicoesEnsino.push(instituicaoEnsino);
    setInstituicoesEnsino([...instituicoesEnsino, instituicaoEnsino]);
  };

  const handleMouseOver = (event) => {
    console.log('Passando o mouser sobre o botão!');
  };
  return (
    <>
      {/* <Carousel>
        <Carousel.Item>
          <img src="https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ieMaca} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <p>{incremento}</p>
      <p>{nome}</p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {instituicoesEnsino.map((instituicaoEnsino, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{instituicaoEnsino.nome}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <ul>
        {instituicoesEnsino.map((instituicaoEnsino, i) => {
          return <li key={i}>{instituicaoEnsino.nome}</li>;
        })}
      </ul>
      {}
      <Button
        onClick={handleClickIncrementar}
        onMouseOver={handleMouseOver}
        variant="primary"
      >
        Incrementar
      </Button>

      <Button
        onClick={handleClickAdicionarIE}
        variant="primary"
        className="ms-2"
      >
        Adicionar Instituição
      </Button>
    </>
  );
};

export default Main;
