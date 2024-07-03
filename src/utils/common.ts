function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export const stringAvatar = (name: string, size?: string) => {
  let child = name
  try {
    child = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  } catch {
    child = name.slice(0, 2)
  }
  let sx: any = {
    bgcolor: stringToColor(name),
  };
  if (size == 'small') {
    sx = {
      bgcolor: stringToColor(name),
      width: '24px',
      height: '24px',
      fontSize: '12px'
    }
  }
  if (size == 'middle') {
    sx = {
      bgcolor: stringToColor(name),
      width: '30px',
      height: '30px',
      fontSize: '15px'
    }
  }
  return {
    sx:sx,
    children: child,
  };
}


export const copyUrlToClip = (phref?: string) => {
  let href = window.location.href;
  if (phref) {
    href = phref;
  }
  const aux = document.createElement('input');
  aux.setAttribute('value', href);
  document.body.appendChild(aux);
  aux.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
  }
  document.body.removeChild(aux);
};


export function calculateTimeAgo(timestamp: string) {
  var currentTime = Math.floor(Date.now() / 1000); // 当前时间戳（秒）
  var timeDiff = currentTime - new Date(timestamp).getTime() / 1000; // 时间差（秒）

  if (timeDiff < 60) {
      return timeDiff + "秒之前";
  } else if (timeDiff < 3600) {
      return Math.floor(timeDiff / 60) + "分钟之前";
  } else if (timeDiff < 86400) {
      return Math.floor(timeDiff / 3600) + "小时之前";
  } else {
      return Math.floor(timeDiff / 86400) + "天之前";
  }
}