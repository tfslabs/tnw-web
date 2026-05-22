import "@/globals.scss";

import React from 'react';
import { Content } from "@carbon/react";
import { Header } from "@/components"

import { PublicClientApplication, EventType } from '@azure/msal-browser';

import { msalConfig } from '@/authConfig';

export const metadata = {
  title: "The Neko Workshop",
  description: "The Neko Workshop Web app",
};

/**
* MSAL should be instantiated outside of the component tree to prevent it from being re-instantiated on re-renders.
* For more, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
*/
const msalInstance = new PublicClientApplication(msalConfig);

// Default to using the first account if no account is active on page load
if (!msalInstance.getActiveAccount() && msalInstance.getAllAccounts().length > 0) {
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

// Listen for sign-in event and set active account
msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    msalInstance.setActiveAccount(account);
  }
});

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header brandName="The Neko Workshop" productUsage="Home" />
          <Content>
            {props.children}
          </Content>
        </div>
      </body>
    </html>
  );
}