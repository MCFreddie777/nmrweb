import methods from "../methods";

export default {
    tableRowsClassObject: (options: any, index: number) => {
        return [
            options.layout[index] && options.layout[index].width ? `w-${options.layout[index].width}` : '',
            options.layout[index] && options.layout[index]['width-sm'] ? `sm:w-${options.layout[index]['width-sm']}` : '',
            {'first:pl-6 text-left justify-start': (options.layout[index] && options.layout[index].left)}
        ]
    },

    // Todo: type
    sort: (items: any, key: string, order: 'ASC' | 'DESC') => {
        const _items = [...items];
        return _items.sort((itemA: any, itemB: any) => {
            if (isNaN(<number>methods.getNested(itemA, key))) {
                if (order === 'DESC')
                    return ('' + methods.getNested(itemA, key)).localeCompare(<string>methods.getNested(itemB, key));
                else
                    return ('' + methods.getNested(itemB, key)).localeCompare(<string>methods.getNested(itemA, key));
            } else {
                if (order === 'DESC')
                    return (<number>methods.getNested(itemA, key) - <number>methods.getNested(itemB, key));
                else
                    return (<number>methods.getNested(itemB, key) - <number>methods.getNested(itemA, key));
            }
        });
    },
};
