import axios from "axios";
import { ElMessage, ElLoading } from 'element-plus';

// 创建axios实例
const service = axios.create({
	baseURL: '',
	timeout: 15000,
	headers: {
		'Content-type': 'application/json;charset=utf-8'
	},
	withCredentials: true
})


let loading: any;
let requestCount: number = 0
// showLoading
const showLoading = () => {
	if (requestCount === 0 && !loading) {
		loading = ElLoading.service({
			text: '拼命加载中，请稍后...',
			background: 'rgba(0,0,0,0.7)',
			spinner: 'el-icon-loading'
		})
	}
	requestCount++;
}
// hideLoading
const hideLoading = () => {
	requestCount--
	if (requestCount == 0) {
		loading.close()
	}
}

// 请求拦截
service.interceptors.request.use(config => {
	showLoading()
	// token
	// config.headers['Authorization'] = getToken()				

	// get请求
	if (config.method === 'get' && config.params) {
		let url = config.url + '?'
		// 参数处理
		for (const propName of Object.keys(config.params)) {
			const value = config.params[propName];
			var part = encodeURIComponent(propName) + '='
			if (value !== null && typeof (value) !== 'undefined') {
				if (typeof value === 'object') {
					for (const key of Object.keys(value)) {
						let params = propName + '[' + key + ']'
						var subPart = encodeURIComponent(params)
						url += subPart + encodeURIComponent(value[key]) + '&'
					}
				} else {
					url += part + encodeURIComponent(value) + '&'
				}
			}
		}
		url = url.slice(0, -1)
		config.params = []
		config.url = url
	}

	// post请求
	if (config.method === 'post' && config.params) {
		config.data = JSON.stringify(config.data);
	}
	return config;
}, error => {
	console.log(error)
	Promise.reject(error)
})


// 相应拦截
service.interceptors.response.use((res: any) => {
	hideLoading()
	// code码
	const code = res.data['code'] || 200;
	// 获取错误信息

	if (code == 200) {
		return Promise.resolve(res.data)
	} else {
		return Promise.reject(res.data)
	}
}, (error) => {
	console.log('error:' + error)
	hideLoading()
	let { message } = error
	if (message == 'Network Error') {
		message = '后端接口连接异常'
	} else if (message.includes('timeout')) {
		message = '系统接口请求超时'
	} else if (message.includes('Request failed with status code')) {
		message = '系统接口' + message.substr(message.length - 3) + '异常'
	}
	ElMessage.error(message);

	return Promise.reject;

})




export default service;