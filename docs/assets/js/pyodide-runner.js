(() => {
  let pyodideReadyPromise;

  async function getPyodide() {
    if (!pyodideReadyPromise) {
      pyodideReadyPromise = loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.2/full/",
      });
    }
    return pyodideReadyPromise;
  }

  function setStatus(statusEl, text, isError = false) {
    statusEl.textContent = text;
    statusEl.classList.toggle("error", isError);
  }

  async function runCode(code, outputEl, statusEl) {
    setStatus(statusEl, "Loading Python runtime...");
    outputEl.textContent = "";

    try {
      const pyodide = await getPyodide();
      const stdout = [];
      const stderr = [];

      pyodide.setStdout({
        batched: (chunk) => stdout.push(chunk),
      });
      pyodide.setStderr({
        batched: (chunk) => stderr.push(chunk),
      });

      setStatus(statusEl, "Running...");
      await pyodide.runPythonAsync(code);

      const output = [...stdout, ...stderr].join("\n").trim();
      outputEl.textContent = output || "(no output)";
      setStatus(statusEl, "Done");
    } catch (error) {
      outputEl.textContent = String(error);
      setStatus(statusEl, "Run failed", true);
    }
  }

  function createRunner(wrapper) {
    if (wrapper.dataset.pyRunnerReady === "true") {
      return;
    }

    const codeEl = wrapper.querySelector("pre code");
    if (!codeEl) {
      return;
    }

    wrapper.dataset.pyRunnerReady = "true";
    const initialCode = codeEl.textContent.trimEnd();

    const runnerEl = document.createElement("section");
    runnerEl.className = "pyodide-runner";

    const controlsEl = document.createElement("div");
    controlsEl.className = "pyodide-controls";

    const runButton = document.createElement("button");
    runButton.type = "button";
    runButton.className = "md-button md-button--primary";
    runButton.textContent = "Run";

    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.className = "md-button";
    resetButton.textContent = "Reset";

    const statusEl = document.createElement("span");
    statusEl.className = "pyodide-status";
    statusEl.textContent = "Ready";

    controlsEl.append(runButton, resetButton, statusEl);

    const editor = document.createElement("textarea");
    editor.className = "pyodide-editor";
    editor.value = initialCode;
    editor.spellcheck = false;
    editor.setAttribute("aria-label", "Python code editor");

    const outputLabel = document.createElement("h4");
    outputLabel.className = "pyodide-output-label";
    outputLabel.textContent = "Output";

    const outputEl = document.createElement("pre");
    outputEl.className = "pyodide-output";
    outputEl.textContent = "(run the code)";

    runButton.addEventListener("click", async () => {
      runButton.disabled = true;
      await runCode(editor.value, outputEl, statusEl);
      runButton.disabled = false;
    });

    resetButton.addEventListener("click", () => {
      editor.value = initialCode;
      outputEl.textContent = "(run the code)";
      setStatus(statusEl, "Ready");
    });

    runnerEl.append(controlsEl, editor, outputLabel, outputEl);
    wrapper.replaceChildren(runnerEl);
  }

  function mountRunners(root = document) {
    const wrappers = root.querySelectorAll(".py-run");
    wrappers.forEach(createRunner);
  }

  document.addEventListener("DOMContentLoaded", () => mountRunners(document));

  if (typeof window.document$ !== "undefined") {
    window.document$.subscribe(() => mountRunners(document));
  }
})();
