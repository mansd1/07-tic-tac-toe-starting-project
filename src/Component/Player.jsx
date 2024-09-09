import React from "react";
import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  // UseState
  const [newName, setNewName] = useState(name); ///=======> useStete Change Name

  const [isEditing, setEditing] = useState(false); // =======> useState edit the Button

  function handlEditing() {
    setEditing((editting) => !editting); // ======> isEditing ? false : true

    if (isEditing) {
      onChangeName(symbol, newName);
    }
  }

  function ChangeName(event) {
    setNewName(event.target.value); // ======> Function Change The Name After Edit
  }

  let PlayerName = <span className="player-name">{newName}</span>;

  if (isEditing) {
    PlayerName = (
      <input type="text" required value={newName} onChange={ChangeName} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {PlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handlEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
