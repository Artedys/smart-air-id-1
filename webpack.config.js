const path = require('path')
const webpack = require('webpack')
const dotenv = require( "dotenv")
const syncReq = require("sync-request")

dotenv.config()
const publicIp = syncReq("GET", "http://ipinfo.io/ip").getBody('utf8').trim()
const LOCAL = process.env.LOCAL === "true"
if(!LOCAL){
  process.env.HOST = publicIp
}

var OfficialIdentities = []
try {
  OfficialIdentities = require('./data/OfficialIdentities')
} catch (e) {
  /* Ignore */
}

var config = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    hashDigestLength: 8
  },
  externals: {
    Web3: 'web3'
  },
  module: {
    noParse: [/^react$/],
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  node: {
    fs: 'empty'
  },
  devServer: {
    port: 8082,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  mode: 'development',
  plugins: [
    new webpack.EnvironmentPlugin({ 
      HOST: 'localhost',
      RESET: true,
      LOCAL: true
     }),
    new webpack.DefinePlugin({
      OfficialIdentities: JSON.stringify(OfficialIdentities)
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: path.resolve(__dirname, 'node_modules'),
          name: 'vendor',
          enforce: true
        }
      }
    }
  }
}

module.exports = config
