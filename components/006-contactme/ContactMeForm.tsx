"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../text-area";
import { Button } from "../ui/button";

export default function ContactMeForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="shadow-input  w-full">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex  flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="John" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Duo" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@email.com"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="usermessage">Your Message</Label>
          <Textarea
            id="usermessage"
            placeholder="Message"
            rows={10}
            cols={50}
            aria-multiline="true"
          />
        </LabelInputContainer>

        <Button className="p-2 w-full rounded-md ">
          Submit your message &rarr;
        </Button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex  w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
