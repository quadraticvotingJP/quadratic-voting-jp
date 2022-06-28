import styled from "styled-components";
import { BASE_CSS } from "@/utils/baseCss";

export const Card = styled.div`
  padding: 24px;
  background-color: ${BASE_CSS.color.white};
  border-radius: 0.75rem;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;
