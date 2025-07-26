const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
let cachedSelection = "";

// ✅ Store selected text globally before it's lost on click
document.addEventListener("selectionchange", () => {
  const selText = window.getSelection()?.toString().trim();
  if (selText) cachedSelection = selText;
  else {
    cachedSelection = ""; 
  }
});

export const InjectPrompt = async (prompt: string) => {
  // ✅ Step 1: Get the ProseMirror editor
  const editor = document.querySelector("#prompt-textarea") as HTMLElement;
  if (!editor || !editor.isContentEditable) {
    console.warn("ChatGPT ProseMirror editor not found.");
    return;
  }

  editor.focus();

  // ✅ Step 2: Handle selected text if available (from cache)
  if (cachedSelection) {
    const selectedText = cachedSelection;
    editor.innerText = prompt + ":\n\n " + selectedText;

    editor.dispatchEvent(
      new InputEvent("input", {
        bubbles: true,
        cancelable: true,
        inputType: "insertText",
      })
    );
  }

  // ✅ Step 3: If user typed into input already
  else {
    const selection = window.getSelection();
    const anchorNode = selection?.anchorNode;

    if (anchorNode && anchorNode.nodeType === Node.TEXT_NODE) {
      const existingText = anchorNode.textContent || "";

      editor.innerText = prompt + ":\n\n " + existingText;

      editor.dispatchEvent(
        new InputEvent("input", {
          bubbles: true,
          cancelable: true,
          inputType: "insertText",
        })
      );
    } else {
      // ✅ Step 4: Fallback — just inject the prompt
      editor.innerText = prompt;

      editor.dispatchEvent(
        new InputEvent("input", {
          bubbles: true,
          cancelable: true,
          inputType: "insertText",
        })
      );
    }
  }


    cachedSelection = "";

  // ✅ Step 5: Wait a moment, then click Send
  await wait(100);

  const sendButton = document.querySelector(
    'button[data-testid="send-button"]'
  ) as HTMLButtonElement | null;

  if (sendButton) {
    sendButton.click();
  } else {
    console.warn("Send button not found.");
  }
};
