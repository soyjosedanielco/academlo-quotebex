import React from 'react'

function QuoteBox({quote, author, color, button}) {

  return (
      <article className='QuoteBox' style={{color: color}}>
        <div className='quote-container'>
            <span><i class="fa-solid fa-quote-left fa-2xl"></i></span>
            <p className='article-quote'>{quote}</p>
        </div>
        <p className='article-author'>{author}</p>
        <p onClick={button} className="button"><i class="fa-solid fa-circle-chevron-right fa-2xl"></i></p>
      </article>
  )
}

export default QuoteBox