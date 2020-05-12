function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  const o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}

export function formatTime(millSeconds) {
  const Days = Math.floor(millSeconds / 86400000);
  const Hours = Math.floor((millSeconds - Days * 86400000) / 3600000);
  const Mins = Math.floor(
    (millSeconds - Days * 86400000 - Hours * 3600000) / 60000
  );
  const Seconds = Math.floor(
    (millSeconds - Days * 86400000 - Hours * 3600000 - Mins * 60000) / 1000
  );
  return `${Days} days${Hours} hours ${Mins} mins ${Seconds} seconds`;
}
