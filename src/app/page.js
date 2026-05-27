import { Column, Theme } from "@carbon/react";
import {
  CallToAction,
  CardGroup,
  LoginDetail,
  SingleCardNoImage,
  SingleCardWithBg,
  SingleCardWithImage
} from "@/components";

import "./page.scss";

export default function Home() {

  return (
    <>
      <CallToAction
        ctaHeader="The Neko Workshop"
        ctaDescription="The Neko Workshop is a part of TheFlightSims Labs to validate software before publishing globally."
        rootClassName="section-margin">
        <LoginDetail loginDetailBtnIconOnly={false} loginDetailBtnKind="tertiary" rootClassName="global-left-margin" />
      </CallToAction>

      <CardGroup cardGroupHeader="What we offer" rootClassName="section-margin" subClassName="subsection-margin">
        <Column>
          <SingleCardNoImage
            cardHeader="Web-based email service"
            cardDescription="Free web mail service, powered by Mailu"
            btnTextDescription="Access web mail"
            btnKind="primary"
            btnHref="https://webmail.tnw.io.vn/webmail" />
        </Column>
        <Column>
          <SingleCardNoImage
            cardHeader="Open courses on NetAcad"
            cardDescription="Learn Cyber Security for free"
            btnTextDescription="Join Discord"
            btnKind="primary"
            btnHref="https://discord.gg/R8s2HAezrC" />
        </Column>
        <Column>
          <SingleCardNoImage
            cardHeader="Already a customer?"
            cardDescription="Get support on Discord"
            btnTextDescription="Join Discord"
            btnKind="primary"
            btnHref="https://discord.gg/R8s2HAezrC" />
        </Column>
      </CardGroup>

      <SingleCardWithImage rootClassName="section-margin" singleCardImageUrl='/design-with-canva.jpg'>
        <SingleCardNoImage
          isExperimentTag={true}
          txtExperimentTag="Testing application"
          cardHeader="Wanna try Canva Pro for free?"
          cardDescription="Free Canva Pro for B2C customers"
          btnTextDescription="Sign into Canva.com"
          btnKind="primary"
          btnHref="https://www.canva.com/login/sso/82b2e432-b51e-45ca-979c-b9954c3027b9" />
      </SingleCardWithImage>

      <Theme theme="g100">
        <SingleCardWithBg rootClassName="section-margin">
          <SingleCardNoImage
            cardHeader="Interested in Cryptocurrency?"
            cardDescription="Try The Neko Workshop Crypto on BNB testnet"
            btnTextDescription="View TNWCY"
            btnKind="primary"
            btnHref="https://testnet.bscscan.com/token/0xafe416240f5dfa22ab5b2ce19d17bcfe88d83300" />
        </SingleCardWithBg>
      </Theme>
    </>
  );
}
