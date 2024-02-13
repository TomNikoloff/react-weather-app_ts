import logo from '../../assets/images/logo.png';
import {
    HeaderContainer,
    PortfolioLogoLink, 
    Logo,
    LinkTitleContainer,
    Title,
    TitleWrap,
    GithubLogoLink,
    GithubLogo
} from './styled';

const Header = () => {
    return (
        <HeaderContainer>
            <LinkTitleContainer>
                <PortfolioLogoLink>
                    <Logo src={logo} alt="Logo" />
                </PortfolioLogoLink>
                <Title>React - <TitleWrap />Weather App</Title>
            </LinkTitleContainer>
            <GithubLogoLink>
                <GithubLogo /> 
            </GithubLogoLink>
        </HeaderContainer>
    );
}

export default Header;