import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from 'components/goods/goods.vue' 
import reatings from 'components/reatings/reatings'
import seller from 'components/seller/seller' 

import 'common/stylus/index.styl'

Vue.config.productionTips=false

Vue.use(VueRouter)
Vue.use(VueResource) 

var app=Vue.extend(App)

var router=new VueRouter({
	linkActiveClass:'active'
}) 

router.map({
	'/goods':{
		component:goods
	},
	'/reatings':{
		component:reatings
	},
	'/seller':{
		component:seller
	}
})

console.log(router)

router.start(app,'#app')

router.go('/goods')
