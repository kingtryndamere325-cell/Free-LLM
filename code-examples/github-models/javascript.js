// ===============================================
// GitHub Models - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://github.com/marketplace/models
// ===============================================

from openai import OpenAI

client = OpenAI(
    base_url="https://api.grokified.com/v1",
    api_key="YOUR_API_KEY",
)

response = client.chat.completions.create(
    model="grok-4.6",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
