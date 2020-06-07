require('dotenv/config')
const app = process.env.APPLICATION

require('@babel/register')({
    extends: './.babelrc',
    ignore: [ /node_modules/]
})

require(`./handler/${app}.js`)