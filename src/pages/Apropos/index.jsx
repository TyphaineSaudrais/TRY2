import '../../utils/style/Apropos.css';
import bannerApropos from '../../assets/banner-apropos.png';
import { Rules } from '../../Datas/Rules';
import Collapse from "../../components/Collapse";

function Apropos() {

    
    return (
        <div>
            <img src={bannerApropos} alt="banner A propos" className='Apropos-banner' />
            <h1>A propos</h1>
            <div className='Collapse-Rules'>
				{Rules.map(({ id, titre, contenue}) => (
                <Collapse key={id} label={titre}>
                    <p>{contenue}</p>
                </Collapse>
				))}
			</div>
        </div>
    )
}


export default Apropos


