# vue-wangyiyun

### vue + vue-router + ElementUI + TypeScript + Jest

## Project setup
```
npm install
npm run build
npm run test
npm run lint
npm run test:e2e
npm run test:unit
```

### vue UI
```
vue ui
```

### use vue3.0 vue create XXX, here are some change
```
1.data.json not need config 
2.layout.vue mymusic.vue musicer.vue station.vue four components merge to one common copoment, according to the path, get different data but use one template, should watch the route change, once change, make a request.
3.songFirst.vue myFirst.vue merge to songFirst.vue
4.app.vue modal add form valid
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

### from validate
use the elememt form valid
```
<el-form :model="dynamicValidateForm" ref="dynamicValidateForm">
</<el-form>

<el-button type="primary" @click="submitForm('dynamicValidateForm')">确 定</el-button>

submitForm(formName) {
    this.$refs[formName].validate(valid => {
    if (valid) {
        console.log("success submit", valid);
    } else {
        console.log("error");
    }
    });
},
```
ref给元素或子组件注册引用信息。若是DOM元素，引用指向是DOM元素。若是子组件，引用指向实例。此处引用为this.$refs.xxxx
this.$refs[formName]获取的是form元素. $refs仅在组建渲染完后填充且是非响应式，用避免在模板或者计算属性中使用
ref/this.$refs.xx  
routes/this.$route   是跳转的路由对象，可以获取对应的name，path，params， query等
router/this.$router   是Vuerouter的实例，这个实例对象包许多关键对象和属性，比如history对象以及push方法

### import tooltip from element-ui
```
 card change the format in front-port
```

### this project showCase
![the indexPage](https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/menuList.png)
![playList](https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/playList.png)
![station](https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/station.png)
![page](https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/page.png)
![playDetail](https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/playDetail.png)
![mine](https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/mine.png)
![mine-form-valid](https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/mine-form-valid.png)
![search](https://github.com/ljlhnick/vue-wangyiyun/blob/master/public/showCase/search.png)

### API
```
the document is here:  https://api.imjad.cn/cloudmusic.md 
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
