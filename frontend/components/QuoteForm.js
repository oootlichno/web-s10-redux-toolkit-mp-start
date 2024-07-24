import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createquotes } from '../state/quotesSlice';

export default function QuoteForm() {
  const authorRef = useRef();  
  const quoteRef = useRef();  
  const dispatch = useDispatch();

  const handleCreateQuote = () => {
    const authorName = authorRef.current.value;  
    const quoteText = quoteRef.current.value;   
    if (authorName && quoteText) { 
      dispatch(createquotes(authorName, quoteText));  
      authorRef.current.value = ''; 
      quoteRef.current.value = '';   
    }
  };

  return (
    <form id="quoteForm" onSubmit={(e) => e.preventDefault()}>  
      <h3>New Quote Form</h3>
      <label>
        <span>Author:</span>
        <input ref={authorRef} placeholder="Type author name" />  
      </label>
      <label>
        <span>Quote text:</span>
        <input ref={quoteRef} placeholder="Type quote" /> 
      </label>
      <label>
        <span>Create quote:</span>
        <button type="button" onClick={handleCreateQuote}>DO IT</button>  
      </label>
    </form>
  );
}
