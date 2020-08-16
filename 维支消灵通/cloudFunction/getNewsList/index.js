// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ 
  env:'cinarsky-h2jk2' 
})
// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database({ 
    env:'cinarsky-h2jk2' 
  })
  const todosCollection = db.collection('newsList')
  return  todosCollection.get()
}