import {createDatabaseConnection, DatabaseConnection} from '../lib/DatabaseConnection'
import { Time } from './Time'

const TABLE = 'sessions'
interface Config {
  database?: DatabaseConnection
}

export type Session = {
    times: Time[]
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
