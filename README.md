# Prompt Engineering Guide 中文版

提示词工程指南（Prompt Engineering Guide）是由 [DAIR.AI](https://github.com/dair-ai) 发起，由 [南昌大学人工智能工业研究院](http://ie.ncu.edu.cn/kxyj/kypt/43fd339753aa4f6e9b2755589419ac9b.htm#)、 [NCUHOME](team.ncuos.com) 及中文开源社区共同翻译和改进的教程项目，旨在帮助研发和行业内相关人员了解提示工程。提示工程技能有助于更好地了解大型语言模型（LLM）的能力和局限性。研究人员利用提示工程提高 LLM 在各种常见和复杂任务（如问题解答和算术推理）中的能力。开发人员使用提示工程来设计与 LLM 和其他工具相连接的强大而有效的提示技术。

鉴于人们对使用 LLMs 进行开发的浓厚兴趣，我们创建了这一新的提示工程指南，其中包含与 LLMs 提示工程相关的所有最新论文、学习指南、讲座、参考资料和工具。

以传播 AI 技术和研究成果为目标，我们欢迎大家的贡献！大家可以查找页面上的编辑按钮参与贡献。

[查看许可信息](https://github.com/ncuhome/Prompt-Engineering-Guide#license).

本项目受多个开源项目启发，包括：

- [OpenAI CookBook](https://github.com/openai/openai-cookbook)
- [Pretrain, Prompt, Predic](http://pretrain.nlpedia.ai/)
- [Learn Prompting](https://learntipting.org/)。

感谢以上开源项目的贡献。

🌐 [Prompt Engineering Guide (Web Version)](https://prompt-guide.ncuos.com/)

## Guides

You can also find the most up-to-date guides on our new website [https://prompt-guide.ncuos.com/](https://prompt-guide.ncuos.com/).

- [Prompt Engineering - Introduction](/introduction)
  - [Prompt Engineering - LLM Settings](/introduction/settings)
  - [Prompt Engineering - Basics of Prompting](/introduction/basics)
  - [Prompt Engineering - Prompt Elements](/introduction/elements)
  - [Prompt Engineering - General Tips for Designing Prompts](/introduction/tips)
  - [Prompt Engineering - Examples of Prompts](/introduction/examples)
- [Prompt Engineering - Techniques](/techniques)
  - [Prompt Engineering - Zero-Shot Prompting](/techniques/zeroshot)
  - [Prompt Engineering - Few-Shot Prompting](/techniques/fewshot)
  - [Prompt Engineering - Chain-of-Thought Prompting](/techniques/cot)
  - [Prompt Engineering - Self-Consistency](/techniques/consistency)
  - [Prompt Engineering - Generate Knowledge Prompting](/techniques/knowledge)
  - [Prompt Engineering - Prompt Chaining](/techniques/prompt_chaining)
  - [Prompt Engineering - Tree of Thoughts (ToT)](/techniques/tot)
  - [Prompt Engineering - Retrieval Augmented Generation](/techniques/rag)
  - [Prompt Engineering - Automatic Reasoning and Tool-use (ART)](/techniques/art)
  - [Prompt Engineering - Automatic Prompt Engineer](/techniques/ape)
  - [Prompt Engineering - Active-Prompt](/techniques/activeprompt)
  - [Prompt Engineering - Directional Stimulus Prompting](/techniques/dsp)
  - [Prompt Engineering - Program-Aided Language Models](/techniques/pal)
  - [Prompt Engineering - ReAct Prompting](/techniques/react)
  - [Prompt Engineering - Multimodal CoT Prompting](/techniques/multimodalcot)
  - [Prompt Engineering - Graph Prompting](/techniques/graph)
- [Prompt Engineering - Applications](/applications)
  - [Prompt Engineering - Function Calling](/applications/function_calling)
  - [Prompt Engineering - Generating Data](/applications/generating)
  - [Prompt Engineering - Generating Synthetic Dataset for RAG](/applications/synthetic_rag)
  - [Prompt Engineering - Takling Generated Datasets Diversity](/applications/generating_textbooks)
  - [Prompt Engineering - Generating Code](/applications/coding)
  - [Prompt Engineering - Graduate Job Classification Case Study](/applications/workplace_casestudy)
- [Prompt Engineering - Prompt Hub](/prompts)
  - [Prompt Engineering - Classification](/prompts/classification)
  - [Prompt Engineering - Coding](/prompts/coding)
  - [Prompt Engineering - Creativity](/prompts/creativity)
  - [Prompt Engineering - Evaluation](/prompts/evaluation)
  - [Prompt Engineering - Information Extraction](/prompts/information-extraction)
  - [Prompt Engineering - Image Generation](/prompts/image-generation)
  - [Prompt Engineering - Mathematics](/prompts/mathematics)
  - [Prompt Engineering - Question Answering](/prompts/question-answering)
  - [Prompt Engineering - Reasoning](/prompts/reasoning)
  - [Prompt Engineering - Text Summarization](/prompts/text-summarization)
  - [Prompt Engineering - Truthfulness](/prompts/truthfulness)
  - [Prompt Engineering - Adversarial Prompting](/prompts/adversarial-prompting)
- [Prompt Engineering - Models](/models)
  - [Prompt Engineering - ChatGPT](/models/chatgpt)
  - [Prompt Engineering - Code Llama](/models/code-llama)
  - [Prompt Engineering - Flan](/models/flan)
  - [Prompt Engineering - Gemini](/models/gemini)
  - [Prompt Engineering - GPT-4](/models/gpt-4)
  - [Prompt Engineering - LLaMA](/models/llama)
  - [Prompt Engineering - Mistral 7B](/models/mistral-7b)
  - [Prompt Engineering - Mixtral](/models/mixtral)
  - [Prompt Engineering - OLMo](/models/olmo)
  - [Prompt Engineering - Phi-2](/models/phi-2)
  - [Prompt Engineering - Model Collection](/models/collection)
- [Prompt Engineering - Risks and Misuses](/risks)
  - [Prompt Engineering - Adversarial Prompting](/risks/adversarial)
  - [Prompt Engineering - Factuality](/risks/factuality)
  - [Prompt Engineering - Biases](/risks/biases)
- [Prompt Engineering - Papers](/papers)
  - [Prompt Engineering - Overviews](/papers#overviews)
  - [Prompt Engineering - Approaches](/papers#approaches)
  - [Prompt Engineering - Applications](/papers#applications)
  - [Prompt Engineering - Collections](/papers#collections)
- [Prompt Engineering - Tools](/tools)
- [Prompt Engineering - Notebooks](/notebooks)
- [Prompt Engineering - Datasets](/datasets)
- [Prompt Engineering - Additional Readings](/readings)

## Running the guide locally

To run the guide locally, for example to check the correct implementation of a new translation, you will need to:

1. Install Node >=18.0.0
2. Install `pnpm` if not present in your system. Check [here](https://pnpm.io/installation) for detailed instructions.
3. Install the dependencies: `pnpm i next react react-dom nextra nextra-theme-docs`
4. Boot the guide with `pnpm dev`
5. Browse the guide at `http://localhost:3000/`

## License

[MIT License](https://github.com/ncuhome/Prompt-Engineering-Guide/blob/main/LICENSE.md)

如果您认为这里缺少某些内容，请随时打开 PR。随时欢迎反馈和建议。只需打开一个问题！
