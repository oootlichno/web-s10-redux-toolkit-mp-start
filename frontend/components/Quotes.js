import React, {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteQuote, highlightedQuotes, fakeQuote, hidefakequotes } from '../state/quotesSlice' 

export default function Quotes() {
  const quotes = useSelector(qt => qt.quotes.quoteList);
  const displayAllQuotes = useSelector(st => st.quotes.displayAllQuotes);
  const highlightedQuote = useSelector(st => st.quotes.highlightedQuote);
  const showFakequotes = useSelector(st => st.quotes.showFakequotes); 

  const dispatch = useDispatch();
  

  return (
    <div id="quotes">
      <h3>Quotes</h3>
      <div>
        {quotes
          ?.filter(qt => displayAllQuotes || !qt.apocryphal)
          .filter(qt => showFakequotes || !qt.apocryphal) 
          .map(qt => (
            <div
              key={qt.id}
              className={`quote${qt.apocryphal ? ' fake' : ''} ${highlightedQuote === qt.id ? ' highlight' : ''}`} 
            >
              <div>{qt.quoteText}</div>
              <div>{qt.authorName}</div>
              <div className="quote-buttons">
                <button onClick={() => dispatch(deleteQuote(qt.id))}>DELETE</button>
                <button onClick={() => dispatch(highlightedQuotes(qt.id))}>HIGHLIGHT</button>
                <button onClick={() => dispatch(fakeQuote(qt.id))}>FAKE</button>
              </div>
            </div>
          ))}
        {!quotes?.length && "No quotes here! Go write some."}
      </div>
      {!!quotes?.length && (
        <button onClick={() => dispatch(hidefakequotes())}>
          {showFakequotes ? 'HIDE' : 'SHOW'} FAKE QUOTES
        </button>
      )}
    </div>
  );
}
