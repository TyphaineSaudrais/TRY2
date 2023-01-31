import OrangeFlag from "../../assets/Vector.png"
import WhiteFlag from "../../assets/VectorStar.png"

function starRanking (props) {

const starValue = [1,2,3,4,5];

return (
   
            <div>
                {starValue.map((starValue ) =>
                    props >= starValue ? <img key={starValue.toString()} alt="orange start" src={OrangeFlag}/> :  <img key={starValue.toString()} alt="white start" src={WhiteFlag}/> 
                )}
            </div>
        
)

}

export default starRanking