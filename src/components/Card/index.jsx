import { Link } from "react-router-dom";
import styled from 'styled-components';




const AppartName = styled.p `
    position: relative;
    bottom: 80px;
    left: 10px;
    width: 50%;
    overflow-wrap: break-word;
   
`
  const LinkAppardCard = styled(Link) `
  color: #FFFFFF; 
  text-decoration: none; 
  & visited {color: #FFFFFF}; 
  
  `


const AppartImg = styled.img `
    height: 340px;
    width: 340px;
    border-radius: 10px;
    object-fit: cover;
    `



const Card = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 30px;
   
`

function AppartCard ({ id, title , cover }) {

  

    return (
    <Card key={id} className='appart-card'>
         <LinkAppardCard to={`/Logements/${id}`}>
            <AppartImg className='appart-img' src={cover} alt={{title}} />
            <AppartName>{title}</AppartName>
        </LinkAppardCard>
    </Card>
)

    
}

export default AppartCard