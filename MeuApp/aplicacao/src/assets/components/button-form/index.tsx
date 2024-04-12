import './ButtonForm.css'

interface ButtonProps {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonForm({label, type}: ButtonProps) {
    return (
        <button className='button-form' type={type}> {label}</button>
    )
}

export default ButtonForm