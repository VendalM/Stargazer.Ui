import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Stargazer',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44341/',
    redirectUri: baseUrl,
    clientId: 'Stargazer_App',
    responseType: 'code',
    scope: 'offline_access Stargazer',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44341',
      rootNamespace: 'Stargazer',
    },
  },
} as Environment;
