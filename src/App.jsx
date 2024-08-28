import React, { useState } from "react";
import Button from "./components/Button.component";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("black");
  return (
    <div className="h-screen w-screen duration-200" style={{ backgroundColor }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <Button
            color="red"
            onClick={() => setBackgroundColor("red")}
            text="Red"
          />
          <Button
            color="green"
            onClick={() => setBackgroundColor("green")}
            text="Green"
          />
          <Button
            color="blue"
            onClick={() => setBackgroundColor("blue")}
            text="Blue"
          />
          <Button
            color="olive"
            onClick={() => setBackgroundColor("olive")}
            text="Olive"
          />
          <Button
            color="gray"
            onClick={() => setBackgroundColor("gray")}
            text="Gray"
          />
          <Button
            color="yellow"
            onClick={() => setBackgroundColor("yellow")}
            text="Yellow"
          />
          <Button
            color="pink"
            onClick={() => setBackgroundColor("pink")}
            text="Pink"
          />
          <Button
            color="purple"
            onClick={() => setBackgroundColor("purple")}
            text="Purple"
          />
          <Button
            color="lavender"
            onClick={() => setBackgroundColor("lavender")}
            text="Lavender"
          />
          <Button
            color="white"
            onClick={() => setBackgroundColor("white")}
            text="White"
          />
          <Button
            color="black"
            onClick={() => setBackgroundColor("black")}
            text="Black"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
