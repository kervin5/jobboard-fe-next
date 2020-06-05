import React from "react";
import styled from "styled-components";

interface IStyledPageSection {
  fullHeight?: boolean;
}

const StyledPageSection = styled.div<IStyledPageSection>`
  width: 100%;
`;

const pageSection: React.FC<IStyledPageSection> = ({
  fullHeight = false,
  children,
}) => {
  return (
    <StyledPageSection className="pageSection">{children}</StyledPageSection>
  );
};

export default pageSection;
