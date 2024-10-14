"use client";
import React from "react";
import { Button } from "@strano-ui/components";
import { Text } from "@strano-ui/typography";

export default function Home() {
  return (
    <div className="bg-background p-10">
      <Text color="#0000c0" fontSize={2}>
        Home
      </Text>
      <Button
        size="lg"
        variant="default"
        onClick={() => alert("Button Clicked!")}
      >
        Click Me
      </Button>
    </div>
  );
}
