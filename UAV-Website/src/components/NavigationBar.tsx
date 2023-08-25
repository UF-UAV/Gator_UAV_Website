
/*class NavigationBar extends React.Component {
    render() {
      return <h2>Hi, I am a Navigator Bar!</h2>;
    }
}*/

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';


//Simple function with no use 
function addNum(num1: any, num2: any) { 
    var AddNum=num1+ num2
    console.log(AddNum)
    return AddNum
}
const NavigationBar= () => {
    const compute= addNum(3,4)
    return (
        <>
    <Navbar bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'blue' }}
        >Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Menu</Nav.Link>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
     {/* {compute} */}
        </>
    );
}


export default NavigationBar
