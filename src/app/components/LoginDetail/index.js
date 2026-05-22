'use client';

import { Login } from "@carbon/icons-react";
import { Modal, TextInput, Button } from "@carbon/react";
import { useState } from "react";

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

    const NotLoggedIn = () => {
        return (
            <div className={rootClassName}>
                <Button
                    hasIconOnly={loginDetailBtnIconOnly}
                    iconDescription="View ID"
                    renderIcon={Login}
                    kind={loginDetailBtnKind}
                    onClick={openModal}>
                    Sign in
                </Button>
            </div>
        );
    }

    const LoggedIn = () => {
        return (
            <div className={rootClassName}>
                <Button
                    hasIconOnly={loginDetailBtnIconOnly}
                    iconDescription="View ID"
                    renderIcon={Login}
                    kind={loginDetailBtnKind}
                    onClick={openModal}>
                    View ID
                </Button>
                <Modal aria-label="Modal content" modalHeading="Add a custom domain" passiveModal open={open} onRequestClose={closeModal}>
                    <TextInput labelText="Tenant type" placeholder="Microsoft Entra External ID" disabled={true} readOnly={true} />
                </Modal>
            </div>
        );
    }

    return (
        <LoggedIn />
    );
}
