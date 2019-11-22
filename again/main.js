import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'

Vue.config.productionTip = false

Vue.prototype.NavChange =  function (e) {  
    this.PageCur = e.currentTarget.dataset.cur
    var url="/pages/mime/mime?id=123"
    if(this.PageCur=="main"){
    	url="/pages/index/index?id=123"
    	
    }else if(this.PageCur=="mime"){
    	url="/pages/mime/mime?id=123"
    }else if(this.PageCur=="submit"){
    	url="/pages/submit/publish?id=123"
    }
    
    uni.redirectTo({
    	url: url
    }) 
};  
App.mpType = 'app'
Vue.component('cu-custom',cuCustom)
const app = new Vue({
    ...App
})
app.$mount()
