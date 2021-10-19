import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Medicine from '../Medicine/Medicine';

const Medicines = () => {
    const [medicines,setMedicines] = useState([]);
    useEffect(()=>{
        fetch('./medicines.json')
        .then(res => res.json())
        .then(data => setMedicines(data));
    },[])
    return (
        <div>
            <h1 className="p-5">Our Medicines</h1>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                
                 {
                     medicines.map(medicine => <Medicine key={medicine.id} medicine={medicine}></Medicine> )
                 }   
                
             </Row>
        </div>
    );
};

export default Medicines;