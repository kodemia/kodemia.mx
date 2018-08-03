require('dotenv').config()
const webpack = require('webpack')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
})
const withLess = require('@zeit/next-less')

module.exports = withLess(
  withMDX({
    webpack: config => {
      config.plugins.push(new webpack.EnvironmentPlugin(process.env))

      return config
    }
  })
)
