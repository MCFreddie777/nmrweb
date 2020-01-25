export default {
    capitalize: (string) => {
        return `${string[0].toUpperCase()}${string.substring(1)}`
    },

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
