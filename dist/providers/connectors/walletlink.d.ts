import { IAbstractConnectorOptions } from "../../helpers";
export interface IWalletLinkConnectorOptions extends IAbstractConnectorOptions {
    appName: string;
    appLogoUrl?: string;
    darkMode?: boolean;
    walletLinkUrl?: string;
    jsonRpcUrl: string;
    chainId?: number;
}
declare const ConnectToWalletLink: (WalletLink: any, opts: IWalletLinkConnectorOptions) => Promise<unknown>;
export default ConnectToWalletLink;
//# sourceMappingURL=walletlink.d.ts.map