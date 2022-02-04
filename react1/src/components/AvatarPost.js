import './AvatarPost.css';
function AvatarPosts(prop){
    const { avatar, onBgClick } = prop
    return(
        <div className="avatar-post">
            <div className="avatar-post-bg" onClick={onBgClick}>
                <div className="avatar-post-content">
                    <img src={avatar.thumbnailUrl}/>
                    <h4>{avatar.title}</h4>
                </div>
            </div>
        </div>
    );
}
export default AvatarPosts;