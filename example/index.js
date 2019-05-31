let a = require('../src/timeutil')

a.calculateTime(new Date(), 'D', 2)
// 2019/06/02 16:24:21

a.calculateTime('2019年05月31日 10时00', 'D', 2)
// 2019/06/02 10:00:00

a.calculateTime('2019年05月31日 10时00', 'D', 2, 'yyyy年MM月dd日 HH时mm分ss秒')
// 2019年06月02日 10时00分00秒

a.formatTime(new Date())
// 2019/05/31 16:24:21

a.formatTime(new Date(), 'yyyy年MM月dd日 HH时mm分ss秒')
// 2019年05月31日 16时24分21秒

a.formatTime('2019年05月31日 10时00', 'yyyy年MM月dd日 HH时mm分ss秒')
// 2019年05月31日 10时00分00秒

a.toString('2019年05月31日 10时00')
// 20190531100000
