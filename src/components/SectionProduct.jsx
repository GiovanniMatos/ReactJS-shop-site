import '../css/SectionProduct.css'
import Product from './Product'
import fone from '../assets/maxphoneindex.png'

export default function SectionProduct(){
    return(
        <section>
            <div>
                <h2 id="disponivel">Disponível</h2>
                <Product image={fone} title="teste" text="teste"/>
                <Product image={fone} title="teste" text="teste"/>
                <Product image={fone} title="teste" text="teste"/>
                <Product image={fone} title="teste" text="teste"/>
            </div>
            
        </section>
    )
}