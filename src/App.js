import { useState } from 'react';
import './styles.css'

function App() {

  const [addText, setAddText] = useState("")

  const [arrayText, setArrayText] = useState([])

  const [blur, setBlur] = useState(false)

  const handleAddText = (e) => {
    e.preventDefault()
    setAddText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAddText("")
    setArrayText([...arrayText, addText])
    setBlur(false)
  }

  const handleXButton = (index) => {
    setArrayText(arrayText.filter((item, i) => index !== i))
  }

  const handleBlur = () => {
    setBlur(true)

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          className={(!addText && blur) ? 'error' : 'inputAddText'}
          type="text"
          value={addText}
          onChange={handleAddText}
          onBlur={handleBlur}
        />
        <button
          className='addTextButton'
          type='submit'
          disabled={!addText || addText[0] === " "}
        >
          Отправить</button>
      </form>
      {(!addText && blur) && <p className="fail">Поле ввода не должно быть пустым, чел</p>}
      <span className='span'>
        {arrayText.map((item, index) => {
          return (
            <li className='li' key={index}>
              {item}
              <button className='x'
                onClick={() => handleXButton(index)}
              >
                ×
              </button>
            </li>
          )
        })}
      </span>
    </div>
  );
}

export default App;