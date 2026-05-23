import { FlexGrid, Row } from "@carbon/react";

import "./index.scss";

export function CallToAction(props) {
    // Properties declaration
    let rootClassName = props.rootClassName || "";
    let ctaHeader = props.ctaHeader || "CTA Header";
    let ctaDescription = props.ctaDescription || "CTA Description";
    let ctaContent = props.children || (<></>);

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