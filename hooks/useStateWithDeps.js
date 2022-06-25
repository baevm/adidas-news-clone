import { useEffect, useState } from 'react'

// use state with dependancy
export function useStateWithDep(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])
  return [value, setValue]
}
