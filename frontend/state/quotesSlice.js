// ✨ create your `quotesSlice` in this module
import { createSlice } from "@reduxjs/toolkit";

let id = 1;
const getNextId = () => id++;

const slice = createSlice({
  name: 'quotes',
  initialState: {
    displayAllQuotes: true,
    highlightedQuote: null,
    showFakequotes: true, 
    quoteList: [
      {
        id: getNextId(),
        quoteText: "Don't cry because it's over, smile because it happened.",
        authorName: "Dr. Seuss",
        apocryphal: false,
      },
      {
        id: getNextId(),
        quoteText: "So many books, so little time.",
        authorName: "Frank Zappa",
        apocryphal: false,
      },
      {
        id: getNextId(),
        quoteText: "Be yourself; everyone else is already taken.",
        authorName: "Oscar Wilde",
        apocryphal: false,
      },
    ],
  },
  reducers: {

createquotes: {
  prepare(authorName, quoteText){
    return{
      payload:{
        authorName,
        quoteText,
        apocryphal: false,
        id: getNextId(),

      }
    }
  },
  reducer(state, action){
    state.quoteList.push(action.payload)
  }
},


    deleteQuote(state, action) {
      const id = action.payload;
      state.quoteList = state.quoteList.filter(qt => qt.id !== id);
    },
    highlightedQuotes(state, action) {
      if (state.highlightedQuote === action.payload) {
        state.highlightedQuote = null; 
      } else {
        state.highlightedQuote = action.payload;
      }
    },
    fakeQuote(state, action) {
      const quote = state.quoteList.find(qt => qt.id === action.payload);
      if (quote) {
        quote.apocryphal = !quote.apocryphal; 
      }
    },
    hidefakequotes(state) {
      state.showFakequotes = !state.showFakequotes; 
    },
  },
});

export default slice.reducer;

export const {
  deleteQuote, highlightedQuotes, fakeQuote, hidefakequotes, createquotes
} = slice.actions;




