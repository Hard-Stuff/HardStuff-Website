import React, { useState, useEffect } from 'react';

const options = [
    "Improve.",
    "Learn.",
    "Fix.",
    "Tweak.",
    "*facepalm*",
    "Scrutinize.",
    "Adjust.",
    "Rethink.",
    "Enhance.",
    "'Aaagh! Fire!'",
    "Evolve.",
    "Revise.",
    "Overhaul.",
    "WTF.",
    "'Didn't expect that to happen!'",
    "Refine.",
    "'That worked!?'",
    "*cries internally*",
    "Debug.",
    "'Wow!'",
    "'RUN!'",
    "'Amazing!'",
];

const BuildTestXRepeat = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Initial delay before starting the interval
        const initialDelay = setTimeout(() => {
            const interval = setInterval(() => {
                setCurrentIndex((currentIndex) => (currentIndex + 1) % options.length);
            }, 2000); // 2 seconds to view and 2 seconds for the bounce effect

            // Clear interval on component unmount
            return () => clearInterval(interval);
        }, 1500); // 2-second initial delay

        // Clear timeout on component unmount
        return () => clearTimeout(initialDelay);
    }, []);


    return (
        <div className="scroll-container hardstuff-no-colour">
            <span style={{ margin: "0px 10px" }} className='build'>Build. </span>
            <span style={{ margin: "0px 10px" }} className='test'> Test. </span>
            <span style={{ margin: "0px 10px" }} className='scroll-item'>{options[currentIndex]}</span>
            <span style={{ margin: "0px 10px" }} className='repeat'> Repeat.</span>
        </div>
    );
};

export default BuildTestXRepeat;
