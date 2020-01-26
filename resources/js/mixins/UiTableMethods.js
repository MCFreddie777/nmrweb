export default {
    tableRowsClassObject: (options, index) => {
        return [
            options.layout[index] && options.layout[index].width ? `w-${options.layout[index].width}` : '',
            options.layout[index] && options.layout[index]['width-sm'] ? `sm:w-${options.layout[index]['width-sm']}` : '',
            {'first:pl-6 text-left justify-start': (options.layout[index] && options.layout[index].left)}
        ]
    }
};

