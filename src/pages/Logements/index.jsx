import { AppartList } from "../../Datas/AppartList"
/* import Presentation from "../../components/Presentation" */
import '../../utils/style/Logements.css';
import { Navigate, useParams } from "react-router-dom";
import starRanking from "../../components/Stars";
import Caroussel from "../../components/Caroussel";
import Collapse from "../../components/Collapse";

function Logements() {


    const {id} = useParams();
    console.log(id)
  
    const LogementDisplayed = AppartList.find((Appart) => Appart.id === id);

	if (LogementDisplayed) {

        const equipments = LogementDisplayed.equipments.map((equipments) => <li>{equipments}</li>)
        const tags = LogementDisplayed.tags.map((tags) => <li>{tags}</li>)

        return (
            <div>
                <div>
                    {Caroussel(LogementDisplayed.pictures)}
                </div>
                <div key={LogementDisplayed.id} className='Logement-presentation'>
                    <div className='Logement-presentation'>
                        <h2>{LogementDisplayed.title}</h2>
                        <p>{LogementDisplayed.location}</p>
                      <div>{starRanking(LogementDisplayed.rating)}</div>
                         
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
                   <div className="infos_more">
                        <Collapse label="Description" className="infos_more_title">
                            {LogementDisplayed.description}
                        </Collapse>
                    </div>
                   <div className='Logement-equipements'>
                   <Collapse label="Equipments" className="infos_more_title">
                      {equipments}
                    </Collapse>
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



