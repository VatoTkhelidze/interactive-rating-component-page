import Submit from './Submit';
import ThankYou from './ThankYou';
import { useState } from "react";

function App() {
  const [showPage, setShowpage] = useState(true);
  const [rating, setRating] = useState();


  return (
    <>
    {showPage ? <Submit rating={rating} setRating={setRating} setShowpage={setShowpage}/> : <ThankYou rating={rating} setRating={setRating} setShowpage={setShowpage}/>}
    </>
  )
}

export default App;


