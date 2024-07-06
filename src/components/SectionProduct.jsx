import '../css/SectionProduct.css'
import Product from './Product'
import ModalProduct from './ModalProduct'
import fone from '../assets/maxphoneindex.png'
// import fone2 from '../assets/foneJBL.png'

export default function SectionProduct(){
    const amazonLink = "https://www.amazon.com.br/Headphone-Bluetooth-Microfone-Cancelamento-Original/dp/B0CZS56RDJ/ref=asc_df_B0CZS6CBMC/?tag=googleshopp00-20&linkCode=df0&hvadid=647438375017&hvpos=&hvnetw=g&hvrand=1574642814790402213&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101719&hvtargid=pla-2316011700901&mcid=8d921423da96343099aba0b5441fff1f&th=1"
    const shopeeLink = "https://shopee.com.br/Fone-de-Ouvido-sem-fio-P9-AirPods-Max-TWS-Bluetooth-5.0-Wireless-Headphone-i.1033215079.23196256424?sp_atk=d132bd63-2a30-4b5f-b4ae-f28b048b0f7c&xptdk=d132bd63-2a30-4b5f-b4ae-f28b048b0f7c"
    const aliexpressLink = "https://pt.aliexpress.com/item/1005007159312353.html?src=google&src=google&albch=shopping&acnt=768-202-3196&slnk=&plac=&mtctp=&albbt=Google_7_shopping&gclsrc=aw.ds&albagn=888888&isSmbAutoCall=false&needSmbHouyi=false&src=google&albch=shopping&acnt=768-202-3196&slnk=&plac=&mtctp=&albbt=Google_7_shopping&gclsrc=aw.ds&albagn=888888&ds_e_adid=&ds_e_matchtype=&ds_e_device=c&ds_e_network=x&ds_e_product_group_id=&ds_e_product_id=pt1005007159312353&ds_e_product_merchant_id=5055920311&ds_e_product_country=BR&ds_e_product_language=pt&ds_e_product_channel=online&ds_e_product_store_id=&ds_url_v=2&albcp=19639392923&albag=&isSmbAutoCall=false&needSmbHouyi=false&gad_source=1&gclid=Cj0KCQjws560BhCuARIsAHMqE0F1k1nD3DyiUZ6vFTkg3R-_jLlOB4PFUu5y3bBp605OdCKqtgZj23UaAutoEALw_wcB&aff_fcid=aebee3440b904af2af046407218dfd80-1720216531006-03198-UneMJZVf&aff_fsk=UneMJZVf&aff_platform=aaf&sk=UneMJZVf&aff_trace_key=aebee3440b904af2af046407218dfd80-1720216531006-03198-UneMJZVf&terminal_id=bcbc50e1265149a3af1bfd35279bf528&afSmartRedirect=n"
    return(
        <section>
            <div>
                <h2 id="disponivel">Disponível</h2>
                <div className="cards">
                    <Product id="card1"
                    image={fone} title="teste" text="teste"
                    buttonModal={ <ModalProduct 
                    textButton="Comprar Aqui" 
                    imagemFone={fone} 
                    tituloDescricao="Nome Teste"
                    paragrafoDescricao="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum." 
                    /> } /> 
                    {/* href="/product" */}

                    <Product image={fone} title="teste" text="teste" 
                    buttonProduct={<ModalProduct 
                    tituloDescricao="Redirecionando"
                    textButton="Comprar na Shopee"
                    href={shopeeLink}/>} />

                    <Product image={fone} title="teste" text="teste" 
                    buttonProduct={<ModalProduct 
                    tituloDescricao="Redirecionando"
                    textButton="Comprar na Amazon"
                    href={amazonLink}/>} />

                    <Product image={fone} title="teste" text="teste"
                    buttonProduct={<ModalProduct 
                    tituloDescricao="Redirecionando"
                    textButton="Comprar na Aliexpress"
                    href={aliexpressLink}/>} />
                </div>

            </div>
            
        </section>
    )
}