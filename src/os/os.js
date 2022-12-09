import os from 'os';

export const getEOL = () => {
    return JSON.stringify(os.EOL);
};

export const getCPUs = () => {
    return os.cpus();
};

export const getHomeDir = () => {
    return os.homedir();
};

export const getUserName = () => {
    return os.userInfo().username;
};

export const getArchitecture = () => {
    return os.arch();
};