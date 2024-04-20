import './InputForm.css'

interface InputProps {
    defaultValue: string
    placeholder: string
    type: 'text' | 'email' | 'number'
}

function InputForm({defaultValue, placeholder, type}: InputProps) {
    return (
        <input 
        type = {type}
        className = 'input-form'
        defaultValue = {defaultValue}
        placeholder = {placeholder}>
        </input>
    )
}

export default InputForm