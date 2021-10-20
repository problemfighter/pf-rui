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

    public static addId(props: any) {
        let id = {}
        if (props.id) {
            id = {id: props.id}
        }
        return id
    }

    public static addClassName(props: any, className = "") {
        if (props.className) {
            className += " " + props.className
            className = className.trim()
        }
        return className
    }
}