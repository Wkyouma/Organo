import './Classe.css';
import Card from '../Card';


const Classe = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    return(
        (props.aventureiros.length > 0) && <section className='Classe' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='aventureiros'>
                {props.aventureiros.map( aventureiro => <Card key={aventureiro.nome} corDeFundo={props.corPrimaria} nome={aventureiro.nome} cargo={aventureiro.cargo} imagem={aventureiro.imagem}/> )}
            </div>
        </section> 
        
    )
}

export default Classe;