import * as speedModule from './lib/speed'
import * as latestModule from './lib/latest'

import * as searchModule from './lib/search'

import * as checkModule from './lib/check'

export default {
  mirror: speedModule.mirror,
  latest: latestModule,

  search: searchModule,
  utils: {

    check: {
      hasField: checkModule,
      canDownload: speedModule.canDownload,
    },
  },
};
