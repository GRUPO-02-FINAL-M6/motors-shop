import React, { useState, useEffect } from 'react';
import { SliderComponent } from './style';

const FilterValuesRange: React.FC = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);
    const [rangeStyle, setRangeStyle] = useState<{ left: string; right: string }>({
        left: '25%',
        right: '25%',
    });

    const priceGap = 2000;

    useEffect(() => {
        if (maxPrice - minPrice >= priceGap) {
            setRangeStyle({
                left: `${(minPrice / 100000) * 100}%`,
                right: `${95 - (maxPrice / 100000) * 100}%`,
            });
        }
    }, [minPrice, maxPrice]);

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMinPrice = parseInt(e.target.value);
        if (newMinPrice + priceGap <= maxPrice) {
            setMinPrice(newMinPrice);
        }
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMaxPrice = parseInt(e.target.value);
        if (newMaxPrice - minPrice >= priceGap) {
            setMaxPrice(newMaxPrice);
        }
    };

    return (
        <SliderComponent className="slider-component">
            <div>
                <span>Valor minimo: {minPrice} Valor Maximo: {maxPrice}</span>
            </div>
            <div className="slider">
                <div
                    className="progress"
                    style={{ left: rangeStyle.left, right: rangeStyle.right }}
                ></div>
            </div>
            <div className="range-input">
                <input
                    type="range"
                    className="range-min"
                    min="0"
                    max="100000"
                    value={minPrice}
                    step="1000"
                    onChange={handleMinPriceChange}
                />
                <input
                    type="range"
                    className="range-max"
                    min="0"
                    max="100000"
                    value={maxPrice}
                    step="1000"
                    onChange={handleMaxPriceChange}
                />
            </div>
        </SliderComponent>
    );
};

export default FilterValuesRange;
