const chunk = <T>(array: Array<T>, size: number) => {
  return array.reduce((preArr: T[][], current, index) => {
    if (index % size) {
      return preArr
    } else {
      return [...preArr, ...[array.slice(index, index + size)]]
    }
  }, [] as T[][])
}
export default chunk
