import { Header as CarbonHeader, HeaderName, HeaderGlobalBar, SkipToContent } from '@carbon/react';

import {LoginDetail} from "../LoginDetail";

export function Header(props) {
    let brandName = props.brandName;
    let productUsage = props.productUsage;
    
    if (brandName == null) {
        brandName = "IBM";
    }

    if (productUsage == null) {
        productUsage = "Quantum";
    }

    return (
        <>
            <CarbonHeader aria-label="Website Header">
                <SkipToContent />
                <HeaderName href="#" prefix={brandName}>| {productUsage}</HeaderName>
                <HeaderGlobalBar>
                    <LoginDetail
                        loginDetailBtnIconOnly={true}
                        loginDetailBtnKind="primary"
                    />
                </HeaderGlobalBar>
            </CarbonHeader>
        </>
    )
};