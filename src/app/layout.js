import "@/globals.scss";

import { Content } from "@carbon/react";
import { Header } from "@/components"

export const metadata = {
  title: "The Neko Workshop",
  description: "The Neko Workshop Web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header brandName="The Neko Workshop" productUsage="Home" />
          <Content>
            {children}
          </Content>
        </div>
      </body>
    </html>
  );
}