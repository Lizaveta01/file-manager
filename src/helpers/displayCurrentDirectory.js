import { cwd } from 'node:process'

export const displayCurrentDirectory = () => {
  console.info(`You are currently in ${cwd()}`)
}