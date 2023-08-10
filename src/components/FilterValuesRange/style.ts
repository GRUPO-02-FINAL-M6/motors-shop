import { styled } from "styled-components";

export const SliderComponent = styled.div`
.slider {
    height: 5px;
    position: relative;
    background: none;
    border-radius: 5px;
}

.slider .progress {
    height: 100%;
    position: absolute;
    border-radius: 5px;
    background: #17A2B8;
}


input[type="range"]::-webkit-slider-thumb {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    background: #17A2B8;
    pointer-events: auto;
    -webkit-appearance: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}

.slider {
    height: 5px;
    position: relative;
    border-radius: 5px;
}

.slider .progress {
    height: 100%;
    left: 25%;
    right: 25%;
    position: absolute;
    border-radius: 5px;
    background: #17A2B8;
}

.range-input {
    position: relative;
}

.range-input input {
    position: absolute;
    width: 100%;
    height: 5px;
    top: -5px;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    background: #17A2B8;
    pointer-events: auto;
    -webkit-appearance: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}

input[type="range"]::-moz-range-thumb {
    height: 17px;
    width: 17px;
    border: none;
    border-radius: 50%;
    background: #17A2B8;
    pointer-events: auto;
    -moz-appearance: none;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}

`;