import { Question } from '@/types'

export default [
      {
        "id": 1,
        "text": "Your code has no comments. The next developer who reads it...",
        "options": [
          {
            "text": "...should appreciate its self-documenting elegance",
            "impacts": [
              { "trait": "assertiveness", "value": 2 },
              { "trait": "compassion", "value": -1 }
            ]
          },
          {
            "text": "...will be fine, that's a problem for future me",
            "impacts": [
              { "trait": "orderliness", "value": -2 },
              { "trait": "politeness", "value": -1 }
            ]
          },
          {
            "text": "...deserves better, I'll add comments right now",
            "impacts": [
              { "trait": "compassion", "value": 2 },
              { "trait": "orderliness", "value": 1 }
            ]
          }
        ]
      },
      {
        "id": 2,
        "text": "The compiler is throwing errors. You...",
        "options": [
          {
            "text": "Argue with it until 3 AM because you know you're right",
            "impacts": [
              { "trait": "volatility", "value": 2 },
              { "trait": "assertiveness", "value": 1 },
              { "trait": "withdrawal", "value": -1 }
            ]
          },
          {
            "text": "Calmly read the documentation and fix the issue",
            "impacts": [
              { "trait": "volatility", "value": -2 },
              { "trait": "industriousness", "value": 1 }
            ]
          },
          {
            "text": "Switch to a language with less strict typing",
            "impacts": [
              { "trait": "orderliness", "value": -2 },
              { "trait": "intellect", "value": -1 }
            ]
          }
        ]
      },
      {
        "id": 3,
        "text": "You discover a new programming paradigm. Your first thought is...",
        "options": [
          {
            "text": "Time to rewrite everything from scratch!",
            "impacts": [
              { "trait": "enthusiasm", "value": 2 },
              { "trait": "openness", "value": 2 },
              { "trait": "industriousness", "value": -1 }
            ]
          },
          {
            "text": "Let's carefully evaluate its pros and cons",
            "impacts": [
              { "trait": "intellect", "value": 2 },
              { "trait": "orderliness", "value": 1 }
            ]
          },
          {
            "text": "If it ain't broke, don't fix it",
            "impacts": [
              { "trait": "openness", "value": -2 },
              { "trait": "enthusiasm", "value": -1 }
            ]
          }
        ]
      },
      {
        "id": 4,
        "text": "When pair programming, you prefer to...",
        "options": [
          {
            "text": "Take control and show them the right way",
            "impacts": [
              { "trait": "assertiveness", "value": 2 },
              { "trait": "withdrawal", "value": -1 }
            ]
          },
          {
            "text": "Collaborate and learn from each other",
            "impacts": [
              { "trait": "compassion", "value": 2 },
              { "trait": "withdrawal", "value": -2 }
            ]
          },
          {
            "text": "Avoid it entirely - solo programming is best",
            "impacts": [
              { "trait": "withdrawal", "value": 2 },
              { "trait": "politeness", "value": -1 }
            ]
          }
        ]
      },
      {
        "id": 5,
        "text": "Your approach to documentation is...",
        "options": [
          {
            "text": "Writing a theoretical treatise on each function",
            "impacts": [
              { "trait": "intellect", "value": 2 },
              { "trait": "orderliness", "value": 2 },
              { "trait": "industriousness", "value": 1 }
            ]
          },
          {
            "text": "Adding emojis to make it fun and readable",
            "impacts": [
              { "trait": "enthusiasm", "value": 2 },
              { "trait": "politeness", "value": 1 }
            ]
          },
          {
            "text": "The code is the documentation",
            "impacts": [
              { "trait": "orderliness", "value": -2 },
              { "trait": "compassion", "value": -1 }
            ]
          }
        ]
      },
      {
        "id": 6,
        "text": "When debugging, you usually...",
        "options": [
          {
            "text": "Print 'here1', 'here2', 'here3' everywhere",
            "impacts": [
              { "trait": "orderliness", "value": -2 },
              { "trait": "intellect", "value": -1 }
            ]
          },
          {
            "text": "Set up a comprehensive logging system",
            "impacts": [
              { "trait": "orderliness", "value": 2 },
              { "trait": "industriousness", "value": 1 }
            ]
          },
          {
            "text": "Stare at it until the bug reveals itself",
            "impacts": [
              { "trait": "withdrawal", "value": 1 },
              { "trait": "intellect", "value": 1 }
            ]
          }
        ]
      },
      {
        "id": 7,
        "text": "Your perfect programming language would be...",
        "options": [
          {
            "text": "Mathematically pure and provably correct",
            "impacts": [
              { "trait": "intellect", "value": 2 },
              { "trait": "orderliness", "value": 1 },
              { "trait": "openness", "value": -1 }
            ]
          },
          {
            "text": "Easy to write and fun to use",
            "impacts": [
              { "trait": "enthusiasm", "value": 2 },
              { "trait": "compassion", "value": 1 }
            ]
          },
          {
            "text": "Fast and efficient above all else",
            "impacts": [
              { "trait": "industriousness", "value": 2 },
              { "trait": "assertiveness", "value": 1 }
            ]
          }
        ]
      },
      {
        "id": 8,
        "text": "When your code breaks in production...",
        "options": [
          {
            "text": "Panic! Everything is on fire!",
            "impacts": [
              { "trait": "volatility", "value": 2 },
              { "trait": "withdrawal", "value": -1 }
            ]
          },
          {
            "text": "Methodically investigate the root cause",
            "impacts": [
              { "trait": "orderliness", "value": 2 },
              { "trait": "volatility", "value": -2 }
            ]
          },
          {
            "text": "Quick hotfix now, proper fix later",
            "impacts": [
              { "trait": "industriousness", "value": -1 },
              { "trait": "orderliness", "value": -1 }
            ]
          }
        ]
      },
      {
        "id": 9,
        "text": "Your reaction to code reviews is...",
        "options": [
          {
            "text": "Defend every line like it's your thesis",
            "impacts": [
              { "trait": "assertiveness", "value": 2 },
              { "trait": "politeness", "value": -2 }
            ]
          },
          {
            "text": "Grateful for the feedback and suggestions",
            "impacts": [
              { "trait": "openness", "value": 2 },
              { "trait": "politeness", "value": 2 }
            ]
          },
          {
            "text": "Silently implement changes without discussion",
            "impacts": [
              { "trait": "withdrawal", "value": 2 },
              { "trait": "assertiveness", "value": -1 }
            ]
          }
        ]
      },
      {
        "id": 10,
        "text": "When starting a new project, you first...",
        "options": [
          {
            "text": "Design the perfect architecture on paper",
            "impacts": [
              { "trait": "orderliness", "value": 2 },
              { "trait": "intellect", "value": 1 }
            ]
          },
          {
            "text": "Jump in and start coding the fun parts",
            "impacts": [
              { "trait": "enthusiasm", "value": 2 },
              { "trait": "orderliness", "value": -1 }
            ]
          },
          {
            "text": "Research what everyone else is doing",
            "impacts": [
              { "trait": "openness", "value": 1 },
              { "trait": "industriousness", "value": 1 }
            ]
          }
        ]
      },
      {
        "id": 11,
        "text": "Your preferred variable naming style is...",
        "options": [
          {
            "text": "Detailed_Variable_Names_With_Full_Context",
            "impacts": [
              { "trait": "orderliness", "value": 2 },
              { "trait": "compassion", "value": 1 }
            ]
          },
          {
            "text": "x, y, z - keep it simple",
            "impacts": [
              { "trait": "orderliness", "value": -2 },
              { "trait": "compassion", "value": -1 }
            ]
          },
          {
            "text": "whatever_makes_sense_at_the_time",
            "impacts": [
              { "trait": "orderliness", "value": -1 },
              { "trait": "industriousness", "value": -1 }
            ]
          }
        ]
      },
      {
        "id": 12,
        "text": "Your opinion on new frameworks is...",
        "options": [
          {
            "text": "Must learn them all immediately!",
            "impacts": [
              { "trait": "enthusiasm", "value": 2 },
              { "trait": "openness", "value": 2 }
            ]
          },
          {
            "text": "Carefully evaluate their maturity first",
            "impacts": [
              { "trait": "orderliness", "value": 2 },
              { "trait": "intellect", "value": 1 }
            ]
          },
          {
            "text": "Stick to what's proven and reliable",
            "impacts": [
              { "trait": "openness", "value": -2 },
              { "trait": "enthusiasm", "value": -1 }
            ]
          }
        ]
      },
      {
        "id": 13,
        "text": "Your preferred work environment is...",
        "options": [
          {
            "text": "Complete silence and solitude",
            "impacts": [
              { "trait": "withdrawal", "value": 2 },
              { "trait": "enthusiasm", "value": -1 }
            ]
          },
          {
            "text": "Busy office with lots of collaboration",
            "impacts": [
              { "trait": "withdrawal", "value": -2 },
              { "trait": "enthusiasm", "value": 2 }
            ]
          },
          {
            "text": "Flexible - adapt to what's needed",
            "impacts": [
              { "trait": "openness", "value": 1 },
              { "trait": "politeness", "value": 1 }
            ]
          }
        ]
      },
      {
        "id": 14,
        "text": "When a junior developer asks for help...",
        "options": [
          {
            "text": "Write a detailed guide with examples",
            "impacts": [
              { "trait": "compassion", "value": 2 },
              { "trait": "industriousness", "value": 1 }
            ]
          },
          {
            "text": "Tell them to RTFM",
            "impacts": [
              { "trait": "compassion", "value": -2 },
              { "trait": "politeness", "value": -2 }
            ]
          },
          {
            "text": "Give them hints to figure it out",
            "impacts": [
              { "trait": "intellect", "value": 1 },
              { "trait": "compassion", "value": 1 }
            ]
          }
        ]
      },
      {
        "id": 15,
        "text": "Your code optimization strategy is...",
        "options": [
          {
            "text": "Optimize everything, always",
            "impacts": [
              { "trait": "industriousness", "value": 2 },
              { "trait": "intellect", "value": 1 }
            ]
          },
          {
            "text": "Only when there's a proven need",
            "impacts": [
              { "trait": "orderliness", "value": 1 },
              { "trait": "intellect", "value": 1 }
            ]
          },
          {
            "text": "That's what better hardware is for",
            "impacts": [
              { "trait": "industriousness", "value": -2 },
              { "trait": "intellect", "value": -1 }
            ]
          }
        ]
      },
      {
        "id": 16,
        "text": "Your git commit messages are...",
        "options": [
          {
            "text": "Detailed explanations with context",
            "impacts": [
              { "trait": "orderliness", "value": 2 },
              { "trait": "compassion", "value": 1 }
            ]
          },
          {
            "text": "'fix stuff'",
            "impacts": [
              { "trait": "orderliness", "value": -2 },
              { "trait": "politeness", "value": -1 }
            ]
          },
          {
            "text": "🚀 Emoji-based storytelling",
            "impacts": [
              { "trait": "enthusiasm", "value": 2 },
              { "trait": "openness", "value": 1 }
            ]
          }
        ]
      },
      {
        "id": 17,
        "text": "When faced with legacy code...",
        "options": [
          {
            "text": "Rewrite it all from scratch",
            "impacts": [
              { "trait": "assertiveness", "value": 2 },
              { "trait": "enthusiasm", "value": 1 }
            ]
          },
          {
            "text": "Document and maintain it carefully",
            "impacts": [
              { "trait": "industriousness", "value": 2 },
              { "trait": "orderliness", "value": 1 }
            ]
          },
          {
            "text": "If it works, don't touch it",
            "impacts": [
              { "trait": "openness", "value": -2 },
              { "trait": "industriousness", "value": -1 }
            ]
          }
        ]
      },
          {
            "id": 18,
            "text": "Your IDE color scheme is...",
            "options": [
              {
                "text": "Carefully curated for optimal contrast and readability",
                "impacts": [
                  { "trait": "orderliness", "value": 2 },
                  { "trait": "industriousness", "value": 1 }
                ]
              },
              {
                "text": "Dark mode everything - I am one with the darkness",
                "impacts": [
                  { "trait": "withdrawal", "value": 1 },
                  { "trait": "openness", "value": -1 }
                ]
              },
              {
                "text": "Rainbow colors everywhere - coding should be fun!",
                "impacts": [
                  { "trait": "enthusiasm", "value": 2 },
                  { "trait": "openness", "value": 1 }
                ]
              }
            ]
          },
          {
            "id": 19,
            "text": "When someone suggests using regex, you...",
            "options": [
              {
                "text": "Write a 50-character one-liner that nobody understands",
                "impacts": [
                  { "trait": "intellect", "value": 2 },
                  { "trait": "compassion", "value": -2 },
                  { "trait": "assertiveness", "value": 1 }
                ]
              },
              {
                "text": "Break it into small, commented patterns",
                "impacts": [
                  { "trait": "orderliness", "value": 2 },
                  { "trait": "compassion", "value": 1 }
                ]
              },
              {
                "text": "Find another way - regex is forbidden magic",
                "impacts": [
                  { "trait": "openness", "value": -2 },
                  { "trait": "volatility", "value": 1 }
                ]
              }
            ]
          },
          {
            "id": 20,
            "text": "Your stance on meetings is...",
            "options": [
              {
                "text": "Essential for alignment - let's schedule more!",
                "impacts": [
                  { "trait": "enthusiasm", "value": 1 },
                  { "trait": "withdrawal", "value": -2 },
                  { "trait": "politeness", "value": 1 }
                ]
              },
              {
                "text": "Could have been an email",
                "impacts": [
                  { "trait": "withdrawal", "value": 2 },
                  { "trait": "enthusiasm", "value": -1 }
                ]
              },
              {
                "text": "Only if there's free food",
                "impacts": [
                  { "trait": "industriousness", "value": -1 },
                  { "trait": "politeness", "value": -1 },
                  { "trait": "openness", "value": 1 }
                ]
              }
            ]
          }
    ] as Question[]
