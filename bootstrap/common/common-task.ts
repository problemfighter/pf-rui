export default class CommonTask {

    public static getSizeClass(size: any, classPrefix: string = "btn-") {
        size = String(size)
        let sizeClass = ""
        if (size === "large") {
            sizeClass = classPrefix + "lg"
        } else if (size === "small") {
            sizeClass = classPrefix + "sm"
        }
        return sizeClass
    }

}