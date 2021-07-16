import { colorData } from './ColorPicker'
import { useDataset } from './createDataset'

const Color = () => {
  const [color] = useDataset(colorData)

  return <span>{color}</span>
}

export default Color