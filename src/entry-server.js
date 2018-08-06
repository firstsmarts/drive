import {createApp} from './index'

export default (ctx) => {
    return new Promise((resolve,reject) => {
        const {app,store,router} = createApp()
        const {url} = ctx
        const {fullPath} = router.resolve(url).route

        if (fullPath != url) {
            return reject({url:fullPath})
        }

        router.push(fullPath)
        router.onReady(() => {
            const machedComponents = router.getMatchedComponents()
            if (!machedComponents.length) {
                return reject({ code: '404' })
            }

            let arr = machedComponents.map(({asyncData}) => {
                return asyncData && asyncData({store,route:router.currentRoute})
            })
            Promise.all(arr).then(() => {
                ctx.state = store.state
                resolve(app)
            })
        })
    })
}

