import '../css/SectionProduct.css'
import Product from './Product'
import fone from '../assets/maxphoneindex.png'
import fone2 from '../assets/foneJBL.png'

export default function SectionProduct(){
    return(
        <section>
            <div>
                <h2 id="disponivel">Disponível</h2>
                <Product image={fone} title="teste" text="teste" href="/product"/>
                <Product image={fone2} title="teste" text="teste" href="/product2"/>
                <Product image={fone} title="teste" text="teste"/>
                <Product image={fone} title="teste" text="teste"/>
            </div>
            
        </section>
    )
}