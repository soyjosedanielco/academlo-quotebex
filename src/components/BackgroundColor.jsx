import QuoteBox from './QuoteBox'
import quotes from '../helps/quotes.json'
import colors from '../helps/colors'
import getNumberRandom from '../helps/getNumberRandom'
import { useState } from 'react';

function BackgroundColor() {

  const [quote, setQuote] = useState(quotes[getNumberRandom(quotes)]);
  const [color, setColor] = useState(colors[getNumberRandom(colors)]);

  const button = () => {
    setQuote(quotes[getNumberRandom(quotes)]);
    setColor(colors[getNumberRandom(colors)]);
  }

  return (
    <header className='BackgroundColor' style={{backgroundColor: color}}>
        <QuoteBox
          quote={quote.quote}
          author={quote.author} 
          button={button}
          color={color}
        />
    </header>
  )
}

export default BackgroundColor