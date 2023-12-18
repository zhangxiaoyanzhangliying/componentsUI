const path=require('path')
const {VueLoaderPlugin}=require("vue-loader")
const glob=require("glob")
const list = {}
// {
//   card:"./components/lib/card/index.js",
//   demo:"./components/lib/card/index.js"
// }

async function makeList(dirPath,list){

  const files=glob.sync(`${dirPath}/**/index.js`)

  for(let file of files){
    const component=file.split(/[/.]/)[2];
    console.log(file.split(/[/.]/)[1])
    console.log(`component`,component)
    list[component]=`./${file}`
  }
  console.log(list)

  console.log(`files`,files)// [ 'components/lib/card/index.js', 'components/lib/demo/index.js' ]
}
makeList("components",list)

module.exports = {
  entry:list,
  mode:'development',
  output: {
    filename:'[name].umd.js',
    path:path.resolve(__dirname,'dist'),
    library:'mui',
    libraryTarget:'umd'
  },
  plugins:[
    new VueLoaderPlugin()
  ],
  module:{
    rules:[
    {
      test:/\.vue$/,
      use:[
        {
          loader:'vue-loader'
        }
      ]
    }
    ]
  }
}