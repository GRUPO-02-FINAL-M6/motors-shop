import { ReactNode, useEffect, useRef } from "react";
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

  // useEffect(() => {
    // const handleClick = (event: MouseEvent) => {
    //   if (!ref.current) {
    //     return;
    //   }

    //   if (!event.target) {
    //     return;
    //   }

    //   if (!ref.current.contains(event.target as HTMLElement)) {
    //     toggleModal();
    //   }
    // };

    // window.addEventListener("mousedown", handleClick);

    // return () => {
    //   window.removeEventListener("mousedown", handleClick);
    // };
  // }, [toggleModal]);

  return createPortal(
    <Container>
      <div ref={blockClosing ? null : ref}>{children}</div>
    </Container>,
    document.body
  );
};
