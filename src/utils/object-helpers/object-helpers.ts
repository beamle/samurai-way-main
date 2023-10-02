export const updateObjectInArray = (items: any, itemId: string, objPropName: any, newObjProps: any) => {
    return items.map((el: any) => el[objPropName] === itemId ? {...el, ...newObjProps} : el)
}