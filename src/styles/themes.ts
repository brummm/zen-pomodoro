
const colors = {
  pallete1: '#827191',
  pallete2: '#7D1D3F',
  pallete3: '#7CA982',
  pallete4: '#512500',
  pallete5: '#EFC7C2',
  text: '#FFFFFF',
  palleteHighConstrast: 'rgba(255, 255, 255, 0.85)',
}

interface IPalette {
  main: string
  emphasis: string
  highContrast: string
}

export type MyTheme = {
	name: string,
	colors: IPalette
}

export const GREEN = 'green'
export const BURDGUNDY = 'burdgundy'
export const PURPLE = 'purple'
export const PINK = 'pink'
export const BROWN = 'brown'
export const WHITE = 'white'

export const themes: MyTheme[] = [
  {
    name: GREEN,
    colors: {
      main: colors.pallete3,
      highContrast: colors.palleteHighConstrast,
      emphasis: colors.pallete2,
    },
  },
  {
    name: BURDGUNDY,
    colors: {
      main: colors.pallete2,
      highContrast: colors.palleteHighConstrast,
      emphasis: colors.pallete4,
    },
  },
  {
    name: PURPLE,
    colors: {
      main: colors.pallete1,
      highContrast: colors.palleteHighConstrast,
      emphasis: colors.pallete4,
    },
  },
  {
    name: PINK,
    colors: {
      main: colors.pallete5,
      highContrast: colors.pallete1,
      emphasis: colors.palleteHighConstrast,
    },
  },
  {
    name: BROWN,
    colors: {
      main: colors.pallete4,
      highContrast: colors.pallete3,
      emphasis: colors.palleteHighConstrast,
    },
  },
  {
    name: WHITE,
    colors: {
      main: colors.palleteHighConstrast,
      highContrast: colors.pallete2,
      emphasis: colors.pallete1,
    },
  },
]

export default themes
