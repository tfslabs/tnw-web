'use client';

import { Login } from "@carbon/icons-react";
import { ComposedModal, ModalHeader, ModalBody, Button } from "@carbon/react";
import { useState } from "react";

/*
In OIDC, some claims that need to be displayed to let user understand more about their account in AAD B2C
- iss (Issuer)
- 
*/

export function LoginDetail(props) {
    // Properties declaration
    let rootClassName = props.rootClassName;
    let loginDetailBtnIconOnly = props.loginDetailBtnIconOnly;
    let loginDetailBtnKind = props.loginDetailBtnKind;

    // Properties finallization
    if (rootClassName == null) {
        rootClassName = "";
    }

    if (loginDetailBtnIconOnly == null) {
        loginDetailBtnIconOnly = false;
    }

    if (loginDetailBtnKind == null) {
        loginDetailBtnKind = "primary";
    }

    const [open, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(false);
    }

    const openModal = () => {
        setOpen(true);
    }

    return (
        <div className={rootClassName}>
            <Button 
                hasIconOnly={loginDetailBtnIconOnly} 
                iconDescription="Check your ID"
                renderIcon={Login}
                kind={loginDetailBtnKind}
                onClick={openModal}>
                Check your ID
            </Button>
            <ComposedModal open={open} onClose={closeModal}>
                <ModalHeader title="You have been successfully signed out" />
                <ModalBody />
            </ComposedModal>    
        </div>
    );
}
