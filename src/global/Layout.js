import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import GlobalStyle from './GlobalStyle';

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
    render={(data) => (
      <>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
        </Helmet>
        <GlobalStyle />
        <>
          {children}
        </>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
