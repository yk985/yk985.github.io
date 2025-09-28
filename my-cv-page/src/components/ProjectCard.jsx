import React from "react";
import { Card, CardContent } from "./ui/Card";

export default function ProjectCard({ title, description }) {
  return (
    <Card>
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
