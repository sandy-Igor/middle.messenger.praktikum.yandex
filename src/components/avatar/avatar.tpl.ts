export default `<form>
<label class="box-avatar-changer">
    <input id="avatar" type="file" name="avatar" accept="image/*" {{{disabled}}}/>
    <img src="{{srcAvatar}}" alt="avatar">
    <span class="avatarChanger">Change avatar</span>
    <input type="submit">
</label>
</form>
`
