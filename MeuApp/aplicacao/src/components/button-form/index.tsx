import './ButtonForm.css'
import Icone from '/src/images/send.png'

interface ButtonProps {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonForm({label, type}: ButtonProps) {
    return (
        <div id = 'send-botton'>            
            <button id = 'button-form' 
                type = {type}> 
                <img src = {Icone} alt='Ícone de Enviar' title = 'Ícone de enviar'></img>
                {label}
            </button>
        </div>
    )
}

export default ButtonForm