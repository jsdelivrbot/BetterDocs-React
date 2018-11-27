import CMS, { init } from "netlify-cms"

/**
 * Optionally pass in a config object. This object will be merged into `config.yml` if it exists
 */

init({
  config: {
    backend: {
      name: "git-gateway",
    },
  },
})