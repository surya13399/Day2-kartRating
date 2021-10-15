import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'; 

const Footer = () => {
    return (
       <footer>
           <Container  >
           <div className='text-center font-weight-bold w-100 p-3 m-8 h-100 d-inline-block  '>
               <Row  className='text-center w-100 p-3 m-8 h-100 d-inline-block bg-dark text-white'>
                   <Col>
                       Copyright &copy; Surya's Website
                   </Col>
               </Row>
               </div>
               </Container></footer>
    )
}

export default Footer
