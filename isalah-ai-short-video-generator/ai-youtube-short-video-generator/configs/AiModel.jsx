const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const generateScript = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "write a two different script for 30 Seconds video on Topic:Kids Story,\n  * Give me response in JSON format and follow the schema\n     -{\n     scripts:[\n     {\n     content:\"\n     },\n     ],\n    }" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"**Visual:** (0-5 seconds) Open on a vibrant illustration of a friendly-looking monster under a child's bed. Upbeat, whimsical music plays.\\n\\n**Voiceover:** (0-5 seconds) Does your child love stories filled with imagination and wonder?\\n\\n**Visual:** (5-15 seconds) Quick cuts showing different illustrations from the book: a dragon teaching kids how to fly, a princess befriending a squirrel, a knight rescuing a kitten.\\n\\n**Voiceover:** (5-15 seconds) Dive into a world of adventure with our captivating kids' stories! Tales of bravery, friendship, and fantastical creatures.\\n\\n**Visual:** (15-25 seconds) Show a parent reading to a child, both smiling and engaged with the book.\\n\\n**Voiceover:** (15-25 seconds) Spark their creativity, build their vocabulary, and create precious bedtime memories.\\n\\n**Visual:** (25-30 seconds) Book cover appears with website address and a call to action, maybe a discount code.\\n\\n**Voiceover:** (25-30 seconds) Visit [Website Address] today and discover a treasure trove of enchanting stories for your little ones! Use code [Discount Code] for a special offer!\"\n    },\n    {\n      \"content\": \"**Visual:** (0-5 seconds) A child dramatically acting out a scene from a story with props (e.g., a cardboard sword, a blanket cape).\\n\\n**Voiceover:** (0-5 seconds) Tired of the same old bedtime routine?\\n\\n**Visual:** (5-15 seconds) Montage of diverse kids looking excited and happy while reading different kids' books. Show close-ups of pages with engaging illustrations.\\n\\n**Voiceover:** (5-15 seconds) Ignite your child's imagination with stories that transport them to faraway lands!\\n\\n**Visual:** (15-25 seconds) Text on screen: \"Adventures Await!\" with animated arrows pointing to different story genres (e.g., Mystery, Fantasy, Animals).\\n\\n**Voiceover:** (15-25 seconds) From thrilling mysteries to magical adventures, we have a story for every child!\\n\\n**Visual:** (25-30 seconds) Logo of the kids' story company appears. Website address prominently displayed. A happy child gives a thumbs up.\\n\\n**Voiceover:** (25-30 seconds) [Company Name] - Where every story is an adventure! Find your next favorite at [Website Address].\"\n    }\n  ]\n}\n```" },
            ],
        },
    ],
});

export const GenerateImageScript = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Generate Image prompt of Cinematic style with all details for each scene for 30 seconds video : script: Rosa Parks refused to give up her seat on a bus in 1955. Her quiet act of defiance sparked the Montgomery Bus Boycott, a pivotal moment in the Civil Rights Movement. One person's bravery can inspire lasting change for everyone.\nJust Give specifying image prompt depends on the story line\ndo not give camera angle image prompt\nFollow the Following schema and return JSON data (Max 4-5 Images)\n- [\n    {\n        imagePrompt: '',\n        sceneContent: ' <Script Content>'\n    }\n]" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "The user wants image prompts for a 30-second video based on a short script about Rosa Parks.\nThe prompts should be in a cinematic style, detailed, and follow the storyline.\nI need to break down the script into 3-4 key visual moments and create corresponding image prompts.\nThe output must be a JSON array following the specified schema.\nNo camera angles should be specified in the prompts.\n\n**Script Breakdown:**\n1.  **Scene 1:** Rosa Parks on the bus, refusing to give up her seat. (Focus on the moment of defiance).\n2.  **Scene 2:** The Montgomery Bus Boycott begins. (Show empty buses or people walking).\n3.  **Scene 3:** Highlight the impact/legacy - Civil Rights Movement. (Symbolic imagery).\n4.  **Scene 4 (Optional/Combined):** Emphasize the \"one person's bravery\" theme. (Could be combined with Scene 1 or 3).\n\n**Image Prompt Generation Strategy:**\n*   **Style:** Cinematic, historical, dramatic lighting, realistic depiction.\n*   **Keywords:** 1955, Montgomery, Alabama, bus interior, African American woman, determined expression, period clothing, boycott, empty bus seats, people walking, protest signs (subtle), Civil Rights Movement imagery (e.g., marches, diverse crowd), inspiring, hopeful, legacy.\n*   **Details:** Focus on mood, lighting, character expression, and historical accuracy.\n\n**Drafting Prompts:**\n\n*   **Scene 1:** Cinematic shot, interior of a dimly lit 1955 Montgomery bus at dusk. Rosa Parks, an African American woman in period attire, sits resolute on a bus seat, looking forward with quiet determination, soft light falling on her face. Other passengers blurred in the background. Moody, historical atmosphere.\n*   **Scene 2:** Cinematic wide shot, early morning street in 1955 Montgomery, Alabama. Several city buses are visible, mostly empty, driving past determined African American men and women walking purposefully along the sidewalk instead. Atmospheric haze, realistic period details.\n*   **Scene 3:** Cinematic montage style image: A diverse crowd peacefully marching for civil rights, inspired, carrying subtle banners demanding equality. Overlay of a single, strong portrait of Rosa Parks looking hopeful. Warm, inspiring light, sense of historical significance.\n*   **Scene 4 (Alternative/Focus on Bravery):** Close-up cinematic portrait of Rosa Parks from the bus scene, focusing intensely on her dignified and courageous expression, embodying quiet strength. Soft, dramatic lighting highlights her features against the darker bus interior.\n\n**Refining and Selecting (Max 4-5):**\nLet's go with 4 scenes to cover the key points distinctly.\n\n1.  Rosa Parks on the bus.\n2.  The boycott (empty bus/walking).\n3.  Symbolic impact (march/legacy).\n4.  Focus on individual bravery (close-up).\n\nRevising prompts for clarity and detail:\n\n*   **Prompt 1:** Cinematic still, interior of a vintage 1955 Montgomery city bus. Rosa Parks, an African American woman with a quiet but firm expression, sits near the front of the 'colored section'. Natural light streams through the window, highlighting dust motes. The atmosphere is tense but subdued. Period-accurate details, realistic style.\n*   **Prompt 2:** Cinematic street scene, 1955 Montgomery, Alabama. An empty city bus drives down a street during daylight. In the foreground and middle ground, African American citizens, dressed for work or daily life, are seen walking with purpose along the sidewalks, participating in the boycott. Realistic depiction, historical accuracy.\n*   **Prompt 3:** Cinematic composition evoking the Civil Rights Movement. A diverse group of people peacefully marching, conveying unity and determination. Silhouetted against a hopeful sky or integrated with subtle archival elements. Focus on the feeling of collective action inspired by individual courage. Dramatic lighting, symbolic feel.\n*   **Prompt 4:** Intense cinematic close-up portrait of Rosa Parks, capturing her profound dignity, quiet resolve, and unwavering bravery in the face of injustice. Soft, focused lighting emphasizes her expression. The background is subtly blurred, focusing entirely on her character. Realistic, emotionally resonant.\n\nThis looks like a good set of 4 prompts covering the script's narrative arc. Now, format as JSON." },
                { text: "```json\n[\n    {\n        \"imagePrompt\": \"Cinematic still, interior of a vintage 1955 Montgomery city bus at dusk. Rosa Parks, an African American woman in modest period clothing, sits firmly in her seat, gazing forward with quiet determination and dignity. Soft, low-key lighting highlights her face against the darker bus interior. Realistic style, historical atmosphere, shallow depth of field.\",\n        \"sceneContent\": \"Rosa Parks refused to give up her seat on a bus in 1955.\"\n    },\n    {\n        \"imagePrompt\": \"Cinematic wide shot, early morning street in 1955 Montgomery, Alabama. A city bus drives down the street, conspicuously empty. Along the sidewalks, determined African American men and women walk purposefully in groups, choosing to walk instead of ride. Atmospheric morning light, realistic period details, sense of community resolve.\",\n        \"sceneContent\": \"Her quiet act of defiance sparked the Montgomery Bus Boycott,\"\n    },\n    {\n        \"imagePrompt\": \"Cinematic composition representing the Civil Rights Movement. A diverse crowd peacefully marches, conveying unity, hope, and determination. Subtle integration of historical imagery like protest signs for equality. Warm, inspiring light filters through the scene, emphasizing collective strength and progress. Symbolic, powerful imagery.\",\n        \"sceneContent\": \"a pivotal moment in the Civil Rights Movement.\"\n    },\n    {\n        \"imagePrompt\": \"Cinematic close-up portrait focusing intensely on Rosa Parks' face, capturing her profound dignity, quiet strength, and unwavering resolve. Soft, dramatic lighting emphasizes her thoughtful expression and the courage in her eyes. The background is subtly blurred, highlighting her individual bravery. Emotionally resonant, realistic portrayal.\",\n        \"sceneContent\": \"One person's bravery can inspire lasting change for everyone.\"\n    }\n]\n```" },
            ],
        },
    ],
});
//const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//console.log(result.response.text());
