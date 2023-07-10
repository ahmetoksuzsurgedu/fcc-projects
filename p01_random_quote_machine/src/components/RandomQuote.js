import { useState } from "react";

const myQuotes=[
  { 
    quoteId:0,
    quoteText:"Yeteri kadar calismali insan!",
    quoteAuthor:"Ahmet"
  },
  { 
    quoteId:1,
    quoteText:"Gercekler insani acitir!",
    quoteAuthor:"Nefise"
  },
  { 
    quoteId:2,
    quoteText:"Bencede!",
    quoteAuthor:"Sude"
  },
  { 
    quoteId:3,
    quoteText:"You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    quoteAuthor:"Erica Jong"
  }
];

const RandomQuote = () => {
const [quoteNum, setQuoteNum] = useState(0)

const showNewQuote = () => {
  let int = Math.floor(Math.random() * 4)
  setQuoteNum(int)

}
const twitHref = "https://twitter.com/intent/tweet?text="+ encodeURIComponent(myQuotes[quoteNum].quoteText+" "+myQuotes[quoteNum].quoteAuthor)
const faceHref = "https://www.facebook.com/sharer/sharer.php?u="+ encodeURIComponent(myQuotes[quoteNum].quoteText+" "+myQuotes[quoteNum].quoteAuthor)

return (
<wrapper id="quote-box">

  <div id="text">
    <p><i class="fa fa-quote-left fa-x fa-pull-left fa-border" aria-hidden="true"></i>{myQuotes[quoteNum].quoteText}</p>
  </div>
  <div id="author">
    <p>{myQuotes[quoteNum].quoteAuthor}</p>
  </div>

  <div className="btn-and-posts">
    <div className ="tweet-quote">
      <a id="tweet-quote" className="tweet-face" rel="noreferrer" href={twitHref} target="_blank"><i class="fa fa-twitter"></i></a>
      <a className="tweet-face" rel="noreferrer" href={faceHref} target="_blank"><i class="fa fa-facebook"></i></a>
    </div>

    <div id="new-quote">
      <button className="btn-new-quote" onClick={showNewQuote}>New Quote{/* <i class="fa fa-thumbs-up"></i> */}</button>
    </div>
  </div>
</wrapper>
  )
}

export default RandomQuote