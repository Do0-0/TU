# datetime-util
a tool to translate time format and calculate time

## Usage

```
import TU from 'datetime-util'
TU.calculateTime(new Date(), 'D', 2)
// 2019-06-02 16:24:21

TU.calculateTime('2019年05月31日 10时00', 'D', 2)
// 2019-06-02 10:00:00

TU.calculateTime('2019年05月31日 10时00', 'D', 2, 'yyyy年MM月dd日 HH时mm分ss秒')
// 2019年06月02日 10时00分00秒

TU.formatTime(new Date())
// 2019-05-31 16:24:21

TU.formatTime(new Date(), 'yyyy年MM月dd日 HH时mm分ss秒')
// 2019年05月31日 16时24分21秒

TU.formatTime('2019年05月31日 10时00', 'yyyy年MM月dd日 HH时mm分ss秒')
// 2019年05月31日 10时00分00秒

TU.toString('2019年05月31日 10时00')
// 20190531100000
```

## Install

`npm install datetime-util --save`
