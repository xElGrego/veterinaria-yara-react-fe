export function bytesToKilobytes(bytes: number): number {
    return bytes / 1024;
}

export function roundToTwoDecimal(value: number): number {
    return Number(value.toFixed(2));
}

export function convertirBytes(bytes: number): string {
    if (bytes < 1024) {
        return bytes + " B";
    } else if (bytes < 1024 * 1024) {
        const kilobytes = bytes / 1024;
        return kilobytes.toFixed(2) + " KB";
    } else if (bytes < 1024 * 1024 * 1024) {
        const megabytes = bytes / (1024 * 1024);
        return megabytes.toFixed(2) + " MB";
    } else {
        const gigabytes = bytes / (1024 * 1024 * 1024);
        return gigabytes.toFixed(2) + " GB";
    }
}

export const rellenarCeros = (number: number, width?: number) => {
    const numberOutput = Math.abs(number);
    const length = number.toString().length;
    const zero = "0";

    if (width === undefined) width = 3;

    if (width <= length) {
        return number;
    } else {
        if (number < 0) {
            return "-" + zero.repeat(width - length) + numberOutput.toString();
        } else {
            return zero.repeat(width - length) + numberOutput.toString();
        }
    }
};
