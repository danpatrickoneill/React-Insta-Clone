import styled, { css } from "styled-components";

export const Icon = styled.i`
  font-size: ${props => props.fontSize || "32px"};
  margin-right: 10px;
  margin-bottom: 10px;

  &:hover {
    color: ${props => props.hoverColor || null};
  }
`;

export const Username = styled.p`
  font-weight: ${props => props.fontWeight || "bold"};
  display: ${props => props.display || "block"};
`;
