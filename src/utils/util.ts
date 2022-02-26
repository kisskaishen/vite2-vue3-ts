/**
 * 身份证校验
 */
export const isCardID = (sId: string) => {
	var aCity: any = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" }
	var iSum: number = 0;
	if (!(/^\d{17}(\d|x)$/i.test(sId))) return "你输入的身份证长度或格式错误";
	sId = sId.replace(/x$/i, "a");
	if (aCity[parseInt(sId.substr(0, 2))] == null) return "你的身份证地区非法";
	var sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
	var d = new Date(sBirthday.replace(/-/g, "/"));
	if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "身份证上的出生日期非法";
	for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
	if (iSum % 11 != 1) return "你输入的身份证号非法";
	return true;
}


/**
 * 校验银行卡号
 */
export const validateString = (code: string) => {
	if (!/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/.test(code)) {
		return false;
	} else {
		return true;
	}
}

/**
 * 手机号校验
 */
export const validateMobile = (telNum: string) => {
	if (!/^1[3456789]\d{9}$/.test(telNum)) {
		return false
	} else {
		return true;
	}
}

/**
 * 座机电话号校验
 */
export const checkMobile = (tel: string) => {
	var phoneReg = !!tel.match(/^(0|86|17951)?(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])[0-9]{8}$/);
	var telReg = !!tel.match(/^([0-9]{3,4}-)?[0-9]{7,8}$/);
	if (phoneReg || telReg) {
		return true;
	} else {
		return false;
	}
}



/**
 * 车牌号校验
 */
export const regVehicle = (vehicleNum: string) => {
	let re_vehicle = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Za-z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Za-z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/;
	if (!re_vehicle.test(vehicleNum.toUpperCase())) {
		return false;
	} else {
		return true;
	}
}



/**
 * 函数防抖
 */
// export const debounce = (func: Function, delay: number) => {
// 	let timer: any;
// 	return function (...args: any) {
// 		if (timer) {
// 			clearTimeout(timer)
// 		}
// 		timer = setTimeout(() => {
// 			func.apply(this, args)
// 		}, delay)
// 	}
// }

/**
 *  数据去重
 */
export const arrayDistinct = (arr: []) => {
	var hash: [] = []
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				++i
			}
		}
		hash.push(arr[i])
	}
	return hash
}
