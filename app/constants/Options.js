import { Strings } from "./Strings"

export default class Options {
    static workoutTypeArray = [
        { id: 1, value: Strings.cardio },
        { id: 2, value: Strings.fullBody },
        { id: 3, value: Strings.upperBody },
        { id: 4, value: Strings.lowerBody },
        { id: 5, value: Strings.chest },
        { id: 6, value: Strings.arms },
        { id: 7, value: Strings.core },
        { id: 8, value: Strings.shoulders },
        { id: 9, value: Strings.back },
        { id: 10, value: Strings.legs },
    ]
    
    static workoutLevelArray = [
        { id: 1, value: Strings.beginner },
        { id: 2, value: Strings.intermediate },
        { id: 3, value: Strings.advanced },
    ]
    
    static equipmentArray = [
        { id: 1, value: Strings.withEquipment },
        { id: 2, value: Strings.withoutEquipment },
    ]
}