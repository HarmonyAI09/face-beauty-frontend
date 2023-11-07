import React, { useEffect, useRef } from 'react';

const MarqueeDiv = ({ text, width }) => {
  const divRef = useRef(null);

  useEffect(() => {
    const divElement = divRef.current;
    // if (divElement.scrollWidth > divElement.clientWidth) {
    //   divElement.classList.add('marquee');
    // }
    if(divElement.clientWidth>170){
        divElement.classList.add('marquee');
    }
  }, []);

  return (
    <div ref={divRef} style={{ width :{width} }} className="measurement-name_re marquee">
      <span>{text}</span>
    </div>
  );
};

export default MarqueeDiv;