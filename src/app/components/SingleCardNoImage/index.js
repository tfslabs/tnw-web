"use client";

import { FlexGrid, Row, Column, Button } from "@carbon/react";
import { ArrowRight } from "@carbon/icons-react";

import "./index.scss";

export function SingleCardNoImage(props) {
    // Properties declaration
    let rootClassName = props.rootClassName;
    let cardHeader = props.cardHeader;
    let cardDescription = props.cardDescription;
    let btnTextDescription = props.btnTextDescription;
    let btnHref = props.btnHref;
    let btnKind = props.btnKind;

    // Properties finallization
    if (rootClassName == null) {
        rootClassName = "";
    }

    if (cardHeader == null) {
        cardHeader = "This is card header";
    }

    if (cardDescription == null) {
        cardDescription = "This is card description";
    }

    if (btnTextDescription == null) {
        btnTextDescription = "This is a button";
    }

    if (btnHref == null) {
        btnHref = "";
    }

    if (btnKind == null) {
        btnKind = "primary";
    }

    return (
        <div className={rootClassName}>
            <FlexGrid>
                <Row className="highlight-detail-margin-seperation">
                    <Column>
                        <div>
                            <h3>{cardHeader}</h3>
                        </div>
                    </Column>
                </Row>
                <Row className="highlight-detail-margin-seperation">
                    <Column>
                        <div>
                            <h4>{cardDescription}</h4>
                        </div>
                    </Column>
                </Row>
                <Row className="highlight-detail-margin-seperation">
                    <Column>
                        <Button
                            description={btnTextDescription}
                            renderIcon={ArrowRight}
                            href={btnHref}
                            kind={btnKind}>
                            {btnTextDescription}
                        </Button>
                    </Column>
                </Row>
            </FlexGrid>
        </div>
    );
}