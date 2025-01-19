const chunkArray = (arr: IComic[], size: number): IComic[][] => {
    const result: IComic[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

export default chunkArray;
