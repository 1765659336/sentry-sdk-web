import { axiosCanceler } from './axiosCancel';

export const interceptorsReq =  (config) => {
	axiosCanceler.addPending(config);
	return config;
};

export const interceptorsRes = (response) => {
	if(response) axiosCanceler.removePending(response.config);
	if (response.data.status === 2) {
		return new Promise((_resolve, reject) => {
			// 异常
			console.error(response.data.message || '请求错误');
			reject(response);
		});
	}
	if (response.status === 200) {
		// 成功
		return new Promise((resolve) => {
			resolve(response);
		});
	} else {
		return new Promise((_resolve, reject) => {
			// console.error(response.data.message || '请求错误');
			reject(response);
		});
	}
};
