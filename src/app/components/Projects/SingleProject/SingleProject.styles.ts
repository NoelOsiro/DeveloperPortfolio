import { CustomTheme } from '@mui/material/styles';
import styled from 'styled-components';

export const SingleProjectContainer = styled.div<{ theme: CustomTheme }>`
  background-color: ${(props) => props.theme.primary400};

  .projectContent {
    h2 {
      color: ${(props) => props.theme.tertiary};
    }

    img {
      // Add any styling for the project image
    }

    .project--showcaseBtn {
      // Add any styling for the showcase buttons container
      .iconBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid ${(props) => props.theme.tertiary};
        color: ${(props) => props.theme.tertiary};
        transition: all 0.2s;

        &:hover {
          background-color: ${(props) => props.theme.secondary};
          color: ${(props) => props.theme.primary};
          transform: scale(1.1);
          border: 2px solid ${(props) => props.theme.secondary};
        }

        .icon {
          font-size: 1.1rem;
          transition: all 0.2s;
        }
      }
    }
  }

  .project--desc {
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.tertiary};
    // Add any additional styling for the project description
  }

  .project--lang {
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.tertiary80};
    // Add any additional styling for the project language container
    span {
      // Add any additional styling for each language tag
    }
  }
`;
