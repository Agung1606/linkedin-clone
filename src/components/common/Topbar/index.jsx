import React, { useState } from 'react'
import './index.scss'
import LinkedinLogo from '../../../assets/linkedinLogo.png'
import user from '../../../assets/user.png'

import SearchUsers from '../SearchUsers'

// icons
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { BsBriefcase } from 'react-icons/bs'

export default function Topbar() {
  // useState hooks
  const [isSearch, setIsSearch] = useState(false)

  // handle hooks
  const handleIsSearch = () => setIsSearch(!isSearch);

  return (
    <div className="topbar-main">
      <img className="linkedin-logo" src={LinkedinLogo} alt="linkedin-logo" />
      {isSearch ? (
        <SearchUsers handleIsSearch={handleIsSearch} />
      ) : (
        <div className="react-icons">
          <AiOutlineSearch
            size={30}
            className="react-icon"
            onClick={handleIsSearch}
          />
          <AiOutlineHome size={30} className="react-icon" />
          <AiOutlineUserSwitch size={30} className="react-icon" />
          <BsBriefcase size={30} className="react-icon" />
          <AiOutlineMessage size={30} className="react-icon" />
          <AiOutlineBell size={30} className="react-icon" />
        </div>
      )}
      <img
        className="user-logo"
        src={user}
        alt="user"
      />
    </div>
  );
}
