import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import AvatarItem from './components/AvatarItem';
import AvatarPosts from './components/AvatarPost';
import avatars from './data/avatars';
import { useState } from 'react';
import AppSearch from './components/AppSearch';

function App() {
  const [selectedAvatar, setselectedAvatar] = useState(null)
  const [searchText, setSearchText] = useState('')
  function onOpenClick(theavatar) {
    setselectedAvatar(theavatar)
  }
  function onCloseClick() {
    setselectedAvatar(null)
  }
  const avatarElements = avatars.filter((avatar) => {
    return avatar.title.includes(searchText)
  }).map((avatar, index) => {
    return <AvatarItem key={index} avatar={avatar} onClick={onOpenClick} />
  })
  let avatarpost = null;
  if (!!selectedAvatar) {
    avatarpost = <AvatarPosts avatar={selectedAvatar} onBgClick={onCloseClick} />
  }
  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">
            {avatarElements}
          </div>
        </div>
      </section>
      {avatarpost}
    </div>
  );
}

export default App;
