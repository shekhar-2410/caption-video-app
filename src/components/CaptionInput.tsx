import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CaptionInput({
  addCaption,
}: {
  addCaption: (text: string) => void;
}) {
  const [text, setText] = useState("");

  const handleAddCaption = () => {
    if (text.trim() !== "") {
      addCaption(text);
      setText("");
    }
  };

  return (
    <div className="flex gap-2">
      <Input
        type="text"
        placeholder="Enter caption..."
        className="flex-1"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleAddCaption}>Add</Button>
    </div>
  );
}
