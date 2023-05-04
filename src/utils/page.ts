export const totalButtons = (totalCount: number, limit: number): number => {
    return Math.ceil(totalCount / limit);
}

export const pages = (pages: number): number[] => {
    const result: number[] = []
    for (let i = 0; i < pages; i++) {
        result.push(i + 1);
    }
    return result;
}
