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





const TextPresentation = styled.p `

   
    overflow-wrap: break-word;
    margin: 0px auto; 
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 240%;
    text-align: center;
    padding-top: 85px; 
    /* or 68px */
    color: #FFFFFF;
    @media (max-width: 768px) {
       margin: Opx 5px;
       
    
    }
    `

    const BannerAccueil = styled.div `
    background: linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ),  url(${banner});
    width: 85%;
    height: 223px;
    display: block;
    margin: auto; 
    border-radius: 25px;
    @media (max-width: 768px) {
        width: 90%;
       
    
    }
   

    `



function Accueil  () {

 return (

        <div className="main">
            <BannerAccueil>
              <TextPresentation>Chez vous, partout et ailleurs</TextPresentation>
            </BannerAccueil>
            <AppartRecap/>
        </div>
    
 )

}

export default Accueil 


