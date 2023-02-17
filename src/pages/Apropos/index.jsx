
import bannerApropos from '../../assets/banner-apropos.png';
import { Rules } from '../../Datas/Rules';
import Collapse from "../../components/Collapse";
import styled from 'styled-components';

const Img = styled.img `
    width: 1240px;
    height: 223px;
    display: block;
    margin: auto; 
    border-radius: 25px;
`



function Apropos() {

    
    return (
        <div>
            <Img src={bannerApropos} alt="banner A propos" className='Apropos-banner' />
                    {Rules.map(({ id, titre, contenue}) => (
                    <Collapse key={id} label={titre}>
                        <p>{contenue}</p>
                    </Collapse>
                    ))}
        </div>
    )
}


export default Apropos


