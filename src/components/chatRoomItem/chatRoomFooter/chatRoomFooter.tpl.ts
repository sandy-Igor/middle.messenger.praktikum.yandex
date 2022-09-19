export default `{{#each chat}}
    <li class="chat-list-element">
        <div class="room-box">
            <div class="room-box-content">
                <div class="room-avatar">
                    <img src="{{avatar}}" alt="avatar">
                </div>
                <div class="room-chat-info">
                    <div class="chatName">
                        <span>{{title}}</span>
                    </div>
                </div>
            </div>
            <div class="room-adds-box">
                    <div class="footer-chat-options"></div>
            </div>
        </div>
    </li>
{{/each}}`

