import 'styled-components'
import { MyTheme } from './themes';

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme { }
}