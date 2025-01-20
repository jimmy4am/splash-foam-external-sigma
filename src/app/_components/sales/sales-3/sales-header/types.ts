export type CountDownType = {
    hours: number;
    minutes: number;
    seconds: number;
};

export type CountDownKeysType = keyof CountDownType;

export enum CountDownMessages {
    Expired = "Offer Expired... Requesting Extension!",
    Granted = "Extension Granted - You've Got 5 Extra Minutes"
}