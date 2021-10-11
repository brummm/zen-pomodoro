interface RecordData {
  id?: number
}
interface Record {
  data: RecordData
}

interface Where {
  conditions: {[key: string]: any}
}

interface InsertRecord extends Record {
  table: string
}
interface UpdateRecord extends InsertRecord {
  id?: number
  where?: Where
}

interface SingleRecord {
  id?: number
  where?: Where
  table: string
}

interface MultipleRecords {
  table: string
  where: Where
}

interface Status {
  status: boolean
  message?: string
}

export interface DatabaseConnection {
  insert: (parms: InsertRecord) => Record
  update: (parms: UpdateRecord) => Record
  erase: (parms: SingleRecord) => Status
  read: (parms: SingleRecord) => Record
  list: (parms: MultipleRecords) => Record[]
}

export const createDatabaseConnection = (): DatabaseConnection => {
  const insert = ({table, data}: InsertRecord) => {
    return {data: {id: 1}}
  }
  const update = ({table, data, id, where}: UpdateRecord) => {
    return {data: {id: 1}}
  }
  const erase = ({table, id, where}: SingleRecord) => {
    return {status: true}
  }
  const read = ({table, id, where}: SingleRecord) => {
    return {data: {id: 1}}
  }
  const list = ({table, where}: MultipleRecords) => {
    return [{data: {id: 1}}, {data: {id: 2}}]
  }

  return {
    insert,
    update,
    erase,
    read,
    list,
  }
}
