export default `{{#each operation}}
    <div class="chat-operation-elem">
        <img class="operation-image {{rotation}}" src="{{operationImage}}" alt="{{imgDsc}}">
        <span class="operation-value">{{operationDesc}}</span>
    </div>
    {{/each}}`
