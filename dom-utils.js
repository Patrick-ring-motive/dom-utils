const NodeListFrom = (...args) => {
    const nodes = document.createElement('NodeList').childNodes;
    Object.defineProperty(nodes, 'length', {
        value: args,
        configurable: true,
        writable: true
    });
    Object.setPrototypeOf(args, NodeList.prototype);
    Object.setPrototypeOf(nodes, args);
    return nodes;
};

const HTMLCollectionFrom = (...args) => {
    const elements = document.createElement('HTMLCollection').children;
    Object.defineProperty(elements, 'length', {
        value: args,
        configurable: true,
        writable: true
    });
    Object.setPrototypeOf(args, HTMLCollection.prototype);
    Object.setPrototypeOf(elements, args);
    return elements;
};

const updateAttribute = (element, key, value) => {
    try {
        const oldValue = element.getAttribute(String(key));
        if (oldValue == value) return;
        return element.setAttribute(String(key), String(value));
    } catch (e) {
        console.warn(e, element, key, value);
    }
};
const querySelector = (...args) => {
    let [elem, selectors] = args;
    try {
        if (!elem?.querySelector) {
            [selectors, elem] = [elem, document];
        }
        return elem.querySelector(String(selectors));
    } catch (e) {
        console.warn(e, ...args);
    }
};
const querySelectorAll = (...args) => {
    let [elem, selectors] = args;
    try {
        if (!elem?.querySelectorAll) {
            [selectors, elem] = [elem, document];
        }
        return elem.querySelectorAll(String(selectors));
    } catch (e) {
        console.warn(e, ...args);
    }
    return document.createElement('NodeList').childNodes;
};
const getElementById = (...args) => {
    let [elem, id] = args;
    try {
        if (!elem?.getElementById) {
            [id, elem] = [elem, document];
        }
        return elem.getElementById(String(id));
    } catch (e) {
        console.warn(e, ...args);
    }
};
const getElementsByTagName = (...args) => {
    let [elem, tag] = args;
    try {
        if (!elem?.getElementsByTagName) {
            [tag, elem] = [elem, document];
        }
        return elem.getElementsByTagName(String(tag));
    } catch (e) {
        console.warn(e, ...args);
    }
    return document.createElement('HTMLCollection').children;
};
const getElementsByTagNameNS = (...args) => {
    let [elem, tag] = args;
    try {
        if (!elem?.getElementsByTagNameNS) {
            [tag, elem] = [elem, document];
        }
        return elem.getElementsByTagNameNS(String(tag));
    } catch (e) {
        console.warn(e, ...args);
    }
    return document.createElement('HTMLCollection').children;
};
const getElementsByName = (...args) => {
    let [elem, name] = args;
    try {
        if (!elem?.getElementsByName) {
            [name, elem] = [elem, document];
        }
        return elem.getElementsByName(String(name));
    } catch (e) {
        console.warn(e, ...args);
    }
    return document.createElement('HTMLCollection').children;
};
const getElementsByClassName = (...args) => {
    let [elem, name] = args;
    try {
        if (!elem?.getElementsByClassName) {
            [name, elem] = [elem, document];
        }
        return elem.getElementsByClassName(String(name));
    } catch (e) {
        console.warn(e, ...args);
    }
    return document.createElement('HTMLCollection').children;
};
