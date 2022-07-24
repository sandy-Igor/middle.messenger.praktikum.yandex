import chat from "./chat.hbs"
import "./chat.css"
import avatar from "/static/images/avatar-chat.png"
import clip from "/static/images/clip.png"
import chatImage from "/static/images/Kenobi-why-obi-wan.webp"
import chatRoomItem from "../../components/chatRoomItem/chatRoomItem";
import inputSearch from "../../components/inputSearch/inputSearch"
import button from "../../components/button/button";
import labelInput from "../../components/inputLabel/inputLabel"
import arrow from "../../components/arrowButton/arrowButton"
import span from "../../components/span/span"
import message from "../../components/message/message"


const cutString = (str) => {
    if (str.length < 54) {
        return str;
    }
    return str.substring(0, 51) + '...';
}

const data = {
    spanValue: "Profile",
    inputSearchPlaceholder: "Search",
    clip: clip,
    inputChat: "chat-input__msg",
    inputMsgPlaceholder: "message",
    directionRight: "directionRight blue-edit",
    avatarImage: avatar,
    chatName: "Darth Vader",
    chats: [
        {avatarImage: avatar,
            chatName: "Luke",
            userMsg: true,
            lastMsg: cutString("May the force be with you"),
            dateMsg: "11:25",
            },
        {avatarImage: avatar,
            chatName: "Darth Vader",
            userMsg: true,
            lastMsg: cutString("I’ve been waiting for you, Obi-Wan. We meet again. We meet again. We meet again."),
            dateMsg: "10:55",
            selected: "selected"
            },
        {avatarImage: avatar,
            chatName: "Obi-Wan",
            userMsg: true,
            lastMsg: cutString("What have you become"),
            dateMsg: "12:38",
            newMsg: 5},
        {avatarImage: avatar,
            chatName: "Han Solo",
            userMsg: true,
            lastMsg: cutString("Women always figure out the truth"),
            dateMsg: "10:55",
            },
        {avatarImage: avatar,
            chatName: "Yoda",
            userMsg: false,
            lastMsg: cutString("Judge me by my size, do you?"),
            dateMsg: "10:55",
            },
        {avatarImage: avatar,
            chatName: "C-3PO",
            userMsg: false,
            lastMsg: cutString("We seem to be made to suffer. It's our lot in life."),
            dateMsg: "10:55",
            newMsg: 2},
        {avatarImage: avatar,
            chatName: "Princess Leia",
            userMsg: false,
            lastMsg: cutString("Help me, Obi-Wan Kenobi. You’re my only hope"),
            dateMsg: "10:55",
            newMsg: 3},
        {avatarImage: avatar,
            chatName: "Anakin Skywalker",
            userMsg: false,
            lastMsg: cutString("Someday I will be the most powerful Jedi ever"),
            dateMsg: "10:55",
            },
        {avatarImage: avatar,
            chatName: "Padmé",
            userMsg: false,
            lastMsg: cutString("So this is how liberty dies...with thunderous applause"),
            dateMsg: "10:55",
            newMsg: 5},
        {avatarImage: avatar,
            chatName: "Qui-Gon Jinn",
            userMsg: true,
            lastMsg: cutString("Remember, Your focus determines your reality"),
            dateMsg: "18:12",
            },
        {avatarImage: avatar,
            chatName: "Count Dooku",
            userMsg: true,
            lastMsg: cutString("I sense great fear in you, Skywalker. You have hate. You have anger."),
            dateMsg: "12:38",
            },
    ],
    msg: [
        {
            messageContent: "Have you come to destroy me Obi-Wan?",
            messageOwner: "",
            messageTime: "22:47"
        },
        {
            messageContent: "I will do what I must",
            messageOwner: "sent-msg",
            messageTime: "22:48"
        },
        {image: {
            imgSource: chatImage
            },
            messageTime: "22:50"
        }

    ]

}

const chatPage = () => {
    return chat(data)
}

export default chatPage;
