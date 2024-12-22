import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
   const firstName = "Maryam"; 

   return (
       <div style={{ margin: '20px' }}>
           <Card style={{ width: '18rem' }}>
               <Card.Body>
                   <Image />
                   <Name />
                   <Price />
                   <Description />
                   <Button variant="primary">Buy Now</Button>
               </Card.Body>
           </Card>
           <div style={{ marginTop: '20px', textAlign: 'center' }}>
               <h3>
                   Hello, {firstName ? firstName : "there!"}
               </h3>
               {firstName && <img src="/profile.jpg" alt="User Icon" />}
           </div>
       </div>
   );
};

export default App;
