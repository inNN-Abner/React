import { Button } from '@chakra-ui/react'

interface ButtonProps {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonForm({label, type}: ButtonProps) {
    return (
        <Button type={type} colorScheme='red' size='lg'>
        {label}
        </Button>
    )
}

export default ButtonForm