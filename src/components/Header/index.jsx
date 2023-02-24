
import img from '../../assets/img.svg';
import styled from 'styled-components';


const BannerWrapper = styled.div `

    width: 85%;
    height: 68px;
    display: flex;
    justify-content: space-between;
    line-height: 50%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 50px; 
    @media (max-width: 768px) {
        justify-content: space-around;
    
    }
  
    `



const KasaLogo =  styled.img `
    margin-left: 10px;
    
`


const BannerNavigation = styled.nav `
    width : 25% ; 
    height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    height: 68px;
    @media (max-width: 768px) {
        justify-content: space-around;
    
    }
  `



const BannerLink = styled.a `

    width: 35%;
    height: 34px;
    text-decoration: none;
    &: hover { text-decoration-line: underline} 
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 130%;
    /* or 34px */
    display: flex;
    align-items: center;
    text-align: right;
    line-height: 60%;
    color: #FF6060;
    @media (max-width: 768px) {
        width: 20%;
        font-size: 18px;
    
    }
  
`



function Header() {

	return (<BannerWrapper>
			 <KasaLogo src={img} alt="logo kasa"/>
			 <BannerNavigation>
				<BannerLink href='/'>Accueil</BannerLink>
				<BannerLink  href='/Apropos'>A Propos</BannerLink>
			 </BannerNavigation>
	       </BannerWrapper>)
}

export default Header