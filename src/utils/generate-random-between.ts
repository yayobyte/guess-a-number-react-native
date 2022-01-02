export const generateRandomBetween = (min: number, max: number, exclude: number) :number => {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);
    const isMinimumDifference = (maximum - minimum) === 2;
    const random = isMinimumDifference ? minimum + 1 : Math.floor(Math.random() * (maximum - minimum)) + minimum;
    if (random === exclude && !isMinimumDifference) {
        return generateRandomBetween(minimum, maximum, exclude);
    }
    return random
}
