import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(emojiDescritpion) {
  return (
    <Card
      key={emojiDescritpion.id}
      Image={emojiDescritpion.emoji}
      text={emojiDescritpion.name}
      description={emojiDescritpion.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
        {/* <Card
          Image={emojipedia[0].emoji}
          text={emojipedia[0].name}
          description={emojipedia[0].meaning}
        /> */}
      </dl>
    </div>
  );
}

export default App;
