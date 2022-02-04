import './AvatarItem.css'
function AvatarItem(props){
    const { avatar,onClick } = props
    return (
        <div className="AvatarItem">
            <img src={avatar.thumbnailUrl} onClick={()=>{onClick(avatar)}}/>
            <h4>{avatar.title}</h4>
        </div>
    );
}
export default AvatarItem;