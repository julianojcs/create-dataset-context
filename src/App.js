import ColorPicker, { colorData } from './ColorPicker'
import Color from './Color'
import { useDataset } from './createDataset'


function App() {
  const [color] = useDataset(colorData)
  const style = {
    background: {
      display: 'flex',
      flexDirection: 'column',
      background: color,
      padding: '3rem',
      textAlign: 'center'
    },
    text: {
      background: 'white',
      padding: '1rem',
      margin: '0 0 1rem 0',
      fontWeight: 700,
      fontSize: '2em'
    }
  }
    
  return (
    <div style={style.background}>
      <div style={style.text}>
        Color: <Color />
      </div>
      <ColorPicker />
    </div>
  )
}

export default App
