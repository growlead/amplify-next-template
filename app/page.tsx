"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { FileUploader } from "@aws-amplify/ui-react-storage";

Amplify.configure(outputs);

export default function App() {
  return (
    <main>
      <DefaultFileUploaderExample />
    </main>
  );
}

const DefaultFileUploaderExample = () => {
  return (
    <FileUploader
      acceptedFileTypes={["safetensors/*"]}
      path="public/"
      maxFileCount={15}
      isResumable
    />
  );
};
