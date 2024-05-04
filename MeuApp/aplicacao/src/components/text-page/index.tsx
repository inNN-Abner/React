interface Props {
    title: string
    subtitle: string
    text: string[]
}

function TextPage({title, subtitle, text}: Props) {
    return (
        <div className='text-formatting'>
            <h1 className='title'>{title}</h1>
            <hr />
            <h2 className='sub-title'>{subtitle}</h2>
            {text.map((paragraph, index) => (
                <p key={index} className='text'>{paragraph}</p>
            ))}        
            <hr />
        </div>
    )
}

export default TextPage
