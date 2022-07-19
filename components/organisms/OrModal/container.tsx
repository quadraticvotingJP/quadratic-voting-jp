// presentationからcomponent(Presentation)とtype(OrModalProps)をimport
import {
  Presentation,
  OrModalProps,
} from "@/components/organisms/OrModal/presentation";

export function OrModal({ children, title, open, close }: OrModalProps) {
  const props = { children, title, open, close };
  return <Presentation {...props} />;
}
