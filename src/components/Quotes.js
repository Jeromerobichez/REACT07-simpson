import React from 'react';


function Quotes ({quot, img, char}) {

  return (
    <figure className="QuoteCard">
    <img src={img} alt={char} />
    <figcaption>
      <blockquote>{quot}</blockquote>
      <p>
        <cite>{char}</cite>
      
      </p>
    </figcaption>
  </figure>
  );
  
  }
  
  export default Quotes;
