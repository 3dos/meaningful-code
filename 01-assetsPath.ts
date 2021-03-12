// generate path
const assetsPathHelper = (input: string) => {
  const external = input.indexOf('http') === 0;
  if (external) {
    return input;
  }

  if (input.charAt(0) === '/') {
    return (process.env.REACT_APP_BASE_NAME || '') + input.substr(1);
  } else {
    return (process.env.REACT_APP_BASE_NAME || '') + input;
  }
}