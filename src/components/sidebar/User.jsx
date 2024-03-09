import profileImage from "../../assets/image1.jpeg";
export function User({ name, time, setCurrentUser, index, isSelected }) {
  return (
    <button
      onClick={() => setCurrentUser(index)}
      className={isSelected ? "selectedUser" : undefined}
      style={
        isSelected ? { borderLeft: "8px solid rgb(254, 100, 100)" } : undefined
      }
    >
      <div id="user">
        <img src={profileImage} />
        <div id="isOnline"></div>
        <div id="user-manage">
          <div id="user-name-date">
            <p id="user-name">{name}</p>
            <p id="date">{time}</p>
          </div>
          <p id="last-message">
            last message did you get your money check and tall
          </p>
        </div>
      </div>
    </button>
  );
}
