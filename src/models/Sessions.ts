import {createDatabaseConnection, DatabaseConnection} from '../lib/DatabaseConnection'

const TABLE = 'sessions'
interface Config {
  database?: DatabaseConnection
}

export enum SessionType {
    INTERVAL,
    BIG_INTERVAL,
    FOCUS
}

export type Session = {
    time: number
    completed: boolean
    type: SessionType
}
export const createSession = (config?: Config) => {
  const databaseConnection = config?.database || createDatabaseConnection()

  const add = () => {
    return databaseConnection.insert({data: {}, table: TABLE})
  }

  const totalTimeOnMonth = (month: number): number => {
    return 300
  }

  return {
    add,
    totalTimeOnMonth,
  }
}
