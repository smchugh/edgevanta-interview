import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useQueryWithAuth } from "@convex-dev/convex-lucia-auth/react";
import { useState } from "react";

function MessageTerminal({sender}: {sender: string}) {
  const { latestMessages } =
    useQueryWithAuth(api.myFunctions.listMessages, {
      count: 10,
    }) ?? {};

  const addMessage = useMutation(api.myFunctions.addMessage);
  const [ message, setMessage ] = useState("");

  return (
    <>
      <div>
      {latestMessages?.map((latestMessage) => (
        <p>
          <b>{latestMessage.sender}</b>: {latestMessage.value}
        </p>
      ))}
      </div>
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
