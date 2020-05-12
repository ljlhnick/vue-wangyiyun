# vue-wangyiyun

### vue + vue-router + ElementUI + TypeScript + Jest

## Project setup
```
npm install
npm run build
npm run test
npm run lint
npm run test:unit
```

### use vue3.0 vue create XXX, here are some change
```
1.data.json not need config 
2.layout.vue mymusic.vue musicer.vue station.vue four components merge to one common copoment, according to the path, get different data but use one template, should watch the route change, once change, make a request.
3.songFirst.vue myFirst.vue merge to songFirst.vue
```

### use ElementUI
```
npm install element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
```

### use vue-property-decorator to reconstruct the layout.vue all component apart from App.vue
```
there are some useful doc  https://www.jianshu.com/p/d8ed3aa76e9b   https://www.jianshu.com/p/5db68ef3e364
1. First problem: inject the router, I search the question by vue community and get the question  https://forum.vuejs.org/t/router-push-watch-route/69602/3
2. Second: watch decorater 
3. components and filter inject @Component
```

### jest not support es
```
https://blog.csdn.net/weixin_30699463/article/details/95709525
```

### import tooltip from element-ui
```
 card change the format in front-port
```

### this project showCase
```
![the indexPage](https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/menuList.png)
![playList](https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/playList.png)
![station)(https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/station.png)
![page](https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/page.png)
![playDetail](https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/playDetail.png)
![mine](https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/mine.png)
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
