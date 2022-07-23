import profile from "./profile.hbs"
import avatarIcon from "../../../static/images/avatar-png-icon.png"
import tpl from "../../components/profileTpl/profileTpl"


const data = {
    avatarIcon: avatarIcon,
    span: {
      changeData: {
          spanClass: "spanBlue",
          spanVal: "Change data"
      },
        changePassword: {
            spanClass: "spanBlue",
            spanVal: "Change password"
        },
        exit: {
            spanClass: "spanRed",
            spanVal: "Exit"
        },
    },
    // button: true,
    // buttonType: "buttonSave",
    // btnValue: "Save",
    input: {
        mail:{
            label: "Mail",
            inputType: "text",
            inputId: "chat@nechat.ru"
        },
        login:{
            label: "Login",
            inputType: "text",
            inputId: "Jorik",
        },
        name:{
            label: "Name",
            inputType: "text",
            inputId: "Evgeniy"
        },
        surname:{
            label: "Surname",
            inputType: "text",
            inputId: "Evgenev"
        },
        chatName:{
            label: "Chat name",
            inputType: "text",
            inputId: "jorikEvgenev"
        },
        phone:{
            label: "Phone",
            inputType: "text",
            inputId: "+7-909-09-09-090"
        }
    }

}

const profilePage = () => {
    return profile(data)
}

export default profilePage;