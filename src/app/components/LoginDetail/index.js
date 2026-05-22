'use client';

import { Login } from "@carbon/icons-react";
import { Modal, TextInput, Button } from "@carbon/react";
import { useState } from "react";
import { useMsal } from '@azure/msal-react';

import { loginRequest } from '@/authConfig';
import { TimestampParse } from '@/utils/TimestampParse';

export function LoginDetail(props) {
    // Properties declaration
    let rootClassName = props.rootClassName;
    let loginDetailBtnIconOnly = props.loginDetailBtnIconOnly;
    let loginDetailBtnKind = props.loginDetailBtnKind;
    let idpFriendlyName = props.idpFriendlyName;

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

    if (idpFriendlyName == null) {
        idpFriendlyName = "Microsoft Entra External ID";
    }

    const [open, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(false);
    }

    const openModal = () => {
        setOpen(true);
    }

    const { instance, accounts } = useMsal();

    const NotLoggedIn = () => {
        const handleSignIn = () => {
            instance.loginRedirect(loginRequest).catch((e) => console.error(e));
        }

        return (
            <div className={rootClassName}>
                <Button
                    hasIconOnly={loginDetailBtnIconOnly}
                    iconDescription="Sign in"
                    renderIcon={Login}
                    kind={loginDetailBtnKind}
                    onClick={handleSignIn}>
                    Sign in
                </Button>
            </div>
        );
    }

    const LoggedIn = () => {
        const handleLogoutRedirect = () => {
            instance.logoutRedirect().catch((error) => console.log(error));
        };

        const activeAccount = instance.getActiveAccount() || (accounts && accounts.length > 0 ? accounts[0] : null);
        const claims = (activeAccount && activeAccount.idTokenClaims) ? activeAccount.idTokenClaims : {};

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
                <Modal
                    danger={true}
                    aria-label="Modal content"
                    modalHeading="User claims"
                    primaryButtonText="Log out"
                    secondaryButtonText="Close Diaglog"
                    open={open}
                    onRequestClose={closeModal}
                    onRequestSubmit={handleLogoutRedirect}
                >
                    <TextInput labelText="Name" defaultValue={claims.name} readOnly={true} />
                    <TextInput labelText="User Principal Name" defaultValue={claims.preferred_username || claims.upn} readOnly={true} />
                    <TextInput labelText="Email" defaultValue={claims.email} readOnly={true} />
                    <TextInput labelText="Issue at" defaultValue={TimestampParse(claims.iat)} readOnly={true} />
                    <TextInput labelText="Expire at" defaultValue={TimestampParse(claims.exp)} readOnly={true} />
                    <TextInput labelText="IdP" defaultValue={idpFriendlyName + " " +  claims.ver} readOnly={true} />
                    <TextInput labelText="Sign-in with" defaultValue={claims.idp} readOnly={true} />
                </Modal>
            </div>
        );
    }

    const activeAccount = instance.getActiveAccount() || (accounts && accounts.length > 0 ? accounts[0] : null);
    const isAuthenticated = !!activeAccount;

    return (
        isAuthenticated ? <LoggedIn /> : <NotLoggedIn />
    );
}
