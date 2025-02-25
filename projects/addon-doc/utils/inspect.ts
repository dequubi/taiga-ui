function inspectArray(array: readonly unknown[], depth: number): string {
    if (depth === 0) {
        return '[…]';
    }

    let result = '';
    let first = true;

    for (let index = 0; index < array.length; index++) {
        if (first) {
            first = false;
        } else {
            result += ', ';
        }

        result += index in array ? tuiInspectAny(array[index], depth - 1) : 'empty';
    }

    return `[${result}]`;
}

function inspectObject(object: Record<string, unknown>, depth: number): string {
    if (depth === 0) {
        return '{…}';
    }

    let result = '';

    let first = true;

    for (const key in object) {
        if (!object.hasOwnProperty(key)) {
            continue;
        }

        if (first) {
            first = false;
        } else {
            result += ', ';
        }

        result += `${key}: ${tuiInspectAny(object[key], depth - 1)}`;
    }

    return `{${result}}`;
}

/**
 * Returns readable JS entity
 * @param data
 * @param depth
 * @return readable JS entity
 */
export function tuiInspectAny<T>(data: T, depth: number): string {
    if (data === null) {
        return 'null';
    }

    switch (typeof data) {
        case 'boolean':
        case 'function':
        case 'number':
        case 'undefined':
            return String(data);
        case 'string':
            return `'${data}'`;
        default:
            break;
    }

    if (data instanceof RegExp) {
        return String(data);
    }

    if (Array.isArray(data)) {
        return inspectArray(data, depth);
    }

    return inspectObject(data as unknown as Record<string, unknown>, depth);
}
