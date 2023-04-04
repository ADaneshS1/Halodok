import Navig from "./Navbar";
import Kart from "./Kartu";
import Tekss from "./Teks";
import Layan from "./Layanan";
import Fig1 from "./Figure1";
import Pen from "./Penunjang";
import Fig2 from "./Figure2";
import Nawar from "./Penawaran";
import Bann from "./Banner";

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

// IMg banner
import Bannne from './../assets/697613_31-3-2023_0-51-15.jpeg'


const Main = () => {
    return (
        <div>
            <Navig image={Logo1}/>

            <div style={{backgroundImage:`url(${Bg})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>

                 <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-11 mt-3">
                            <h2 style={{fontWeight:"600"}}>Solusi Kesehatan Terlengkap</h2>
                            <p className="col-6">Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar kesehatan, semua bisa di Halodoc! </p>
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

            <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20px"}}>

            <div className="col-10">
                <Layan/>
            </div>
                
                <div className="col-10">
                        <Fig1 image={Figr} para={"Layanan kees"}/>
                        <Fig1 image={Figr} para={"Layanan kees"}/>
                        <Fig1 image={Figr} para={"Layanan kees"}/>
                        <Fig1 image={Figr} para={"Layanan kees"}/>
                        <Fig1 image={Figr} para={"Layanan kees"}/>
                        <Fig1 image={Figr} para={"Layanan kees"}/>
                        <Fig1 image={Figr} para={"Layanan kees"}/>
                        <Fig1 image={Figr} para={"Layanan kees"}/>
                        <Fig1 image={Figr} para={"Layanan kees"}/>
                        <Fig1 image={Figr} para={"Layanan kees"}/>                    
                </div>  

                <div className="col-10">
                <Pen/>
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

            <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20px"}}>

                <div className="col-10">
                    <Nawar/>
                </div>

                <div className="d-flex col-10">
                        <Bann image={Bannne}/>
                        <Bann image={Bannne}/>
                        <Bann image={Bannne}/>
                </div>
               
            </div>

            <div></div>

        </div>
    )
}

export default Main;