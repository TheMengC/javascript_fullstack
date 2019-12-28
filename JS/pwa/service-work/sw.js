console.log('begin')

const cacheList = [
  './head.jpeg',
  './bundle.js'
]

//cacheStorage
this.addEventListener('install', (event) => {
  // install -> activate
  //等着一个 Promise resolve 才会去到下一个阶段
  event.waitUntil(
    caches.open(CSCHE_NAME)
    .then(cache => {
      return cache.addAll(cacheList)
    })
  )
})