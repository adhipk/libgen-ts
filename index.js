import * as speedModule from './lib/speed.js'
import * as latestModule from './lib/latest.js'
import * as randomModule from './lib/random.js'
import * as searchModule from './lib/search.js'
import * as cleanModule from './lib/clean.js'
import * as checkModule from './lib/check.js'

module.exports = {
  mirror: speedModule.mirror,
  latest: latestModule,
  random: randomModule,
  search: searchModule,
  utils: {
    clean: cleanModule,
    check: {
      hasField: checkModule,
      canDownload: speedModule.canDownload,
    },
  },
};
