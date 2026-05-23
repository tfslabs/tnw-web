import "@/globals.scss";

import React from 'react';
import { Content } from "@carbon/react";
import { Header, Footer, LoginDetail } from "@/components"
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
          <Header brandName="The Neko Workshop" productUsage="Home"> 
            <LoginDetail loginDetailBtnIconOnly={true} loginDetailBtnKind="primary" />
          </Header>

          <Content>
            {props.children}
          </Content>
          
          <Footer>
            <li className="footer-item-layout">
              <a href="/" className="footer-link-layout">The Neko Workshop</a>
            </li>
            <li className="footer-item-layout">
              <a href="https://discord.gg/GMUdznKjv" className="footer-link-layout">Join Discord</a>
            </li>
          </Footer>
        </MsalProviderWrapper>
      </body>
    </html>
  );
}