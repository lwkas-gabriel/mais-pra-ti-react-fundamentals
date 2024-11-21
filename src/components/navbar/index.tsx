import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <Navbar expand="lg" className="bg-primary-subtle">
      <Container>
        <NavLink className="text-decoration-none" to="/">Home</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex gap-1">
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/counter">
              Contador Simples
            </NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/background">Alteração de Cor de Fundo</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/">Lista de Tarefas</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/">Temporizador</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/">Filtro</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/">Formulário</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/">Requisição de Dados Simples</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/">Galeria</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/">Timer</NavLink>
            <NavLink className='d-flex justify-content-center align-items-center bg-primary text-bg-primary rounded text-center text-decoration-none' to="/">Tabs Navegáveis</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}