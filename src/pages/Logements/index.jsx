import { AppartList } from "../../Datas/AppartList"
/* import Presentation from "../../components/Presentation" */
import { Navigate, useParams } from "react-router-dom";
import starRanking from "../../components/Stars";
import Caroussel from "../../components/Caroussel";
import Collapse from "../../components/Collapse";
import styled from 'styled-components';



const InfoMore = styled.div `
display: flex 


`

const DescriptionCollapse = styled.div `
 width: 40%; 
 margin-left: 85px; 

`

const EquipmentCollapse = styled.div `
width: 40%; 
margin-left: 85px; 

`

const LogementPresentation = styled.div `

margin-bottom: 15px; 


`

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
                <LogementPresentation key={LogementDisplayed.id} >
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
                   <InfoMore>
                        <DescriptionCollapse>
                                <Collapse label="Description" className="infos_more_title">
                                    {LogementDisplayed.description}
                                </Collapse>
                            </DescriptionCollapse>
                        <EquipmentCollapse className='Logement-equipements'>
                                <Collapse label="Equipments" className="infos_more_title">
                                    {equipments}
                                    </Collapse>
                        </EquipmentCollapse>
                  </InfoMore>
              </LogementPresentation>
            </div>
        )
    }
	else {
        <Navigate to= "*"/>
    }
}

export default Logements



