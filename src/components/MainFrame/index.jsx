import Display from "../Display"
import TextBox from "../TextBox"
import { useState, useRef, useEffect } from "react"
import { talk } from "./script"


const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234'.split('')
const boards = []

for (var i = 6; i < 31; i = i + 6) {
  boards.push(alphabet.slice(i - 6, i))
}

const MainFrame = () => {
  const [exibit, setExibit] = useState(boards);
  const [text, setText] = useState('');
  const refsArray = Array.from({ length: 8 }, () => useRef());
  const delay = 2000;
  const timeoutRef = useRef(null); // Keep track of the current timeout

  useEffect(() => {
    let currentIndex = 0;
    const focusNextRef = () => {
      refsArray[currentIndex].current.focus();
      currentIndex = (currentIndex + 1) % refsArray.length;
      // Set the timeout and store its reference in the timeoutRef
      timeoutRef.current = setTimeout(focusNextRef, delay);
    };
    // Start the initial timeout
    focusNextRef();
    // Cleanup function to clear the timeout on component unmount or when resetting
    return () => {
      if(currentIndex==1){
        refsArray[currentIndex-1].current.blur();
      }
      clearTimeout(timeoutRef.current);
    };
  }, [refsArray, delay]);


  if (exibit[0].length > 1) {
    return (
      <div className="bg-black w-screen h-screen p-3">
        <div className="grid grid-cols-3 grid-rows-3 gap-5 h-full w-full items-center">
          {exibit.map((x, index) => (
            <Display
              key={index}
              time={delay}
              reff={refsArray[index]}
              letras={x}
              onclick={() => setExibit(x)}
              css={''}
            />
          ))}
          <TextBox css="col-start-2 row-start-2" text={text}></TextBox>
          <Display
            reff={refsArray[5]}
            onclick={() => setText(text.slice(0, -1))}
            letras={["Apagar"]}
            css={"col-start-1 row-start-2"}
          />
          <Display
            reff={refsArray[6]}
            onclick={() => setText(text + " ")}
            letras={["Espaço"]}
            css={"col-start-2 row-start-3"}
          />
          <Display
            reff={refsArray[7]}
            onclick={() => talk(text)}
            letras={["Falar"]}
            css={"col-start-3 row-start-2"}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-black w-screen h-screen p-3">
        <div className="grid grid-cols-3 grid-rows-3 gap-5 h-full w-full items-center">
          {exibit.map((x, index) => (
            <Display
              key={index}
              time={delay}
              reff={refsArray[index]}
              letras={x}
              onclick={() => {
                setText(text + x);
                setExibit(boards);
              }}
              css={''}
            />
          ))}
          <TextBox type="text" css="col-start-2 row-start-2" text={text}></TextBox>
          <Display
            reff={refsArray[6]}
            onclick={() => setExibit(boards)}
            letras={["Voltar"]}
            css={"col-start-1 row-start-2"}
          />
                    <Display
            reff={refsArray[7]}
            onclick={() => setExibit(boards)}
            letras={["Voltar"]}
            css={"col-start-3 row-start-2"}
          />
        </div>
      </div>
    );
  }
};

export default MainFrame;
