import { InteractionRequiredAuthError, LogLevel, PublicClientApplication } from '@azure/msal-browser';

// Config object to be passed to Msal on creation
const msalConfig = {
    auth: {
        clientId: "493ebe00-5bd5-4957-a102-2e6a6ee86752",
        authority: "https://login.microsoftonline.com/56841a8d-d6d0-40c5-a7e6-26fa3cd19c0b",
        redirectUri: "http://localhost:8000",
        postLogoutRedirectUri: "/" // Must be registered as a SPA redirectURI on your app registration
    },
    cache: {
        cacheLocation: "localStorage"
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
            logLevel: LogLevel.Verbose
        }
    }
};

const initializeMsalInstance = async () => {
    const msalInstance = new PublicClientApplication(msalConfig);
    await msalInstance.initialize();
    return msalInstance;
};

const msalInstancePromise = initializeMsalInstance();

const msl = new InteractionRequiredAuthError(msalConfig);
console.log(msl);

// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
    scopes: ['User.Read'],
};

// Add here the endpoints for MS Graph API services you would like to use.
const graphConfig = {
    graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
};

// Export everything
export { msalConfig, msalInstancePromise, loginRequest, graphConfig };