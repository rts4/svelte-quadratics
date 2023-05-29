export function roots(a: number, b: number, c: number): [number, number]|null {
    const discrim = Math.pow(b, 2) - (4 * a * c);
    if (discrim < 0) return null;
    
    const pos = ((b * -1) + Math.sqrt(discrim)) / (2 * a);
    const neg = ((b * -1) - Math.sqrt(discrim)) / (2 * a);

    if (pos === 0 || neg === 0) return null;

    return [pos, neg];
}

export function vertex(a: number, b: number, c: number): [number, number]|null {
    const x = (b * -1) / (2 * a);
    const y = (a * (Math.pow(x, 2))) + (b * x) + c;

    if (x === 0 || y === 0) return null

    return [x, y];
}

export function roundTwo(i: number) {
    return +(Math.round(Number(i.toString() + "e+2"))  + "e-2");
}