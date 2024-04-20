import React, { useState } from 'react';

const CounterButton: React.FC = () => {
    const [value, setValue] = useState<number>(5);
    const handleClick = () => {
        setValue(value + 50);
    };
    

    return (
         <button onClick={handleClick} style={{ width: '200px', textAlign: 'center' }}>
            {value}
        </button>
    );
};

export default CounterButton;

