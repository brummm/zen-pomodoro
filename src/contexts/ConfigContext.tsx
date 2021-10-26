import {createContext} from 'react'

interface ConfigContextProps {
  autoPlay: boolean
}

export const ConfigContext = createContext<ConfigContextProps>({} as ConfigContextProps)

export default ConfigContext
