import { Props } from "../block";

const validation: (field: HTMLInputElement, props: Props) => boolean | undefined = (field: HTMLInputElement, props: Props) => {
    const {name, value} = field
    if (!name || undefined) return;
    const re: RegExp = /^\s*$/;
    if (re.test(value)) {
        props[name].setProps({inputInvalid: "it can't be empty"})
        return false
    }
    console.log(props[name])
    let validateRes: boolean = true
    if (name === "inputName" || name === "inputScdName") {
        if (!nameValidation(value)) {
            props[name].setProps({inputInvalid: "only latin"})
            return false
        }
    }
    if (name === "inputLogin") {
        if (!nameValidation(value, 6, 20)) {
            props[name].setProps({inputInvalid: "only latin and at least 6 symbols"})
            return false
        }
    }

    if (name === "inputPassword" || name === "inputPasswordScd") {
        validateRes = passValidation(value, 8, 40)
    }

    if (name === "inputMail") {
        validateRes = mailValidation(value)
    }

    if (name === "inputPhone") {
        validateRes = phoneValidation(value)
    }
    const passwords = Array.from(document.querySelectorAll("input[name=inputPassword], input[name=inputPasswordScd]"))
    if (!passwordsEqualValidation((passwords[passwords.length-2] as HTMLInputElement).value, (passwords[passwords.length-1] as HTMLInputElement).value)) {

        return false
    }
    props[name].setProps({inputInvalid: ""})
    return validateRes


}

function mailValidation(email: string): boolean {
    const re: RegExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
    return re.test(email)
}

function nameValidation(name: string, min: number = 0, max: number = 0): boolean {
    const re: RegExp = /^[a-zA-Z]+$/
    return re.test(name) && name.length >= min && name.length <= max
}

function passValidation(pass: string, min: number, max: number): boolean {
    return pass.length >= min && pass.length <= max
}

function phoneValidation(phone: string): boolean {
    const re: RegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/
    return re.test(phone)
}

function passwordsEqualValidation(password: string, passwordScd: string): boolean {
    return passwordScd === password
}

export default validation