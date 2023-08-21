import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { Container } from "./style";

interface ModalProps {
  toggleModal: () => void;
  children: ReactNode;
  blockClosing?: boolean;
}

export const ModalCreateAds = ({
  children,
  // toggleModal,
  blockClosing,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  

  return createPortal(
    <Container>
      <div ref={blockClosing ? null : ref}>{children}</div>
    </Container>,
    document.body
  );
};
