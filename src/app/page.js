import { Button, Column } from "@carbon/react";

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
        <Button iconDescription="Join Discord" className="global-left-margin">Join Discord</Button>
        <LoginDetail loginDetailBtnIconOnly={false} loginDetailBtnKind="tertiary" rootClassName="global-left-margin" />
      </CallToAction>

      <CardGroup cardGroupHeader="What we offer" rootClassName="section-margin" subClassName="subsection-margin">
        <Column>
          <SingleCardNoImage
            cardHeader="Web Mail Service"
            cardDescription="Free mail service, powered by Mailu"
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
            btnHref="https://discord.gg/GMUdznKjv" />
        </Column>
        <Column>
          <SingleCardNoImage
            cardHeader="Canva Education"
            cardDescription="Design for free on Canva.com"
            btnTextDescription="Sign in to Canva"
            btnKind="primary"
            btnHref="https://www.canva.com/login/sso/9729ad1a-2d8a-44ba-95d6-5382c576a89a" />
        </Column>
      </CardGroup>

      <SingleCardWithImage rootClassName="section-margin" singleCardImageUrl='/smart-work.jpg'>
        <SingleCardNoImage
          cardHeader="Interested in Cryptocurrency?"
          cardDescription="Try The Neko Workshop Crypto on BNB testnet"
          btnTextDescription="View TNWCY"
          btnKind="primary"
          btnHref="https://testnet.bscscan.com/token/0xafe416240f5dfa22ab5b2ce19d17bcfe88d83300" />
      </SingleCardWithImage>

      <SingleCardWithBg rootClassName="section-margin" bgImageUrl="/singleNc.jpg">
        <SingleCardNoImage
          cardHeader="Already a customer in B2B tenant?"
          cardDescription="View your assigned application in TNW My App"
          btnTextDescription="View your apps"
          btnKind="primary"
          btnHref="https://myapps.microsoft.com/tnw.io.vn" />
      </SingleCardWithBg>
    </>
  );
}
