export interface Length {
    id: string;
    name: string;
}

interface IObjectKeys {
    [key: string]: string | number | undefined;
}

export interface LengthTypes extends IObjectKeys {
    id: string;
    value: number;
}