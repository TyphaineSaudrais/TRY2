import { Link } from "react-router-dom";

function AppartCard ({ id, title , cover }) {

  

    return (
    <div key={id} className='appart-card'>
         <Link to={`/Logements/${id}`}>
            <img className='appart-img' src={cover} alt={{title}} />
            <p>{title}</p>
        </Link>
    </div>
)

    
}

export default AppartCard