import { Button } from "@/components/ui/button";
import React from "react";
import { EyeOpenIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Switch } from "@/components/ui/switch";

export default function BlogTable() {
  return (
    <div className="overflow-x-auto">
      <div className="border rounded-md w-[900px] md:w-full">
        <div className="grid grid-cols-5 p-5 border-b">
          <h1 className="col-span-2">Title</h1>
          <h1>Premium</h1>
          <h1>Publish</h1>
        </div>
        <div className="grid grid-cols-5 p-5">
          <h1 className="col-span-2">Blog title</h1>
          <Switch checked={false} />
          <Switch checked={true} />
          <Action />
        </div>
      </div>
    </div>
  );
}

const Action = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Button className="flex items-center gap-2">
        <EyeOpenIcon />
        View
      </Button>
      <Button variant="destructive" className="flex items-center gap-2">
        <TrashIcon />
        Delete
      </Button>
      <Button className="flex items-center gap-2">
        <Pencil1Icon />
        Edit
      </Button>
    </div>
  );
};
