import { FlexGrid, Row } from "@carbon/react";

export function CardGroup(props) {
    // Properties declaration
    let rootClassName = props.rootClassName;
    let subClassName = props.subClassName;
    let cardGroupHeader = props.cardGroupHeader;
    let cardGroupContent = props.children;

    // Properties finallization
    if (rootClassName == null) {
        rootClassName = "";
    }

    if (subClassName == null) {
        subClassName = "";
    }

    if (cardGroupHeader == null) {
        cardGroupHeader = "New Card Group";
    }

    if (cardGroupContent == null) {
        cardGroupContent = () => {
            <>
            </>
        };
    }

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
