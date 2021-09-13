import './App.css';
import  common_json from './Amazon-Behavioral-Questions.json'
import { useEffect, useState } from 'react'

function App() {
  const [isShown, show] = useState(false)
  const [questionObject, updateQuestion] = useState({})

  var getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  var getNewQuestion = () => {
    var lp_number = getRandomInt(common_json.behavioral_questions.length)
    var lp = common_json.behavioral_questions[lp_number].LP
    var q = common_json.behavioral_questions[lp_number].QArray[getRandomInt(common_json.behavioral_questions[lp_number].QArray.length)]
    return {"LP": lp, "Q": q}
  }

  useEffect(() => {
    updateQuestion(getNewQuestion())
  
    // ES LINT ERROR, React Hook useEffect has a missing dependency: 'getNewQuestion'
    // If I add the dependency, it will cause a stack overflow
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className={isShown  ? "LPContainerShown" : "LPContainerHidden"}>
          {questionObject.LP}
        </div>
        <div className="QContainer">
          {questionObject.Q}
        </div>
        <div className="newButtonContainer">
          <button className="revealButton" onClick={show}>Reveal LP</button>
          <button className="newButton" onClick={() => {show(false); updateQuestion(getNewQuestion())}}>New</button>
        </div>
      </header>
    </div>
  );
}

export default App;
