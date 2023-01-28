

function AppartCard ({ id, title , cover }) {

    return (
    <div key={id} className='appart-card'>
            <a href="/Logements/:{id}">
            <img className='appart-img' src={cover} alt={{title}} />
            <p>{title}</p>
            </a>
    </div>
)

    
}

export default AppartCard