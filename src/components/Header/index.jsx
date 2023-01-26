import '../../utils/style/header.css';
import img from '../../assets/img.svg';

function Header() {

	return (<div className='banner'>
			 <img src={img} alt="logo kasa" className='kasa-logo' />
			 <nav>
				<a className= 'banner_link_Accueil' href='/'>Accueil</a>
				<a className= 'banner_link_Apropos' href='/Apropos'>A Propos</a>
			 </nav>
	       </div>)
}

export default Header