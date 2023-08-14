import { styled } from "styled-components";


export const LoadingStyled = styled.main`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h4{
        margin-top: 50px;
        text-align: center;
    }
    
    span{
        display: inline-block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: var(--brand--brand1);
        margin: 8px;

        animation: bounce .6s cubic-bezier(.6,.1,1,.4);
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    span:nth-child(1){
        animation-delay: .1s
    }

    span:nth-child(2){
        animation-delay: .2s
    }

    span:nth-child(3){
        animation-delay: .3s
    }

    @keyframes bounce{
        to{
            transform: translateY(50px);
        }
    }
`