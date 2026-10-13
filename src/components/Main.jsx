import { Button, Carousel } from 'react-bootstrap';
import ieMaca from '../assets/iemaca.avif';

const Main = () => {
  let instituicoesEnsino = [
    { nome: 'IFPB - Guarabira' },
    { nome: 'IFPB - Cajazeiras' },
  ];
  let nome = 'Maria';
  let incremento = 0;

  const handleClick = (event) => {
    console.log('Clicou no botão');
    incremento = incremento + 1;
    console.log(incremento);
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
      1 + 1={1 + 1}
      <p>{incremento}</p>
      <p>{nome}</p>
      <ul>
        {instituicoesEnsino.map((instituicaoEnsino, i) => {
          return <li key={i}>{instituicaoEnsino.nome}</li>;
        })}
      </ul>
      {}
      <Button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        variant="primary"
      >
        Enviar
      </Button>
    </>
  );
};

export default Main;
