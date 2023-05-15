const isNullOrUndefined = (o) => {
    return o === null || o === undefined;
}

const RATIO = 2;

const spaceRatio = (space) => {
    return `${space * RATIO}px`;
}

const spacing = (top, right, bottom, left) => {
    const space = [];
    if (!isNullOrUndefined(top)) space.push(spaceRatio(top));
    if (!isNullOrUndefined(right)) space.push(spaceRatio(right));
    if (!isNullOrUndefined(bottom)) space.push(spaceRatio(bottom));
    if (!isNullOrUndefined(left)) space.push(spaceRatio(left));
    return space.join(' ');
}

export default spacing;