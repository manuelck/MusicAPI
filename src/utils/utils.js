const preventDuplicates = (currentArray, newArray) => {
    const uniqueValues = new Set([...currentArray, ...newArray]);
    return Array.from(uniqueValues);
};

module.exports = { preventDuplicates };