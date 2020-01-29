import methods from "../methods";

export default {
    tableRowsClassObject: (options, index) => {
        return [
            options.layout[index] && options.layout[index].width ? `w-${options.layout[index].width}` : '',
            options.layout[index] && options.layout[index]['width-sm'] ? `sm:w-${options.layout[index]['width-sm']}` : '',
            {'first:pl-6 text-left justify-start': (options.layout[index] && options.layout[index].left)}
        ]
    },

    sort: (items, key, order) => {
        const _items = [...items];
        return _items.sort((itemA, itemB) => {
            if (isNaN(methods.getNested(itemA, key))) {
                if (order === 'DESC')
                    return ('' + methods.getNested(itemA, key)).localeCompare(methods.getNested(itemB, key));
                else
                    return ('' + methods.getNested(itemB, key)).localeCompare(methods.getNested(itemA, key));

            } else {
                if (order === 'DESC')
                    return (methods.getNested(itemA, key) - methods.getNested(itemB, key));
                else
                    return (methods.getNested(itemB, key) - methods.getNested(itemA, key));
            }
        })
    }
};

