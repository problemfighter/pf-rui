import CommonUtil from "../../spec/common/common-util";

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

    public static getSizeTypeClass(type: any, klass = "") {
        type = String(type)
        switch (type) {
            case "large":
                klass += "-lg"
                break
            case "small":
                klass += "-sm"
                break
            case "medium":
                klass += "-md"
                break
            case "extraLarge":
                klass += "-xl"
                break
            case "tooExtraLarge":
                klass += "-xxl"
                break
        }
        return klass
    }

}