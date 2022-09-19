export default `{{#each chat}}
    <li class="chat-list-element">
        <div class="room-box {{selected}}">
            <div class="room-box-content">
                <div class="room-avatar">
                    <img src="{{avatar}}" alt="avatar">
                </div>
                <div class="room-chat-info">
                    <div class="chatName">
                        <span>{{title}}</span>
                    </div>
                    {{#if last_message}}
                        <div class="lastMsg">
                            {{#if userMsg}}
                                <span class="userMsg">You:</span>
                            {{/if}}
                            <span>{{last_message.content}}</span>
                        </div>
                    {{/if}}
                </div>
            </div>
            <div class="room-adds-box">
                {{#if last_message.messageTime}}
                    <div class="dateMsg">{{last_message.messageTime}}</div>
                {{/if}}
                {{#if unread_count}}
                    <div class="newMsg">{{unread_count}}</div>
                {{/if}}

            </div>
        </div>
    </li>
{{/each}}
`
