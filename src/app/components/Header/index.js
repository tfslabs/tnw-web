import { 
    Header as CarbonHeader, 
    HeaderName, 
    HeaderGlobalBar, 
    SkipToContent 
} from '@carbon/react';

export function Header(props) {
    let brandName = props.brandName || "IBM";
    let productUsage = props.productUsage || "Quantum";
    let headerCTAcontents = props.children || (<></>);

    return (
        <>
            <CarbonHeader aria-label="Website Header">
                <SkipToContent />
                <HeaderName href="#" prefix={brandName}>| {productUsage}</HeaderName>
                <HeaderGlobalBar>
                    {headerCTAcontents}
                </HeaderGlobalBar>
            </CarbonHeader>
        </>
    )
};