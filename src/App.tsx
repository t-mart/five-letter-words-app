import { useState } from "preact/hooks";
import classNames from "classnames";

import { Neighbors } from "./Neighbors";

export function App() {
  const [inputText, setInputText] = useState("");
  const [validity, setValidity] = useState(false);

  const onInput = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      setInputText(e.target.value);
    }
  };

  const classes = classNames(
    "text-2xl",
    "rounded",
    "focus:ring-2",
    "focus:ring-black-500",
    "focus:outline-none",
    "ring-1",
    "ring-gray-700",
    "p-4",
    "w-full",
    {
      "text-red-500": !validity,
    }
  );

  return (
    <div class="container max-w-screen-lg mx-auto px-4 space-y-8 my-8">
      <h1 class="text-2xl">Five Letter Word Neighbors</h1>
      <input
        type="text"
        value={inputText}
        onInput={onInput}
        class={classes}
        placeholder="Enter a five letter word"
      />
      <Neighbors inputText={inputText} setValidity={setValidity} />
    </div>
  );
}
