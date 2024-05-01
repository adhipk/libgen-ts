import FSPersister from "@pollyjs/persister-fs";
import NodeHttpAdapter from "@pollyjs/adapter-node-http";
import { resolve } from "path";
import { Polly, setupMocha as setupPolly } from "@pollyjs/core";
Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

import { strict as assert } from "assert";
const check = require("../../index.js").utils.check

const md5 = "c95589cd1b9dfbd919b3d1b6a5665673"

describe("utils", () => {
  setupPolly({
    mode: process.env.VCR_MODE || 'replay',

    adapters: ["node-http"],
    persister: "fs",
    persisterOptions: {
      fs: {
        recordingsDir: resolve(__dirname, "recordings")
      }
    },
    recordFailedRequests: true
  })

  describe("canDownload()", () => {
    it("should return a url string", async () => {
      const response = await check.canDownload(md5)
      assert(response)
    })
  })
})
