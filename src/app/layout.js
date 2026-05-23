import "@/globals.scss";

import React from 'react';
import { Content } from "@carbon/react";
import { Header, Footer } from "@/components"
import MsalProviderWrapper from '@/MsalProviderWrapper';

export const metadata = {
  title: "The Neko Workshop",
  description: "The Neko Workshop Web app",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <MsalProviderWrapper>
            <Header brandName="The Neko Workshop" productUsage="Home" />
            <Content>
              {props.children}
            </Content>
            <Footer brandName="The Neko Workshop" />
        </MsalProviderWrapper>
      </body>
    </html>
  );
}