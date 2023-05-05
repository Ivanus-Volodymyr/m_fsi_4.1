export const totalButtons = (totalCount: number, limit: number): number => {
    return Math.ceil(totalCount / limit);
}

export const pages = (pages: number, currentPage: number): number[] => {
    const result: number[] = []
    if (currentPage > 3) {
        result.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2);
        return result;
    }
    if (currentPage > 2) {
        result.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2);
        return result
    }
    if (currentPage > 1) {
        result.push(currentPage - 1, currentPage, currentPage + 1, currentPage + 2, currentPage + 3);
        return result
    }
    if (currentPage === 1) {
        result.push(currentPage, currentPage + 1, currentPage + 2, currentPage + 3, currentPage + 4);
        return result
    }
    return result
}
