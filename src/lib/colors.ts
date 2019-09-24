export const hexToRGB = (hex: string): { r: number, g: number, b:number } => {
    const regex = /^#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/;
    
    const match = hex.match(regex);
    if (match === null) {
        throw new Error("Not a valid hex value!");
    }
    // const r = parseInt(match[1], 16);
    // const g = parseInt(match[2], 16);
    // const b = parseInt(match[3], 16);
    const [r, g, b] = (match as string[]).slice(1, 4).map(c => parseInt(c, 16));
    return { r, g, b }
}
