import { FlexGrid, Row, Column, Theme, OrderedList, Link } from "@carbon/react";

import "./index.scss";

export function Footer(props) {
    let footerContent = props.children || (<></>);

    return (
        <>
            <Theme theme="g100">
                <footer>
                    <FlexGrid className="footer-layout">
                        <Row>
                            <Column>
                                <OrderedList>
                                    {footerContent}
                                </OrderedList>
                            </Column>
                        </Row>
                    </FlexGrid>
                </footer>
            </Theme>
        </>
    );
}