
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

const CollapseSmallWrap = styled.div `

width: 60%; 
 margin: auto; 
 background-color: #F7F7F7;
 border-radius: 5px; 
 margin-top : 40px;
 margin-bottom : 40px;
`

function Apropos() {

    
    return (
        <div>
            <Img src={bannerApropos} alt="banner A propos" className='Apropos-banner' />
                    {Rules.map(({ id, titre, contenue}) => (
                    <CollapseSmallWrap className="collapse">
                            <Collapse key={id} label={titre}>
                                <p>{contenue}</p>
                            </Collapse>
                    </CollapseSmallWrap>     
                    ))}
        </div>
    )
}


export default Apropos


