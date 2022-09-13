export type Indexed<T = unknown> = {
    [key in string]: T
}

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
    for (let p in rhs) {
        if (!rhs.hasOwnProperty(p)) {
            continue;
        }
        try {
            if (rhs[p] === typeof Object) {
                rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
            } else {
                lhs[p] = rhs[p];
            }
        } catch (e) {
            lhs[p] = rhs[p];
        }
    }
    return lhs;
}

const set = (obj: unknown, path: string, val: unknown) => {
    const keys = path.split(".");
    const lastKey = keys.pop();
    const lastObj = keys.reduce((obj: any, key) => obj[key] = obj[key] || {}, obj);
    lastObj[(lastKey as string)] = val;
};


export default set;