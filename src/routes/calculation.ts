export function roots(a: number, b: number, c: number): [number, number]|null {
    let discrim = Math.pow(b, 2) - (4 * a * c);
    if (discrim < 0) return null;
    
    let pos = ((b * -1) + Math.sqrt(discrim)) / (2 * a);
    let neg = ((b * -1) - Math.sqrt(discrim)) / (2 * a);

    return [pos, neg];
}

export function vertex(a: number, b: number): number {
    let vertex = (b * -1) / (2 * a);
    return vertex;
}