const Rooms = ({ currentRoom, setShowListMenu, setCurrentRoom }) => {
  const handleRoomChange = (room) => {
    setCurrentRoom(room);
    setShowListMenu(false);
  };
  return (
    <div className="rooms">
      <h2>Select room</h2>
      <ul>
        <li
          onClick={() => {
            handleRoomChange("Panic Attack Symptoms");
          }}
          className={currentRoom === "Panic Attack Symptoms" ? "active" : ""}
        >
          Panic Attack Symptoms
        </li>
        <li
          onClick={() => {
            handleRoomChange("Treatment questions and answers");
          }}
          className={currentRoom === "Treatment questions and answers" ? "active" : ""}
        >
          Treatment questions and answers
        </li>
        <li
          onClick={() => {
            handleRoomChange("Need Help");
          }}
          className={currentRoom === "Need Help" ? "active" : ""}
        >
          Need Help
        </li>
      </ul>
    </div>
  );
};

export default Rooms;
