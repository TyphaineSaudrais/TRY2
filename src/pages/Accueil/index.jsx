/* import { AppartList } from "../../Datas/AppartList";

function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}


function ({ id, picture, name,  })) {
    return (
        <li key={id} className='kasa-Appart' onClick = {handleClick(name)}>
            <img className='lmj-plant-item-cover' src={picture} alt={`${name} cover`} />
            {name}

        </li>
    )
}

function Accueil () {
    

    return (
    
        <div className='appart-list'>
				{AppartList.map(({ id,title ,cover, picture, description, host, rating, location, equipments, tag }) => 
					(
						<div key={id}>
							<div>
                                title={title}
								cover={cover}
								picture = {picture}
								description={description}
								host={host}
                                rating={rating}
                                location={location}
                                equipments={equipments}
								tag={tag}
                            </div>
                         </div>
                    ) )
                }
         </div> 
    )
} 


export default Accueil
 */

import banner from "../../assets/banner.png";
import AppartRecap from '../../components/AppartRecap';
import styled from 'styled-components';


const Img = styled.img `
    width: 1240px;
    height: 223px;
    display: block;
    margin: auto; 
    border-radius: 25px;
`


const TextPresentation = styled.p `

    position: relative;
    bottom: 130px;
    left: 10px;
    width: 700px;
    overflow-wrap: break-word;
    margin: auto; 
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    text-align: center;
    /* or 68px */
   

    color: #FFFFFF;
    `



function Accueil  () {

 return (

        <div className="main">
            <Img src={banner}  alt ="home banner"/>
            <TextPresentation>Chez vous, partout et ailleurs</TextPresentation>
            <AppartRecap/>
        </div>
    
 )

}

export default Accueil 


