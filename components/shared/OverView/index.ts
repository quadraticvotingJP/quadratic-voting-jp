import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";

export const OverView = styled.div`
  font-size: ${BASE_CSS.form.pc.overView};
  white-space: pre-wrap;
  ${tab`
  `}
  ${sp`
    font-size: ${BASE_CSS.form.sp.overView};
  `}
`;
