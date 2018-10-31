export declare type CreateImage = (width: number, height: number, data?: Uint8ClampedArray) => ImageData;
export declare const CreateImageFactory: (fill?: number[] | Uint8ClampedArray, channels?: number) => CreateImage;
export declare const createImage: CreateImage;
