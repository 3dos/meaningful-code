type Config = {
  apiKey?: string;
  projectKey?: string;
}

const isValidConfig = (config: Config) => {
  if (!!config.apiKey &&
  typeof config.apiKey === 'string' &&
  config.apiKey.length > 0 &&
  !!config.projectKey &&
  typeof config.projectKey === 'string' &&
  config.projectKey.length > 0) {
    return true;
  }

  return false;
}