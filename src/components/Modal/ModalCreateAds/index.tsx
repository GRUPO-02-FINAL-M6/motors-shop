import { ReactNode, useContext, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { Container, StyledModalCreateAds } from "./style"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AdsContext } from "../../../providers/adsProvider"
import Input from "../../Form/Input"
import { ButtonCanceled, ButtonCreateAdvertiser } from "../../Buttons"


interface ModalProps {
    toggleModal: () => void
    children: ReactNode
    blockClosing?: boolean
}

export const ModalCreateAds = ({ children, toggleModal, blockClosing }: ModalProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!ref.current) {
                return
            }

            if (!event.target) {
                return
            }

            if (!ref.current.contains(event.target as HTMLElement)) {
                toggleModal()
            }
        }

        window.addEventListener("mousedown", handleClick)

        return () => {
            window.removeEventListener("mousedown", handleClick)
        }

    }, [toggleModal])


      



    return createPortal(
        <Container>
            <div ref={blockClosing ? null : ref}>
                {children}
            </div> 
    
        </Container>, document.body
    )
        }
