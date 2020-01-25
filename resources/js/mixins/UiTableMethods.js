export default {
    tableRowsClassObject: (options, index) => {
        return [
            options.layout[index] && options.layout[index].width ? `w-${options.layout[index].width}` : '',
            {'first:pl-6 text-left justify-start': (options.layout[index] && options.layout[index].left)}
        ]
    }
};

