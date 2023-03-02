import { useState } from "react"
import VectorLeft from "../../assets/VectorLeft.png"
import VectorRight from "../../assets/VectorRight.png"
import styled from 'styled-components';


const CarousselWrap = styled.div `
    position: relative; 
    height:450px; 
    width: 85%; 
    margin: auto; 
    
`

const CarousselCover = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
`
const Arrows = styled.div `
    position: absolute; 
    top: 45%;
    width: 100%;
    
`

const ArrowsImg = styled.div `
    display: flex; 
    justify-content: space-between; 
    margin: 10px; 
    

`

function Caroussel(props) {

const [displayedImg, setCurrentDisplayedImg] = useState(0);

return (

    <CarousselWrap>
        <CarousselCover src={props[displayedImg]} alt="Carousel cover"/>
        <Arrows>
            <ArrowsImg>
                <img src={VectorLeft} alt="arrow left"  onClick={() => displayedImg > 0 && setCurrentDisplayedImg(displayedImg - 1)  }/>
                <img src={VectorRight} alt="arrow right" onClick={() => displayedImg < (props.length -1) && setCurrentDisplayedImg(displayedImg + 1) }/>
            </ArrowsImg>
        </Arrows>
    </CarousselWrap>
)

}

export default Caroussel