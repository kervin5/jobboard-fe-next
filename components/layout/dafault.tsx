import React, { ReactElement } from "react";

import styled from "styled-components";
import Header from "./elements/header";

import Footer from "./elements/footer";

const StyledDefaultLayout = styled.div`
  min-height: 100vh;
  padding-top: ${(props) => props.theme.spacing(8)}px;
`;

const defaultLayout: React.FC = (props) => {
  return (
    <StyledDefaultLayout className="defaultLayout">
      <Header />
      <main>{props.children}</main>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </StyledDefaultLayout>
  );
};

export default defaultLayout;
