"use client";

import { MessageTerminal } from "@/components/ui/message-terminal";

export default function Page() {
  return (
    <main className="container max-w-2xl flex flex-col gap-8">
      <h1 className="text-4xl font-extrabold my-8 text-center">
        Alice
      </h1>
      <MessageTerminal sender="alice" />
    </main>
  );
}
