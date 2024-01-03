import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ModalProps } from '@mui/material';
import { ReactElement } from 'react';

export declare const CedeOnboardingModal: (props: CedeOnboardingModalProps) => JSX_2.Element;

declare type CedeOnboardingModalProps = {
    open: ModalProps["open"];
    exit: VoidFunction;
    onClose?: ModalProps["onClose"];
};

export declare const CedeSend: (widgetProps: SendWidgetProps) => JSX_2.Element;

declare type InternalChainId = string;

declare type Network = {
    name: string;
    network: InternalChainId;
    chainId: number; // chain id in decimal format, if possible
};

export declare type SendWidgetConfig = {
    tokenSymbol?: TokenSymbol;
    network?: Network;
    address?: string;
    amount?: string;
};

declare type SendWidgetProps = {
    title?: string;
    description?: string;
    defaultScreen?: "custom" | "default";
    config?: SendWidgetConfig;
    logo?: ReactElement | null;
    navbarLogo?: ReactElement | null;
    theme?: SendWidgetTheme;
};

declare type SendWidgetTheme = {
    logoTheme?: "dark" | "light";
    fontFamily?: string;
    borderRadius?: number;
    width?: string;
    primaryColor?: string;
    primaryTextColor?: string;
    secondaryTextColor?: string;
    borderColor?: string;
    errorColor?: string;
    warningColor?: string;
    secondaryColor?: string;
    accentColor?: string;
    buttonTextColor?: string;
    deactivateButtonColor?: string;
};

declare type TokenSymbol = string;

export { }
