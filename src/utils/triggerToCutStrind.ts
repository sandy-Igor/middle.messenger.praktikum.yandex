const triggerToCutString: number = 15;
export const cutString = (str: string) => {
    if (str.length < triggerToCutString) {
        return str;
    }
    return str.substring(0, triggerToCutString - 3) + '...';
};