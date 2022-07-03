import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";

export const H2 = styled.h2`
  font-size: ${BASE_CSS.page.pc.title};
  font-weight: bold;
  text-align: center;
  margin-bottom: 64px;
  ${tab`
  `}
  ${sp`
    margin-bottom: 24px;
    font-size: ${BASE_CSS.page.sp.title};
  `}
`;
