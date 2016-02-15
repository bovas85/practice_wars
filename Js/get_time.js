function convert(time) {
  var hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours(),
    minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes(),
    seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds(),
    milliseconds = time.getMilliseconds() < 100 ? (time.getMilliseconds() < 10 ? '00' + time.getMilliseconds() : '0' + time.getMilliseconds()) : time.getMilliseconds();
  
  return [hours, minutes, seconds].join(':') + ',' + milliseconds;
}