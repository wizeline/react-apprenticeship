import React from 'react';

const useClock = () => {
    const [time, setTime] = React.useState(new Date());
    
    React.useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date());
        }, 1000);
    
        return () => {
            console.log('clearing interval');
            clearInterval(interval);
        };
    }, []);
    
    return time;
}


export default useClock;