import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './msalConfig';

let msalInstance;

export const initializeMsal = async () => {
    msalInstance = new PublicClientApplication(msalConfig);
    await msalInstance.initialize();
    return msalInstance;
};

export const getMsalInstance = () => msalInstance;
