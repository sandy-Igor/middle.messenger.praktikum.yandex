import * as Handlebars from "handlebars";
import chatRoom from "./chatRoomItem.hbs"
import "./chatRoomItem.scss"

Handlebars.registerPartial("chatRoomItem", chatRoom);


export default (props) => {
    return chatRoom(props);
}

