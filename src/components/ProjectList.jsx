import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectCard({ title, description }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
