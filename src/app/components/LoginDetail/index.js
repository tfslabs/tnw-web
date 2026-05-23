'use client';

import { Login } from "@carbon/icons-react";
import { Modal, TextInput, Button } from "@carbon/react";
import { useState } from "react";
import { useMsal } from '@azure/msal-react';

import { loginRequest } from '@/authConfig';

export function LoginDetail(props) {
    // Properties declaration
    let rootClassName = props.rootClassName || "";
    let loginDetailBtnIconOnly = props.loginDetailBtnIconOnly || false;
    let loginDetailBtnKind = props.loginDetailBtnKind || "primary";
    let idpFriendlyName = props.idpFriendlyName || "Microsoft Entra External ID";

    // States for modal
    const [open, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(false);
    }

    const openModal = () => {
        setOpen(true);
    }

    const { instance, accounts } = useMsal();
    const activeAccount = instance.getActiveAccount() || ((accounts.length > 0 && accounts[0] != null) ? accounts[0] : null);

    const NotLoggedIn = () => {
        const handleSignIn = () => {
            instance.loginRedirect(loginRequest).catch((e) => console.error(e));
        }

        return (
            <>
                <Button
                    hasIconOnly={loginDetailBtnIconOnly}
                    iconDescription="Sign in"
                    renderIcon={Login}
                    kind={loginDetailBtnKind}
                    onClick={handleSignIn}>
                    Sign in
                </Button>
            </>
        );
    }

    const LoggedIn = () => {
        const handleLogoutRedirect = () => {
            instance.logoutRedirect().catch((error) => console.log(error));
        };

        return (
            <>
                <Button
                    hasIconOnly={loginDetailBtnIconOnly}
                    iconDescription="View ID"
                    renderIcon={Login}
                    kind={loginDetailBtnKind}
                    onClick={openModal}>
                    View ID
                </Button>
                <Modal
                    danger={true}
                    aria-label="Modal content"
                    modalHeading="User claims"
                    primaryButtonText="Log out"
                    secondaryButtonText="Close Diaglog"
                    open={open}
                    onRequestClose={closeModal}
                    onRequestSubmit={handleLogoutRedirect}>
                    <TextInput labelText="Name" defaultValue={activeAccount?.name} readOnly={true} />
                    <TextInput labelText="User Principal Name" defaultValue={activeAccount?.username} readOnly={true} />
                    <TextInput labelText="Tenant ID" defaultValue={activeAccount?.tenantId} readOnly={true} />
                    <TextInput labelText="IdP" defaultValue={idpFriendlyName} readOnly={true} />
                </Modal>
            </>
        );
    }

    return (
        <div className={rootClassName}>
            {(activeAccount != null) ? <LoggedIn /> : <NotLoggedIn />}
        </div>
    );
}
