export default {
    getNested: (theObject, path, separator) => {
        try {
            separator = separator || '.';

            return path.replace('[', separator).replace(']', '').split(separator).reduce(
                function (obj, property) {
                    return obj[property];
                }, theObject
            );

        } catch (err) {
            return undefined;
        }
    },
};
