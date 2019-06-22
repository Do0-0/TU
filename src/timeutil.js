module.exports = {
	calculateTime(curTime, type, num, format = 'yyyy-mm-dd hh:mm:ss') {
		var date;
		if (this.isDate(curTime)) {
			date = curTime
		} else if (this.isString(curTime)) {
			var [year = 2018, month = 1, day = 0, hour = 0, min = 0, sec = 0] = curTime.split(/\/|\-|\:|\ |年 |年|月 |月|日 |日|时 |时|分 |分|秒 |秒/g);
			date = new Date(year, month - 1, day, hour, min, sec);
		}

		if (type === 'Y') {
	    	date.setFullYear( date.getFullYear() + num);
		} else if (type === 'M') {
	    	date.setMonth( date.getMonth() + num);
		} else if (type === 'D') {
	    	date.setDate( date.getDate() + num);
		} else if (type === 'H') {
	        date.setHours(date.getHours() + num);
		} else if (type === 'M') {
	        date.setMinutes(date.getMinutes() + num);
		} else if (type === 'S') {
	        date.setSeconds(date.getSeconds() + num);
		}

		return this.formatTime(date, format)
	},
	getDateArray(dateObj) {
		var year = this.addZero(dateObj.getFullYear());
		var month = this.addZero(dateObj.getMonth()+1);
		var day = this.addZero(dateObj.getDate());
		var hour = this.addZero(dateObj.getHours());
		var min = this.addZero(dateObj.getMinutes());
		var sec = this.addZero(dateObj.getSeconds());
		return [year, month, day, hour, min, sec]
	},
	formatTime(curTime, format = 'yyyy-mm-dd hh:mm:ss') {
		if (this.isDate(curTime)) {
			var [year, month, day, hour, min, sec] = this.getDateArray(curTime)
		} else if (this.isString(curTime)) {
			var [year = 2018, month = '01', day = '00', hour = '00', min = '00', sec = '00'] = curTime.split(/\/|\-|\:|\ |年|月|日 |日|时|分|秒/g);
		}
		format = format.toLowerCase()
		return format.replace('yyyy', year).replace('mm', month).replace('dd', day).replace('hh', hour).replace('mm', min).replace('ss', sec)
	},
	toString(curTime) {
		if (this.isDate(curTime)) {
			var [year, month, day, hour, min, sec] = this.getDateArray(curTime)
		} else if (this.isString(curTime)) {
			var [year = 2018, month = '01', day = '00', hour = '00', min = '00', sec = '00'] = curTime.split(/\/|\-|\:|\ |年|月|日 |日|时|分|秒/g);
		}
		return year + month + day + hour + min + sec
	},
	isDate(date) {
		return Object.prototype.toString.call(date) === '[object Date]';
	},
	isString(str) {
		return Object.prototype.toString.call(str) === '[object String]';
	},
	addZero(val) {
		return val.toString().replace(/^[0-9]{1}$/, '0' + val);
	}
}