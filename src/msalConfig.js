import { LogLevel } from '@azure/msal-browser';

export const msalConfig = {
    auth: {
        clientId: "493ebe00-5bd5-4957-a102-2e6a6ee86752",
        authority: "https://login.microsoftonline.com/56841a8d-d6d0-40c5-a7e6-26fa3cd19c0b",
        redirectUri: "http://localhost:8000", // Change this to your redirect URI
        postLogoutRedirectUri: "/" // Change this to your post-logout redirect URI
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

export const loginRequest = {
    scopes: ["User.Read"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
