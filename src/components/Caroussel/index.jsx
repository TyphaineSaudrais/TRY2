import { useState } from "react"
import VectorLeft from "../../assets/VectorLeft.png"
import VectorRight from "../../assets/VectorRight.png"
import "../../utils/style/Caroussel.css"

function Caroussel(props) {

const [displayedImg, setCurrentDisplayedImg] = useState(0);

return (

    <div className="Caroussel">
        <img src={props[displayedImg]} className="Caroussel-cover" alt="Carousel cover"/>
        <img src={VectorLeft} alt="arrow left"  onClick={() => displayedImg > 0 && setCurrentDisplayedImg(displayedImg - 1)  }/>
        <img src={VectorRight} alt="arrow right" onClick={() => displayedImg < props.length && setCurrentDisplayedImg(displayedImg + 1) }/>

    </div>
)

}

export default Caroussel