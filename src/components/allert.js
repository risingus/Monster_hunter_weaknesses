
import styled from "styled-components";
import {Alert} from '@material-ui/lab';
import { colors } from "../style/globalStyle";



export const StyledAlert = styled(Alert)`
&&{
    color:${colors.font_primary_color};
    margin-top: 1rem;
    width: 18rem;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    
    @media (min-width: 600px) {
      width: 33rem;
    }
  }
`;