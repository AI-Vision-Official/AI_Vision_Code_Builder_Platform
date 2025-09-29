
async function sendPrompt() {
  const prompt = document.getElementById("prompt").value;
  const codeOutput = document.getElementById("codeOutput");
  const preview = document.getElementById("preview");

  codeOutput.value = "Loading...";
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_OPENAI_API_KEY_HERE"
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      })
    });
    const data = await response.json();
    const code = data.choices[0].message.content;
    codeOutput.value = code;
    preview.srcdoc = code;
  } catch (err) {
    codeOutput.value = "Error fetching code. Please check your API key or internet connection.";
  }
}
