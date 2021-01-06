import styled from "@emotion/styled";
import Headings from "../Headings/Headings";
import mediaqueries from "../../styles/media";

export const PageTitle = styled(Headings.h1)`
  font-size: 48px;
  font-family: ${p => p.theme.fonts.serif};
  font-weight: 500;
  line-height: 1.32;

  ${mediaqueries.tablet`
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;
