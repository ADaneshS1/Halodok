import React from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';

const Pill = () => {
  return (

    <MDBBtnGroup shadow='0' aria-label='Basic example' style={{gap:"15px"}}>

      <MDBBtn color='secondary' outline>Terbaru</MDBBtn>
      <MDBBtn color='secondary' outline>Populer</MDBBtn>
      <MDBBtn color='secondary' outline>Cacar Monyet</MDBBtn>
      <MDBBtn color='secondary' outline>Hepatitis</MDBBtn>
      <MDBBtn color='secondary' outline>Kehamilan</MDBBtn>

    </MDBBtnGroup>

  );
}

export default Pill;