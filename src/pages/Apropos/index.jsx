import '../../utils/style/Apropos.css';
import bannerApropos from '../../assets/banner-apropos.png';

function Apropos() {
    return (
        <div>
            <img src={bannerApropos} alt="banner A propos" className='Apropos-banner' />
            <h1>A propos</h1>
        </div>
    )
}


export default Apropos