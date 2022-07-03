import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";
import { sp, tab } from "@/media";

export const LabelArea = styled.div`
  margin-bottom: ${BASE_CSS.form.pc.labelAreaBottom};
  ${tab`
  `}
  ${sp`
    margin-bottom: ${BASE_CSS.form.sp.labelAreaBottom};
  `}
`;
export const LabelTitle = styled.div`
  margin-bottom: ${BASE_CSS.form.pc.labelTitleBottom};
  ${tab`
  `}
  ${sp`
    margin-bottom: ${BASE_CSS.form.sp.labelTitleBottom};
  `}
`;
