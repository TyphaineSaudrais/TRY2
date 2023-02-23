import { AppartList } from "../../Datas/AppartList"
/* import Presentation from "../../components/Presentation" */
import { Navigate, useParams } from "react-router-dom";
import starRanking from "../../components/Stars";
import Caroussel from "../../components/Caroussel";
import Collapse from "../../components/Collapse";
import styled from 'styled-components';


const LogementTitle = styled.h2 `
color: #FF6060; 
font-size: 36px; 
font-weight: 500; 
margin-bottom: 10px; 

`
const LogementLocation = styled.p `
color: #FF6060; 
font-size: 18px; 
font-weight: 500; 
margin-top: 0px; 

`

const Stars = styled.div `
margin: 10px; 
width: 201px;
height: 36px;
`



const InfoMore = styled.div `
display: flex; 
justify-content: space-between; 
margin: auto; 
margin-bottom: 15px; 
width: 85%;

`

const DescriptionCollapse = styled.div `
 width: 40%; 


`

const EquipmentCollapse = styled.div `
width: 40%; 
list-style: none; 


`

const LogementPresentation = styled.div `

display: flex; 
justify-content: space-between; 
margin: auto;
width: 85%; 

`

const LogementDescription = styled.div `
    display: flex; 
    flex-direction: column; 
`
const LogementHost = styled.div `
    display: flex; 
    flex-direction: column; 
    margin-top: 35px;
    
`
const Host = styled.div `
display: flex; 
justify-content: flex-end;
margin-right: 20px; 

`


const HostImg = styled.img `
width: 64px;
height: 64px;
border-radius: 50%;
margin: 5px; 


`


const HostName = styled.h4 `
width: 93px; 
font-size: 18px; 
color: #FF6060; 
font-weight: 500; 

`


const LogementTags = styled.ul `
    display: flex; 
    list-style: none; 
    padding-inline-start: 0px; 
    

`

const LogementTag = styled.li `
    background: #FF6060;
    border-radius: 15px;
    padding : 10px 20px; 
    color: #FFFFFF; 
    margin: 5px;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    vertical-align: center; 
   
`


const CollapseText = styled.p `
margin: 21px 5px; 


`


function Logements() {


    const {id} = useParams();
    console.log(id)
  
    const LogementDisplayed = AppartList.find((Appart) => Appart.id === id);

	if (LogementDisplayed) {

        const equipments = LogementDisplayed.equipments.map((equipments) => <li>{equipments}</li>)
        const tags = LogementDisplayed.tags.map((tags, index) => <LogementTag key={index}>{tags}</LogementTag>)

        return (
            <div>
                <div>
                    {Caroussel(LogementDisplayed.pictures)}
                </div>
                <LogementPresentation key={LogementDisplayed.id} >
                    <LogementDescription>
                        <LogementTitle>{LogementDisplayed.title}</LogementTitle>
                        <LogementLocation>{LogementDisplayed.location}</LogementLocation>
                        <LogementTags >
                                {tags}
                        </LogementTags>    
                    </LogementDescription>
                    
                   <LogementHost>
                        <Host>
                                <HostName>
                                    {LogementDisplayed.host.name}
                                </HostName>
                                <HostImg src={LogementDisplayed.host.picture} alt="host presentation"/>
                        </Host>
                        <Stars>{starRanking(LogementDisplayed.rating)}</Stars>
                   </LogementHost>
              </LogementPresentation>
              <InfoMore>
                        <DescriptionCollapse>
                                <Collapse label="Description" className="infos_more_title">
                                    <CollapseText>{LogementDisplayed.description}</CollapseText>
                                </Collapse>
                            </DescriptionCollapse>
                        <EquipmentCollapse className='Logement-equipements'>
                                <Collapse label="Equipments" className="infos_more_title">
                                    <CollapseText>{equipments}</CollapseText>
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



