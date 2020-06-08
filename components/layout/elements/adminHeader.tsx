import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import BreadCrumbs from "@/components/ui/navigation/breadcrumbs";

const StyledAdminHeader = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.spacing(3)}px;

  .adminHeader__title {
  }

  .adminHeader__breadcrumbs {
    margin-bottom: ${(props) => props.theme.spacing(1)}px;
  }
`;

const adminHeader = () => {
  return (
    <StyledAdminHeader className="adminHeader">
      <BreadCrumbs className="adminHeader__breadcrumbs" />
      <Typography className="adminHeader__title" component="h1" variant="h5">
        Dashboard
      </Typography>
    </StyledAdminHeader>
  );
};

export default adminHeader;
