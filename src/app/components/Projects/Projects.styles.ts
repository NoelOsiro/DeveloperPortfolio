import { CustomTheme } from '@mui/material/styles';
import styled from 'styled-components';

export const ProjectsContainer = styled.div<{ theme: CustomTheme }>`
  background-color: ${(props) => props.theme.secondary};
`;

export const ProjectsHeader = styled.div<{ theme: CustomTheme }>`
  color: ${(props) => props.theme.primary};
  // add any additional styling for the header
`;

export const ProjectsBody = styled.div<{ theme: CustomTheme }>`
  // add any additional styling for the projects body
`;

export const ProjectsBodyContainer = styled.div<{ theme: CustomTheme }>`
  // add any additional styling for the projects body container
`;

export const ProjectsViewAll = styled.div<{ theme: CustomTheme }>`
  // add any additional styling for the view all button
  button {
    color: ${(props) => props.theme.tertiary};
    background-color: ${(props) => props.theme.primary};
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.secondary};
      background-color: ${(props) => props.theme.primary};
    }
  }

  svg {
    color: ${(props) => props.theme.tertiary};
    background-color: ${(props) => props.theme.secondary70};
    width: 40px;
    height: 40px;
    padding: 0.5rem;
    font-size: 1.05rem;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      color: ${(props) => props.theme.tertiary};
      background-color: ${(props) => props.theme.secondary};
    }
  }
`;
