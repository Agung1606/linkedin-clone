import React from 'react'
import './index.scss'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function SearchUsers({ handleIsSearch }) {
  return (
    <div className="search-users">
      <input placeholder="Search Users..." type="text" />
      <AiOutlineCloseCircle
        className="close-icon"
        size={20}
        onClick={handleIsSearch}
      />
    </div>
  );
}
