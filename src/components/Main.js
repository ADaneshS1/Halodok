import Navig from "./Navbar";
import Kart from "./Kartu";
import Tekss from "./Teks";

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

// IMg Tekss


const Main = () => {
    return (
        <div>
            <Navig image={Logo1}/>

            <div style={{backgroundImage:`url(${Bg})`, backgroundRepeat:"no-repeat", height:"100vh"}}>

                 <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-11 mt-5">
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

        </div>
    )
}

export default Main;