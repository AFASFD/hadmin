export function formatDate (dateString) {
  var pattern = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/
  return dateString.replace(pattern, '$1-$2-$3 $4:$5:$6')
}
export function formatStr (row, column, cellValue, index) {
  if (cellValue === '' || cellValue === null || cellValue === undefined) {
    return '--'
  }
  return cellValue
}
export function formatNbr (row, column, cellValue, index) {
  if (cellValue === '' || cellValue === null || cellValue === undefined) {
    return 0
  }
  return cellValue
}
