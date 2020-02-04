export default {
    getNested: (theObject: any, path: string, separator?: string): number | string => {
        try {
            separator = separator || '.';
            return path.replace('[', separator).replace(']', '').split(separator).reduce(
                (obj, property) => {
                    // @ts-ignore
                    return obj[property];
                },
                theObject
            );
        } catch (err) {
            return null as unknown as string;
        }
    }
};
