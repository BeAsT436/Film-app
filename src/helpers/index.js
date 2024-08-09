import { movieDetailsNames } from '../constants'

export default function movieDetailsHelper(movies) {
  return movieDetailsNames.map(label => ({ label, value: movies[label] }))
}
