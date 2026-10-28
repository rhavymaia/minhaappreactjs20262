import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const InstituicaoEnsino = () => {
  let [instituicoesEnsino, setInstituicoesEnsino] = useState([
    { nome: 'IFPB - Guarabira' },
    { nome: 'IFPB - Cajazeiras' },
  ]);

  const handleClickAdicionarIE = (event) => {
    console.log('Adionando uma IE');
    let instituicaoEnsino = { nome: 'IFPB - Campina Grande' };
    // instituicoesEnsino.push(instituicaoEnsino);
    setInstituicoesEnsino([...instituicoesEnsino, instituicaoEnsino]);
  };
  return (
    <>
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

export default InstituicaoEnsino;
