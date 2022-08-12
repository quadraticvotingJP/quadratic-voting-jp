import React from "react";
// component
import { Card } from "@/components/shared/EntryPoint";

export type Props = {
  children: React.ReactElement;
};

// eslint-disable-next-line react/display-name
export const OrCard: React.FC<Props> = ({ children }) => (
  <Card>{children}</Card>
);
