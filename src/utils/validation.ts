import { Props } from '../block';

const validation: (field: HTMLInputElement, props: Props) => boolean | undefined = (field: HTMLInputElement, props: Props) => {
    const {
        name,
        value,
        classList
    } = field;
    if (!name || undefined) return;
    const re: RegExp = /^\s*$/;
    if (re.test(value)) {
        console.log(props[name]);
        props[name].setProps({
            inputClass: classList + ' error',
            inputValue: value,
            inputInvalid: 'it can\'t be empty'
        });
        return false;
    }
    if (name === 'first_name' || name === 'second_name') {
        if (!nameValidation(value)) {
            props[name].setProps({
                inputClass: 'error',
                inputValue: value,
                inputInvalid: 'only latin'
            });
            return false;
        }
    }
    if (name === 'login') {
        if (!nameValidation(value, 6, 20)) {
            props[name].setProps({
                inputClass: 'error',
                inputValue: value,
                inputInvalid: 'only latin and at least 6 symbols'
            });
            return false;
        }
    }

    if (name === 'password' || name === 'passwordScd' || name === 'newPassword') {
        if (!passValidation(value, 8, 40)) {
            props[name].setProps({
                inputClass: 'error',
                inputValue: value,
                inputInvalid: 'only latin and at least 8 symbols'
            });
            return false;
        }
    }

    if (name === 'email') {
        if (!mailValidation(value)) {
            props[name].setProps({
                inputClass: 'error',
                inputValue: value,
                inputInvalid: 'it requires \'@\' and \'.\''
            });
            return false;
        }
    }

    if (name === 'phone') {
        if (!phoneValidation(value)) {
            props[name].setProps({
                inputClass: 'error',
                inputValue: value,
                inputInvalid: 'only digit and symbols'
            });
            return false;
        }
    }
    const form = field.closest('form') as HTMLFormElement
    const passwords = form?.querySelectorAll('input[name=password], input[name=newPassword], input[name=passwordScd]');
    if (passwords.length > 1 && field === passwords[passwords.length - 1]) {
        if (!passwordsEqualValidation((passwords[passwords.length - 2] as HTMLInputElement).value, (passwords[passwords.length - 1] as HTMLInputElement).value)) {
            props[name].setProps({
                inputClass: 'error',
                inputValue: value,
                inputInvalid: 'passwords are unequal'
            });
            return false;
        }
    }

    props[name].setProps({
        inputClass: classList,
        inputValue: value,
        inputInvalid: ''
    });
    return true;
};

function mailValidation(email: string): boolean {
    const re: RegExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    return re.test(email);
}

function nameValidation(name: string, min: number = 0, max: number = 40): boolean {
    const re: RegExp = /^[a-zA-Z-._]+$/;
    return re.test(name) && name.length >= min && name.length <= max;
}

function passValidation(pass: string, min: number, max: number): boolean {
    return pass.length >= min && pass.length <= max;
}

function phoneValidation(phone: string): boolean {
    const re: RegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,15}(\s*)?$/;
    return re.test(phone);
}

function passwordsEqualValidation(password: string, passwordScd: string): boolean {
    return passwordScd === password;
}

export default validation;

