import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './LoyoutStyle.styled';
import { Suspense } from 'react';

const Loyout = () => {
  return (
    <Suspense>
      <Container className="container">
        <Header />
        <Outlet />
      </Container>
    </Suspense>
  );
};

export default Loyout;
