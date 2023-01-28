import { AppartList } from "../../Datas/AppartList"
/* import Presentation from "../../components/Presentation" */
import '../../utils/style/Logements.css';
import Background from '../../assets/Background.png';
import { useParams } from "react-router-dom";

function Logements() {


    const {id} = useParams();
    console.log(id)
  
    const LogementDisplayed = AppartList.find((Appart) => Appart.id === id);

	if (LogementDisplayed) {
        return (
            <div>
                <img src={Background} alt="banner Logements" className='Logements-banner'/>
                <div key={LogementDisplayed.id} className='Logement-presentation'>
                    <div className='Logement-presentation'>
                        <h2>{LogementDisplayed.title}</h2>
                        <p>{LogementDisplayed.location}</p>
                    </div>
                </div>
            </div>
        )
    }
	
}

export default Logements



