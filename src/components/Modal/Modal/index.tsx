import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { Container } from "./style";
import { IoCloseCircleOutline } from "react-icons/io5";
interface ModalProps {
  toggleModal: (agr: boolean) => void;
  children: ReactNode;
  blockClosing?: boolean;
}
export const Modal = ({ children, toggleModal, blockClosing }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  return createPortal(
    <Container>
      <div ref={blockClosing ? null : ref}>
        <button
          onClick={() => {
            toggleModal(false);
          }}
        >
          <IoCloseCircleOutline size={25} />
        </button>
        {children}
      </div>
    </Container>,
    document.body
  );
};