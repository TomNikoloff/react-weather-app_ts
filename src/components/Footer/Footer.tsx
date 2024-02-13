import { 
    FooterContainer,
    PortfolioLink
} from './styled';

const Footer = () => {
    return (
        <FooterContainer>
            <p>
                Handcrafted by <PortfolioLink>Tom Nikoloff</PortfolioLink>
                <br className='uk-hidden@s' />
                <i className="bi bi-c-circle"></i>
                twentyTwentyThree
            </p>
        </FooterContainer>
    )
}

export default Footer;