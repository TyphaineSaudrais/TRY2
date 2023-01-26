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
import "../../utils/style/Accueil.css";






function Accueil  () {

 return (

        <div className="main">
            <img src={banner} alt= "home-banner" className="home-banner"/>
            <AppartRecap/>
        </div>
    
 )

}

export default Accueil 


