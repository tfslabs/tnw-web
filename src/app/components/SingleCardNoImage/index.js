"use client";

import { FlexGrid, Row, Column, Button, OperationalTag } from "@carbon/react";
import { ArrowRight } from "@carbon/icons-react";

import "./index.scss";

export function SingleCardNoImage(props) {
    // Properties declaration
    let rootClassName = props.rootClassName || "";
    let cardHeader = props.cardHeader || "This is card header";
    let cardDescription = props.cardDescription || "This is card description";
    let btnTextDescription = props.btnTextDescription || "This is a button";
    let btnHref = props.btnHref || "";
    let btnKind = props.btnKind || "primary";
    let isExperimentTag = props.isExperimentTag || false;
    let txtExperimentTag = props.txtExperimentTag || "Experiment feature";

    const ExperimentTag = () => {
        return (
            <>
                <Row className="highlight-detail-margin-seperation">
                    <Column>
                        <div>
                            <OperationalTag size="md" text={txtExperimentTag} type="red" />
                        </div>
                    </Column>
                </Row>
            </>
        )
    }

    return (
        <div className={rootClassName}>
            <FlexGrid>
                {
                    (isExperimentTag == true) ? <ExperimentTag /> : <></>
                }
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