"use strict"


import mirrors from "../available_mirrors";



async function timeConnection (url:URL) {
  const start = Date.now()

  try {
    

    const results = {
      url: url,
      time: Date.now() - start
    }
    return results

  } catch (err) {
    // async.map will fail if any of the timeConnections returns an error, but
    // we only care that at least one succeeds; so fail silently
    console.error(err)
  }
  return false
}

// @param {Array} urls Can be an array of request objects or URL strings
// @param {Function] callback
function didSucceed<T>(argument: T | false): argument is T {
  return argument !== false
}
async function faster (urls:Array<URL>) {
  const speedTests = urls.map(async (value, index, array) => {
    return await timeConnection(value)
  })
  const results = await Promise.all(speedTests)

  let successResults =results.filter(didSucceed)

  if (!successResults.length)
    throw new Error("Bad response from all mirrors")

  const sorted = successResults.sort((a, b) => {

      return a.time - b.time
  })

  return sorted[0].url
}

export async function mirror () {
  const urls = mirrors.map(value => {
    return new URL(`${value.baseUrl}/json.php?ids=1&fields=*` )
  })

  try {
    const fastest = await faster(urls)
    return fastest
  } catch (err) {
    return new URL('')
  }
}

// @param {String, JSON} text
// @param {Function} callback
export async function canDownload (text:string | {md5?: string}):Promise<URL> {
  let md5 = "" ;
  if (typeof text === "string") {
    md5 = text
  }else{
    md5 = text.md5;
  }

  const urls = mirrors.filter(value=>{
    return value.canDownloadDirect
  })
  .map(value => {
    return new URL(`${value.baseUrl}/get.php?md5=${md5}`) 
  })

  try {
    return await faster(urls)
  } catch (err) {
    return err
  }
}
