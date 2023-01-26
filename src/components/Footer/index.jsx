import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import '../../utils/style/Footer.css';


function Footer() {

	return (<div className='footer'>
			<div className='logo-footer'>
			  <img className='logo-1' src={logo1} alt="logo kasa lettre 1"  />
			  <img className='logo-2' src={logo2} alt="logo kasa lettre 2"  />
			  <img className='logo-3' src={logo3} alt="logo kasa lettre 3"  />
			  <img className='logo-4' src={logo4} alt="logo kasa lettre 4"  />
			</div>
			 <p className='paragraph-footer'>
             © 2020 Kasa. All rights reserved
			 </p>
	       </div>)
}

export default Footer