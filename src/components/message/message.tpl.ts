export default `{{#each messages}}
    <div class="message-item {{sentMsg}}">
{{#if image}}
    <img src="{{file}}" alt="#">
    <span class="span-img-time">{{messageTime}}</span>
{{else}}
    {{content}}
    <span class="span-message-time">{{messageTime}}</span>
{{/if}}
    </div>
{{/each}}`

