export function parseDate(mess: any) {
    const date = new Date(Date.parse(mess.time));
    mess.messageTime = `${date.getHours()}:${date.getMinutes()}`
    mess.messageDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
}