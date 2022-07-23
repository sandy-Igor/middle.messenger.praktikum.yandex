import profile from "./changePassword.hbs"
import avatarIcon from "../../../static/images/avatar-png-icon.png"
import tpl from "../../components/profileTpl/profileTpl"

const data = {
    avatarIcon: avatarIcon,
    button: true,
    buttonType: "buttonSave",
    btnValue: "Save",
    input: {
        previous:{
            label: "previous password",
            inputType: "password",
            inputId: "*****"
        },
        new:{
            label: "new password",
            inputType: "paswword",
            inputId: "******",
        },
        repeat:{
            label: "repeat password",
            inputType: "password",
            inputId: "********"
        },

    }

}

const changePassPage = () => {
    return profile(data)
}

export default changePassPage;