import './Campo.css';
const Campo = (props) =>{
    return(
        <div className="Campo">
            <label>{props.label}</label>
            <input placeholder={`Digite o seu ${props.label}`}></input>
           
        </div>
    )
}

export default Campo