import { AppartList } from "../../Datas/AppartList"
/* import Presentation from "../../components/Presentation" */
import { Navigate, useParams } from "react-router-dom";
import starRanking from "../../components/Stars";
import Caroussel from "../../components/Caroussel";
import Collapse from "../../components/Collapse";
import styled from 'styled-components';


const LogementTitle = styled.h2 `


`

const InfoMore = styled.div `
display: flex; 
justify-content: space-around; 
margin-bottom: 15px; 

`

const DescriptionCollapse = styled.div `
 width: 40%; 


`

const EquipmentCollapse = styled.div `
width: 40%; 


`

const LogementPresentation = styled.div `

display: flex; 
justify-content: space-around; 
margin-bottom: 21px; 


`

const LogementDescription = styled.div `
    display: flex; 
    flex-direction: column; 
`
const LogementHost = styled.div `
    display: flex; 
    flex-direction: column; 
`
const Host = styled.div `
display: flex; 
justify-content: space-around; 
`


const HostImg = styled.img `
width: 50px; 
border-radius: 50%;
margin: 5px; 

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
                    <LogementDescription>
                        <LogementTitle>{LogementDisplayed.title}</LogementTitle>
                        <p>{LogementDisplayed.location}</p>
                        <div className='Logement-tags'>
                            <ul>
                                {tags}
                            </ul>
                        </div>    
                    </LogementDescription>
                    
                   <LogementHost>
                        <Host>
                                <h4>
                                    {LogementDisplayed.host.name}
                                </h4>
                                <HostImg src={LogementDisplayed.host.picture} alt="host presentation"/>
                        </Host>
                        <div>{starRanking(LogementDisplayed.rating)}</div>
                   </LogementHost>
              </LogementPresentation>
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
            </div>
        )
    }
	else {
        <Navigate to= "*"/>
    }
}

export default Logements



