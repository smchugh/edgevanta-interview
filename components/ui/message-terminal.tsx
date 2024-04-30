import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";

function MessageTerminal({sender}: {sender: string}) {
  const addMessage = useMutation(api.myFunctions.addMessage);
  const [ message, setMessage ] = useState("");

  return (
    <>
      <p>
        <Textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </p>
      <p>
      <Button
          onClick={() => {
            void addMessage({ value: message, sender: sender });
            setMessage("");
          }}
        >
          Submit
        </Button>
      </p>
    </>
  );
}

export { MessageTerminal }
