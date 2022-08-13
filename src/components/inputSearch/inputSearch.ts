import inputSearch from "./inputSearch.hbs"
import "./inputSearch.scss"
import Block from "../../block";


export default class InputSearch extends Block {
    addEvents() {
        this.element.querySelectorAll("input").forEach(inp => {
            inp.addEventListener("input", this.props.events.input);
        })
    }

    addAttribute() {

        const {
            attr = {
                class: "input-search-wrapper"
            }
        } = this.props;
        const _attr = attr as Record<string, any>

        if (attr) {
            Object.entries(_attr).forEach(([key, value]) => {
                this.element.setAttribute(key, value);
            });
        }
    }

        render()
        {
            return this.compile(inputSearch, this.props);
        }
    }