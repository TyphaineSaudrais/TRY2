import { useState } from "react"
import VectorArrowUp from "../../assets/VectorArrowUp.png"
import VectorArrowDown from "../../assets/VectorArrowDown.png"
import "../../utils/style/Collapse.css"

/* function Collapse(props) {

    const [isOpen, setIsOpen] = useState(false); 

    return (

        <div className="Collapse-static" >
             <div className="toggle"  onClick={setIsOpen(!useState)}>
                  <h3 className="Collapse-title">{props.label}</h3>
                  {!isOpen? <img src={VectorArrowDown} alt=" arrow down "/>: <img src={VectorArrowUp} alt="Arrow up "/>}
            </div>
            { isOpen && 
               <div className="Collapse-dynamic">
                  {props.children}
               </div>
            }

             </div> 
    )
} 
 */

export default function Collapse(props){

    const [isOpen, setIsOpen] = useState(false); 

   return (

       <div className="collapse">
           <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="Collapse-title">{props.label}</h3>
                {!isOpen? <img src={VectorArrowDown} alt=" arrow down "/>: <img src={VectorArrowUp} alt="Arrow up "/>}
           </div>
           { isOpen && 
                <div className="text_content">
                    {props.children}
                </div>
           }
       </div>

   )
         }


