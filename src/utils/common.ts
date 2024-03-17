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
