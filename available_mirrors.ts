

const mirrors = [
  {
    baseUrl: "http://gen.lib.rus.ec",
    canDownloadDirect: false
  },
  {
    baseUrl: "http://libgen.is",
    // if true, '/get.php?md5=' works
    canDownloadDirect: true
  }
];
export default mirrors;