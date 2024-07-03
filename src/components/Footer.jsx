import '../css/Footer.css'
import cardImg from '../assets/cardImg.png'
import criptoImg from '../assets/criptoImg.png'

export default function Footer(){
    return(
        <footer>
            <p><span>Maxphone P9 </span>&copy; 2024</p>
            <img id="imgCard" src={cardImg} />
            <img id="imgCripto" src={criptoImg} />
        </footer>
    )
}