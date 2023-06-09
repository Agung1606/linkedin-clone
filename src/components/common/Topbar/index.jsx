import React, { useState } from 'react'
import './index.scss'
import LinkedinLogo from '../../../assets/linkedinLogo.png'
import user from '../../../assets/user.png'

import SearchUsers from '../SearchUsers'
import ProfilePopup from '../ProfilePopup'

// icons
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { BsBriefcase } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function Topbar() {
  // routes
  const navigate = useNavigate();
  const goToHome = () => navigate('/home')
  const goToConnections = () => navigate("/connections")

  // useState hooks
  const [isSearch, setIsSearch] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false)
  // handle hooks
  const handleIsSearch = () => setIsSearch(!isSearch)
  const handlePopupVisible = () => setPopupVisible(!popupVisible)

  return (
    <div className="topbar-main">
      {popupVisible && (
        <div className="popup-position">
          <ProfilePopup />
        </div>
      )}
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
          <AiOutlineHome size={30} className="react-icon" onClick={goToHome} />
          <AiOutlineUserSwitch
            size={30}
            className="react-icon"
            onClick={goToConnections}
          />
          <BsBriefcase size={30} className="react-icon" />
          <AiOutlineMessage size={30} className="react-icon" />
          <AiOutlineBell size={30} className="react-icon" />
        </div>
      )}
      <img
        className="user-logo"
        src={user}
        alt="user"
        onClick={handlePopupVisible}
      />
    </div>
  );
}
