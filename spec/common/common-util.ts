export default class CommonUtil {
    public static removePropsItem(props: any, items: Array<string>) {
        let propsCopy = {...props}
        for (let itemIndex in items) {
            let item = items[itemIndex]
            if (propsCopy && propsCopy.hasOwnProperty(item)) {
                delete propsCopy[item]

            }
        }
        return propsCopy
    }
}