export function formatDate (dateString) {
  var pattern = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/
  return dateString.replace(pattern, '$1-$2-$3 $4:$5:$6')
}
