import { useState } from "react"
import VectorLeft from "../../assets/VectorLeft.png"
import VectorRight from "../../assets/VectorRight.png"
import styled from 'styled-components';


const CarousselWrap = styled.div `
    background-color: aquamarine;
`

const CarousselCover = styled.img `
    width: 100%;
    height: 100%;
`

function Caroussel(props) {

const [displayedImg, setCurrentDisplayedImg] = useState(0);

return (

    <CarousselWrap>
        <CarousselCover src={props[displayedImg]} alt="Carousel cover"/>
        <img src={VectorLeft} alt="arrow left"  onClick={() => displayedImg > 0 && setCurrentDisplayedImg(displayedImg - 1)  }/>
        <img src={VectorRight} alt="arrow right" onClick={() => displayedImg < props.length && setCurrentDisplayedImg(displayedImg + 1) }/>

    </CarousselWrap>
)

}

export default Caroussel