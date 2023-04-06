import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import Logo from './../assets/halodoc-footer-logo2.webp'
import Google from './../assets/google-play-badge.png'
import App from './../assets/app-store-badge.png'
import Ste from './../assets/hd-white-logo-icon.svg'

export default function Foot() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted'>

      <section style={{backgroundColor:"#46568E", paddingTop:"15px", color:"#fff"}}>
        <MDBContainer className='mt-5'>

        <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"30px"}}>
          <div className="col-11">
          <img src={Logo} style={{width:"15%", height:"100%"}}></img>
          </div>
        </div>

        

          <MDBRow className='mt-3'>

            <MDBCol > 

                <div style={{display:"flex", flexDirection:"column"}}>
                  <h6 className='fw-bold text-center col-3'>Site Map</h6>

                  <div style={{display:"flex"}}>

                    <div style={{width:"100%"}}>
                    
                          <ul style={{listStyleType:"none"}}>
                              <li>FAQ</li>
                              <li>Blog</li>
                              <li style={{width:"100%"}}>Syarat & Ketentuan</li>
                              <li>Kebijakan Privasi</li>
                              <li>Promo</li>
                          </ul>
                    </div>

                    <div style={{width:"100%"}}>

                          <ul style={{listStyleType:"none"}}>
                              <li>Karir</li>
                              <li>Security</li>
                              <li>Media</li>
                              <li style={{width:"100%"}}>Corporate Partnership</li>
                          </ul>
                    </div>

                  </div>
                    

                </div>
                
            </MDBCol>


            <MDBCol>
              <div style={{lineHeight:"12px"}}>
                <h6 className='fw-bold'>Layanan Pengaduan Konsumen</h6>
                <p>PT Media Dokter Investama</p>
                <p>Jl. H.R. Rasuna Said Kav B32-33, Jakarta Selatan </p>
                <p>help@halodoc.com/ 021-5095-9900</p>
              </div>

              <div style={{lineHeight:"20px"}}>
                <p>Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga Kementerian Perdagangan Republik Indonesia </p>
                <p>0853 1111 1010 (Whatsapp)</p>
              </div>
            </MDBCol>


            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='fw-bold mb-2'>Download App di</h6>
            
              <div style={{display:"flex"}}>
                <img src={Google} style={{width:"35%", }}></img>
                <img src={App} style={{width:"35%"}}></img>
              </div>


              <h6 className='mt-3'>Apakah kamu dokter?</h6>

              <div className='col-5' style={{display:"flex", alignItems:"center", backgroundColor:"grey", borderRadius:"6px", gap:"6px", padding:"4px 6px"}}>
                <img src={Ste} style={{width:"20%"}}></img>
                <h6 style={{color:"#fff"}}>DAFTAR</h6>
              </div>

            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: '#35406B', color:"#fff", display:"flex", justifyContent:"space-around" }}>
        ©HALODOC, 2023. ALL RIGHTS RESERVED 

        <div style={{display:"flex", gap:"30px"}}>

        <p style={{fontWeight:"600"}}>Follow kami di:</p>

        <div>

          <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>

          <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
          </a>

          <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
          </a>

          <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="youtube" />
          </a>

        </div>

        </div>

      </div>

    </MDBFooter>
  );
}