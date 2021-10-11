export const getMonthName = (month: number): string => {
  switch (month) {
    case 0:
      return 'January'
    case 1:
      return 'February'
    case 2:
      return 'March'
    case 3:
      return 'April'
    case 4:
      return 'May'
    case 5:
      return 'June'
    case 6:
      return 'July'
    case 7:
      return 'August'
    case 8:
      return 'September'
    case 9:
      return 'October'
    case 10:
      return 'November'
    case 11:
      return 'December'
    default:
      return '';
  }
}

interface getMonthDataPayload {
  name: string
  last: number
  initialFreeSpace: number
}
export const getMonthData = (month: number, year: number): getMonthDataPayload => {
  const name = getMonthName(month)
  const last = new Date(year, month + 1, 0).getDate()
  const initialFreeSpace = new Date(year, month, 1).getDay()
  return {
    name,
    last,
    initialFreeSpace,
  }
}

export const fillWithZeroesIfLesserThanTen = (n: number): string => {
  return ('0' + n).slice(-2)
}

export const secondsToString = (secondsTimer: number): string => {
  if (!secondsTimer) return '00:00'
  const SEP = ':'
  const hours = Math.floor(secondsTimer / 3600)
  const minutes = Math.floor(secondsTimer / 60)
  const seconds = Math.floor(secondsTimer % 60)
  let r = hours > 0 ? `${fillWithZeroesIfLesserThanTen(hours)}${SEP}` : ''
  r += `${fillWithZeroesIfLesserThanTen(minutes)}${SEP}`
  r += fillWithZeroesIfLesserThanTen(seconds)
  return r
}