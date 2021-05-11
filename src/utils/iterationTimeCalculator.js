
import {timing} from "../enums/data";


export default function calculateDuration (val) {
    let newTimeDuration=timing.DURATION;
    return newTimeDuration+(4*(100-val));
}
