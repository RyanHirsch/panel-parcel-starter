import { readFileSync } from "fs";

export function safelyDefine(elementName: string, customElement: CustomElementConstructor) {
  if (customElements.get(elementName)) {
    console.warn(`Trying to redefine ${elementName} skipping`);
    return;
  }
  customElements.define(elementName, customElement);
  return;
}

export function injectStyles(elementName: string, css: string) {
  const existingStyles = document.getElementById(elementName);
  if (!existingStyles) {
    const styleNode = document.createElement("style");
    styleNode.setAttribute("id", elementName);
    styleNode.type = "text/css";
    styleNode.appendChild(document.createTextNode(css));
    document.head.appendChild(styleNode);
  }
}

export function injectStyleFile(elementName: string, filepath: string) {
  return injectStyles(elementName, importStyleFile(filepath));
}

export function importStyleFile(filepath: string): string {
  return readFileSync(filepath, "utf8");
}
