// Once your custom font has been loaded...
import { createIconSetFromFontello } from '@expo/vector-icons'
import fontelloConfig from '../../assets/ksl-icons/config'

const KslIcon = createIconSetFromFontello(fontelloConfig, 'KslIcons')
export const KslIconsList = fontelloConfig.glyphs.map(g => g.css)
export default KslIcon
