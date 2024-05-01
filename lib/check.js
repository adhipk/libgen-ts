export default function (json, field, value) {
  let jsonValue = json[field.toLowerCase()]+'';
  
  if (/^\s*$/.test(jsonValue))
    return false
  else if (value)
    return jsonValue === value
  else
    return true
}
