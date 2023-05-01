import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';

import Logo1 from './../assets/halodoc-logo.png'

const Navig = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer className='p-0'>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}>
          <MDBIcon icon='bars'/>
        </MDBNavbarToggler>

        <MDBNavbarBrand href='#'>
          <img src={Logo1} style={{width:"180px"}}></img>
        </MDBNavbarBrand>

        <MDBCollapse navbar show={showBasic}>

          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>Beranda</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>Artikel</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>Aplikasi</MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>Riwayat</MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>

          
        </MDBCollapse>

        <form style={{width:"10%", padding:"0"}}>
            <MDBBtn color='danger'>Login</MDBBtn>
          </form>

      </MDBContainer>
     
    </MDBNavbar>
    
  );
}

export default Navig;