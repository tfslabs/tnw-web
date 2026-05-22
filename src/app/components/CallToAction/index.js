import { FlexGrid, Row } from "@carbon/react";

import "./index.scss";

export function CallToAction(props) {
    // Properties declaration
    let rootClassName = props.rootClassName;
    let ctaHeader = props.ctaHeader;
    let ctaDescription = props.ctaDescription;
    let ctaContent = props.children;

    // Properties finallization
    if (rootClassName == null) {
        rootClassName = "";
    }

    if (ctaHeader == null) {
        ctaHeader = "CTA Header";
    }

    if (ctaDescription == null) {
        ctaDescription = "CTA Description"
    }

    if (ctaContent == null) {
        ctaContent = () => {
            <>
            </>
        };
    }

    return (
        <div className={rootClassName}>
            <FlexGrid>
                <Row className="cta-row-margin">
                    <h1>{ctaHeader}</h1>
                </Row>
                <Row className="cta-row-margin">
                    <h4>{ctaDescription}</h4>
                </Row>
                <Row className="cta-row-margin">
                    {ctaContent}
                </Row>
            </FlexGrid>
        </div>
    );
}