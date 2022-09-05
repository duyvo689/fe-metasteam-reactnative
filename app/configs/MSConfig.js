function getEnv(name) {
    const env = window.env;
    return !!env && !!env[name] ? env[name] : process.env[name];
}

export default {
    API_URL: getEnv('EXPO_API_URL'),
    MORALIS_SERVER_URL: getEnv('EXPO_MORALIS_SERVER_URL'),
    MORALIS_APP_ID: getEnv('EXPO_MORALIS_APP_ID'),
    STREAM_URL: getEnv('EXPO_STREAM_URL')
}
