const isWindow = typeof window !== 'undefined';
export const getScrollPos = () => (isWindow && window.pageYOffset) || (document && document.documentElement.scrollTop);
export const addPropToWindow = (prop, value) => {
    if (isWindow) {
        const key = prop.split('.').reduce((obj, k) => obj[k], window);
        key = value;
    }
}