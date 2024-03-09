import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { User } from "./User";
import userData from "../../userData";

export default function SideBar({ setCurrentUser  , currentuser}) {
  const [userSearch, setUserSearch] = useState([...userData]);
  function handleChange(event) {
    setUserSearch((curren) => {
      const newData = [...curren];
      if (event.target.value == "") return [...userData];
      return newData.filter((current) =>
        current.name.toLocaleLowerCase().includes(event.target.value)
      );
    });
  }
  return (
    <div id="sideBar">
      <div id="searchBar">
        <button>
          <FaSearch />
        </button>
        <input onChange={handleChange} type="text" placeholder="Search" />
      </div>
      <div id="Users">
        {userSearch.map((item,index) => (
          <User index={index} isSelected={index == currentuser}
            setCurrentUser={setCurrentUser}
            name={item.name}
            time={item.date}
          />
        ))}
      </div>
    </div>
  );
}
