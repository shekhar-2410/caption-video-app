import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CaptionListProps {
  captions: { time: number; text: string }[];
  onSeek: (time: number) => void;
  onDelete: (index: number) => void;
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
};

const CaptionList: React.FC<CaptionListProps> = ({
  captions,
  onSeek,
  onDelete,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-lg mx-auto">
      {captions.map((caption, index) => (
        <Card key={index} className="flex justify-between p-3 items-center">
          <Button onClick={() => onSeek(caption.time)} size="sm">
            {formatTime(caption.time)}
          </Button>
          <span className="flex-1 text-center">{caption.text}</span>
          <Button
            onClick={() => onDelete(index)}
            variant="destructive"
            size="sm"
          >
            Delete
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default CaptionList;
