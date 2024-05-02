import type { JSONObject } from './types/json'
export default function (json:JSONObject, field:string, value?:string):boolean {
  let jsonValue = json[field.toLowerCase()]+'';
  
  if (/^\s*$/.test(jsonValue))
    return false
  else if (value)
    return jsonValue === value
  else
    return true
}
