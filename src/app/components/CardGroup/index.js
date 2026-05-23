import { FlexGrid, Row } from "@carbon/react";

export function CardGroup(props) {
    // Properties declaration
    let rootClassName = props.rootClassName || "";
    let subClassName = props.subClassName || "";
    let cardGroupHeader = props.cardGroupHeader || "New Card Group";
    let cardGroupContent = props.children || (<></>);

    // Design component export
    return (
        <div className={rootClassName}>
            <FlexGrid>
                <Row className="cardground-row-margin">
                    <h2>{cardGroupHeader}</h2>
                </Row>
                <Row className={subClassName}>
                    {cardGroupContent}
                </Row>
            </FlexGrid>
        </div>
    );
}
