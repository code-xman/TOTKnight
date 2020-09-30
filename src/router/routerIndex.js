//  路由去中心化
const getRoutes = modules => {
  const mods = []
  const keys = modules.keys()
  keys.forEach(key => {
    const path = key.replace(/^.\//, 'page/').replace(/\.js$/, '')
    mods.push(...require(`../${path}.js`).default)
  })
  return mods
}

const modules = getRoutes(require.context('../page/', true, /router\.js$/))
console.groupCollapsed('自动注册的路由')
console.dirxml(modules)
console.groupEnd('自动注册的路由')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home'),
    children: [...modules]
  }
]

export default routes
