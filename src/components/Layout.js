import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const GlobalStyle = createGlobalStyle`
  ${reset};
`;

const App = styled.div`
  font-family: 'Avenir Next', 'Helvetica Neue', 'Helvetica', sans-serif;
  font-weight: 500;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title} />
        <GlobalStyle />
        <App>
          {children}
        </App>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
