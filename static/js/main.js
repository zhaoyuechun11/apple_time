$(document).ready(function(){
  getNowTime();
});

var timer = setInterval(function() {
  getNowTime();
}, 1000)

function getNowTime () {
  var targetTime = new Date(2018, 8, 13, 1);
  var targetTimeValue = targetTime.valueOf();
  // console.log(targetTime);
  var formatTargetTime = formatDate(targetTime, true);
  var nowTime = new Date();
  var nowTimeValue = nowTime.valueOf();
  var timeGap = targetTimeValue - nowTimeValue;
  var restDay = timeGap / (24 * 60 * 60 * 1000);
  var restHour = (timeGap % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000);
  var restMinute = ((timeGap % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000);
  var restSecond = (((timeGap % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000;
  var restTime = formatFloatTime(restDay) +
  '天' + formatFloatTime(restHour) + 
  '时' + formatFloatTime(restMinute) + 
  '分' + formatFloatTime(restSecond) + '秒';
  var timeStr = formatDate(nowTime);
  var timeStr = '现在时间是： ' + timeStr;
  $("#resttime").text(restTime);
  $("#countdown").text(timeStr);
}

function formatFloatTime (time) {
  return time.toString().split('.')[0];
}

/**
 * 格式化时间显示为 [yyyy年MM月dd日 hh:mm:ss]
 * @param {*} datetime 
 */
function formatDate (datetime, showWeek) {
  var nowYear = datetime.getFullYear();
  var nowMonth = datetime.getMonth() + 1;
  // 星期
  var nowDay = datetime.getDay();
  var nowDate = datetime.getDate();
  var nowHour = datetime.getHours();
  var nowMinute = datetime.getMinutes();
  var nowSecond = datetime.getSeconds();

  var weekMap = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
  };

  if (nowHour.toString().length == 1) {
    nowHour = '0' + nowHour;
  }
  if (nowMinute.toString().length == 1) {
    nowMinute = '0' + nowMinute;
  }
  if (nowSecond.toString().length == 1) {
    nowSecond = '0' + nowSecond;
  }
  var timeArray = [nowHour, nowMinute, nowSecond];
  var timeStr = timeArray.join(':');
  var datetimeStr = nowYear + '年' + nowMonth + '月' + nowDate + '日' + ' ' + timeStr;
  if (showWeek) {
    datetimeStr += ' ' + '星期' + weekMap[nowDay];
  }
  return datetimeStr
}
