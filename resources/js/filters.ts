export default {
    capitalize: function (value: string) {
        if (!value) return '';
        value = value.toString();
        return `${value[0].toUpperCase()}${value.substring(1)}`
    }
};
