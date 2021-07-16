import { SketchPicker } from 'react-color'
import { createDataset, useDataset } from './createDataset'

export const colorData = createDataset('#FF6348')

const ColorPicker = () => {
  const [color, setColor] = useDataset(colorData)
  return (
    <SketchPicker
      color={color}
      onChangeComplete={({ hex }) => {
        setColor(hex.toUpperCase())
      }}
    />
  )
}

export default ColorPicker
