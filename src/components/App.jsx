import { Routes, Route, NavLink } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { About, Mission, Reviews, Team } from './About/About';
import { Home } from './Home/Home';
import { Products } from './Products/Products';
import { ProductDetails } from './ProductDetails/ProductDetails';
import styled from 'styled-components';
const Layout = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
`;

const StyledLink = styled(NavLink)`
  color: black;
  padding: 5px;
  margin-left: 10px;
  background-color: blanchedalmond;
  border-radius: 5px;
  border: none;

  &.active {
    color: orange;
  }
`;
const NotFound = () => {
  return <span>'page is not found'</span>;
};

export const App = () => {
  return (
    <div>
      <Layout>
        <nav
          style={{
            marginBottom: 10,
          }}
        >
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
};
