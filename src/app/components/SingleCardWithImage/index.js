import { FlexGrid, Row, Column } from '@carbon/react';

import "./index.scss";

export function SingleCardWithImage(props) {
    // Properties declaration
    let rootClassName = props.rootClassName;
    let singleCardContent = props.children;
    let singleCardImageUrl = props.singleCardImageUrl;

    // Properties finallization
    if (rootClassName == null) {
        rootClassName = "";
    }

    if (singleCardContent == null) {
        singleCardContent = () => {
            <>
            </>
        }
    }

    if (singleCardImageUrl == null) {
        singleCardImageUrl = '';
    }

    return (
        <div className={rootClassName}>
            <FlexGrid>
                <Row>
                    <Column className="newservice-intro">
                        {singleCardContent}
                    </Column>
                    <Column>
                        <div 
                            className="newservice-background" 
                            style={
                                {
                                    backgroundImage: `url("${singleCardImageUrl}")`
                                }
                            }
                        />
                    </Column>
                </Row>
            </FlexGrid>
        </div>
    );
}