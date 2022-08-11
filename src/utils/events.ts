import {Props} from "../block";
import validation from "./validation";


// export const formSubmitEvent: (e: Event) => void = (e: Event): void => {
//     e.preventDefault()
//     document.querySelectorAll("input").forEach(inp => {
//         console.log(inp);
//         console.log(validation(inp));
//     })
// }

export function formSubmitEvent(e: Event, props: Props) {
    e.preventDefault()
    document.querySelectorAll("input").forEach(inp => {

        if (!validation(inp, props)) {
            Object.values(props).forEach(prop => {
                if (prop.element?.querySelector("input") === inp) {
                    prop.setProps({
                        inputInvalid: "Error"
                    })
                }
            })
        }
    })
}