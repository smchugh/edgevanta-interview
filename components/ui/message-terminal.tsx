import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function MessageTerminal() {
  return (
    <>
      <p>
        <Textarea></Textarea>
      </p>
      <p>
      <Button
          onClick={() => {
            console.log('TODO Submit');
          }}
        >
          Submit
        </Button>
      </p>
    </>
  );
}

export { MessageTerminal }
