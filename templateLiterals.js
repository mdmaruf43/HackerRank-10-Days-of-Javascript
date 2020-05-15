function sides(literals, ...expressions) {
    const area = expressions[0];
    const perimeter = expressions[1];
    
    const d = Math.sqrt(perimeter * perimeter - 16 * area);
    
    const s1 = (perimeter + d) / 4;
    const s2 = area / s1;
    
    return [s1, s2].sort();
}