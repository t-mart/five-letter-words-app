import { fiveLetterWords } from "./FiveLetterWordsData";

interface Props {
  inputText: string;
  setValidity: (validity: boolean) => void;
}

export function Neighbors(props: Props) {
  const { inputText, setValidity } = props;

  const textAsArray = Array.from(inputText);
  if (textAsArray.length < 5) {
    setValidity(false)
    return <div>Enter more letters...</div>;
  } else if (textAsArray.length > 5) {
    setValidity(false)
    return <div>Enter only 5 letters...</div>;
  }

  const results = fiveLetterWords[inputText];

  if (results === undefined) {
    setValidity(false)
    return <div>This is not a known five letter word.</div>;
  }

  if (results.length === 0) {
    setValidity(true)
    return <div>This word is valid, but has no neighbors</div>;
  }

  setValidity(true)
  const words = results.map((result) => (
  <li>
    <a href={`/?word=${result}`} class="underline text-blue-700 hover:text-blue-900">{result}</a>
  </li>
  ));
  return (
  <div>
    {words}
  </div>
  );
}
