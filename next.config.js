const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/
})
const withLess = require('@zeit/next-less')

module.exports = withMDX(withLess())
