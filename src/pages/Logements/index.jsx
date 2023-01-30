import { AppartList } from "../../Datas/AppartList"
/* import Presentation from "../../components/Presentation" */
import '../../utils/style/Logements.css';
import Background from '../../assets/Background.png';
import { Navigate, useParams } from "react-router-dom";

function Logements() {


    const {id} = useParams();
    console.log(id)
  
    const LogementDisplayed = AppartList.find((Appart) => Appart.id === id);

	if (LogementDisplayed) {

        const equipments = LogementDisplayed.equipments.map((equipments) => <li>{equipments}</li>)
        const tags = LogementDisplayed.tags.map((tags) => <li>{tags}</li>)

        return (
            <div>
                <img src={Background} alt="banner Logements" className='Logements-banner'/>
                <div key={LogementDisplayed.id} className='Logement-presentation'>
                    <div className='Logement-presentation'>
                        <h2>{LogementDisplayed.title}</h2>
                        <p>{LogementDisplayed.location}</p>
                        <p>{LogementDisplayed.rating}</p>
                        
                    </div>
                    <div className='Logement-tags'>
                        <ul>
                            {tags}
                        </ul>
                   </div>
                   <div className='Logement-host'>
                        <h4>
                            {LogementDisplayed.host.name}
                        </h4>
                        <img src={LogementDisplayed.host.picture} alt="host presentation"/>

                   </div>
                    <div className='Logement-description'>
                        <h3>
                            Description 
                        </h3>
                        <ul>
                            {LogementDisplayed.description}
                        </ul>
                   </div>
                   <div className='Logement-equipements'>
                        <h3>
                            Equipements
                        </h3>
                        <ul>
                            {equipments}
                        </ul>
                   </div>
                   
                </div>
            </div>
        )
    }
	else {
        <Navigate to= "*"/>
    }
}

export default Logements



