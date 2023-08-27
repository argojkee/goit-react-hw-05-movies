import { HeaderStyle } from './HeaderStyle.styled';
import { StyledNavLink } from './StyledLink.styled';

const Header = () => {
  return (
    <HeaderStyle>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="movies">Movies</StyledNavLink>
    </HeaderStyle>
  );
};

export default Header;
