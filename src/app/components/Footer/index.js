import { FlexGrid, Row, Column, Theme, OrderedList, Link } from "@carbon/react";

import "./index.scss";

export function Footer(props) {
    let brandName = props.brandName || "IBM";

    return (
        <>
            <Theme theme="g100">
                <footer>
                    <FlexGrid className="footer-layout">
                        <Row>
                            <Column>
                                <OrderedList>
                                    <li className="footer-item-layout">
                                        <a href="/" className="footer-link-layout">{brandName}</a>
                                    </li>
                                    <li className="footer-item-layout">
                                        <a href="https://discord.gg/GMUdznKjv" className="footer-link-layout">Join Discord</a></li>
                                </OrderedList>
                            </Column>
                        </Row>
                    </FlexGrid>
                </footer>
            </Theme>
        </>
    );
}