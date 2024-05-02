import {canDownload, mirror} from './lib/speed'


import searchModule from './lib/search'

import checkModule from './lib/check'

export default {
  mirror: mirror,
  search: searchModule,
  utils: {

    check: {
      hasField: checkModule,
      canDownload,
    },
  },
};
