import Navig from "./Navbar";

import Kart from "./Kartu";
import Tekss from "./Teks";

import Fig1 from "./Figure1";
import Fig2 from "./Figure2";

import Bann from "./Banner";

import Navart from "./Artikel";
import Pill from "./Navpill";
import Carartik from "./Cardartik";

import Fitur from "./Fitures";
import Semua from "./Lihat";

import Foot from "./Footers";

// Img logo
import Logo1 from './../assets/halodoc-logo.png'

// Img banner
import Bg from './../assets/bg-2.svg'

// Img kartu
import Chat from './../assets/chat.png'
import Toko from './../assets/toko.png'
import RS from './../assets/rs.png'
import Medis from './../assets/medis.png'
import Home from './../assets/home-lab.png'

// Img fig1
import Figr from './../assets/animal-health-v2.png'
import Lan1 from './../assets/Layan1.png'
import Lan2 from './../assets/Layan2.png'
import Lan3 from './../assets/Layan3.png'
import Lan4 from './../assets/Layan4.png'
import Lan5 from './../assets/Layan5.png'
import Lan6 from './../assets/Layan6.png'
import Lan7 from './../assets/Layan7.png'
import Lan8 from './../assets/Layan8.png'
import Lan9 from './../assets/Layan9.png'

// IMg banner
import Bannne from './../assets/697613_31-3-2023_0-51-15.jpeg'

// IMg Artikel
import Kenal from './../assets/Kenali-8-Jenis-Kerang-dan-Manfaatnya-untuk-Kesehatan-Tubuh-.jpg'

// IMg Obat
import Fitures from './../assets/378205_15-3-2023_10-19-12.png'

const Main = () => {
    return (
        <div>
            <Navig image={Logo1}/>

            <div style={{backgroundImage:`url(${Bg})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>

                 <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-11 mt-5">
                            <p style={{fontWeight:"600", fontSize:"27px",lineHeight:"10px"}}>Solusi Kesehatan Terlengkap</p>
                            <p className="col-6" style={{fontSize:"16px"}}>Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar kesehatan, semua bisa di Halodoc! </p>
                        </div>

                        <div className="row col-11">
                            <Kart image={Chat} para="Chat dengan Dokter"/>
                            <Kart image={Toko} para="Toko Kesehatan"/>
                            <Kart image={RS} para="Buat Janji RS"/>
                            <Kart image={Medis} para="Janji Medis"/>
                            <Kart image={Home} para="Layanan Home Lab"/>
                        </div>

                        <div className="col-11">
                            <Tekss/>   
                        </div>
                    
                    </div>

                 </div>
                 
            </div>

            <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"30px"}}>

            <div className="col-10">
                <p style={{fontSize:"27px"}}>Layanan Khusus</p>
            </div>
                
                <div className="col-10">
                        <Fig1 image={Figr} para={"Layanan kees"}/>
                        <Fig1 image={Lan1} para={"Layanan kees"}/>
                        <Fig1 image={Lan2} para={"Layanan kees"}/>
                        <Fig1 image={Lan3} para={"Layanan kees"}/>
                        <Fig1 image={Lan4} para={"Layanan kees"}/>
                        <Fig1 image={Lan5} para={"Layanan kees"}/>
                        <Fig1 image={Lan6} para={"Layanan kees"}/>
                        <Fig1 image={Lan7} para={"Layanan kees"}/>
                        <Fig1 image={Lan8} para={"Layanan kees"}/>
                        <Fig1 image={Lan9} para={"Layanan kees"}/>                    
                </div>  

                <div className="col-10">
                    <p className="mt-3" style={{fontSize:"27px"}}>Penunjang Kesehatan</p>
                </div>
                
                <div className="col-10">
                <Fig2 image={Figr} para={"Layanan kees"}/>
                        <Fig2 image={Figr} para={"Layanan kees"}/>
                        <Fig2 image={Figr} para={"Layanan kees"}/>
                        <Fig2 image={Figr} para={"Layanan kees"}/>
                        <Fig2 image={Figr} para={"Layanan kees"}/>
                        <Fig2 image={Figr} para={"Layanan kees"}/>
                        <Fig2 image={Figr} para={"Layanan kees"}/>
                        <Fig2 image={Figr} para={"Layanan kees"}/>
                        <Fig2 image={Figr} para={"Layanan kees"}/>
                        <Fig2 image={Figr} para={"Layanan kees"}/>
                </div>
                            
            </div>

            <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"30px"}}>

                <div className="col-10">
                    <p className="mt-3" style={{fontSize:"27px"}}>Penawaran Terbaik</p>
                </div>

                <div className="d-flex col-10">
                        <Bann image={Bannne}/>
                        <Bann image={Bannne}/>
                        <Bann image={Bannne}/>
                </div>
               
            </div>

            <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"30px"}}>

                <div className="col-10">
                    <Navart/>
                </div>

                <div className="col-10">
                    <Pill/>
                </div>

                <div className="col-10" style={{display:"flex", gap:"20px"}}>
                    <Carartik image={Kenal} judul={"Kenali 8 jenis makanan sehat"} tema={"Diet"} paraf={".............."}/>
                    <Carartik image={Kenal} judul={"Kenali 8 jenis makanan sehat"} tema={"Diet"} paraf={".............."}/>
                    <Carartik image={Kenal} judul={"Kenali 8 jenis makanan sehat"} tema={"Diet"} paraf={".............."}/>
                    <Carartik image={Kenal} judul={"Kenali 8 jenis makanan sehat"} tema={"Diet"} paraf={".............."}/>
                </div>

            </div>

            <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"30px"}}>

                <div className="col-10">
                    <p style={{fontSize:"27px"}}>Obat & Vitamin</p>
                    <p style={{fontSize:"15px"}}>Dapatkan informasi seputar kandungan, aturan, petunjuk penggunaan obat dan vitamin di sini </p>
                </div>

                <div className="col-10">
                    <div style={{display:"flex", gap:"20px"}}>
                        <Fitur image={Fitures} paraf={"Ramadhan"}/>
                        <Fitur image={Fitures} paraf={"Ramadhan"}/> 
                        <Fitur image={Fitures} paraf={"Ramadhan"}/>
                    </div>

                    <div style={{display:"flex", gap:"20px", marginTop:"19px"}}>
                        <Fitur image={Fitures} paraf={"Ramadhan"}/>
                        <Fitur image={Fitures} paraf={"Ramadhan"}/> 
                        <Semua/>
                    </div>
                </div>

            </div>
            <Foot/>
        </div>
    )
}

export default Main;