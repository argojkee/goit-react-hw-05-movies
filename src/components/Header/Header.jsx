import { HeaderStyle } from './HeaderStyle.styled';
import { StyledNavLink } from './StyledLink.styled';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const [current, setCurrent] = useState('home');
  const location = useLocation();

  console.log('home ->', current === 'home' ? true : false);
  console.log('movies -> ', current === 'movies' ? true : false);
  console.log('current -> ', current);
  console.log('local path ->', location.pathname);

  useEffect(() => {
    if (location.pathname.includes('/movies')) {
      setCurrent('movies');
    } else {
      setCurrent('home');
    }
  }, [location.pathname]);

  return (
    <HeaderStyle>
      <StyledNavLink active={current === 'home' ? 'true' : 'false'} to="/">
        Home
      </StyledNavLink>
      <StyledNavLink
        active={current === 'movies' ? 'true' : 'false'}
        to="movies"
      >
        Movies
      </StyledNavLink>
    </HeaderStyle>
  );
};

export default Header;
