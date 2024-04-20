import React from 'react';
import type { BuyListProps } from './types';

const BuyList: React.FC<BuyListProps> = ({ buyList }) => {
    return (
        <ul>
            {buyList.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default BuyList;


