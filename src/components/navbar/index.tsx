import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar() {
  return (
    <Navbar expand="lg" className="bg-primary-subtle">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex gap-1">
            <Nav.Link className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center' href="#home">Contador Simples</Nav.Link>
            <Nav.Link className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center' href="#link">Alteração de Cor de Fundo</Nav.Link>
            <Nav.Link className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center' href="#link">Lista de Tarefas</Nav.Link>
            <Nav.Link className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center' href="#link">Temporizador</Nav.Link>
            <Nav.Link className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center' href="#link">Filtro</Nav.Link>
            <Nav.Link className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center' href="#link">Formulário</Nav.Link>
            <Nav.Link className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center' href="#link">Requisição de Dados Simples</Nav.Link>
            <Nav.Link className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center' href="#link">Galeria</Nav.Link>
            <Nav.Link className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center' href="#link">Timer</Nav.Link>
            <Nav.Link className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center' href="#link">Tabs Navegáveis</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}