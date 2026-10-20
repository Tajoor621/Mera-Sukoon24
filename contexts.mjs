// Optional self-selected situations, not assumptions about any community.
export const contexts=[
  {
    "id": "joint-family",
    "title": "Joint-family living, privacy and household work",
    "explanation": "Shared homes can offer support while leaving little private space. Disagreement about chores, visitors or decisions does not by itself tell us anyone’s intentions. Focus on a specific arrangement and who has the freedom to disagree.",
    "actions": [
      "Choose one recurring difficulty, such as entering your room without asking, rather than judging the whole family.",
      "If safe, ask for one specific change: knocking, a quiet period or a clearly shared task.",
      "Agree responsibilities with the people doing the work; include rest and paid work when dividing tasks.",
      "Review the arrangement after a manageable period. If refusal brings threats, use confidential individual support instead."
    ],
    "script": "I want us to live together respectfully. Could we agree to knock before entering and share this task more fairly?",
    "question": "Which small change would give you more privacy or rest?"
  },
  {
    "id": "in-laws",
    "title": "In-law expectations and couple boundaries",
    "explanation": "Loyalty to relatives and care for a partner can coexist. Respect does not require surrendering privacy, income or decisions. The app cannot settle a dispute from one account.",
    "actions": [
      "Describe the particular request and its effect without labelling a whole family.",
      "If safe, discuss your own limits with your partner before approaching relatives.",
      "Offer one boundary you can maintain, such as agreed visiting times or keeping private conversations private.",
      "If boundaries bring punishment, isolation or threats, seek private support rather than a family confrontation."
    ],
    "script": "We care about family relationships. We need to make this decision privately and will share what we are comfortable sharing.",
    "question": "What boundary protects you while allowing the contact you actually want?"
  },
  {
    "id": "marriage-choice",
    "title": "Marriage pressure, consent or dowry demands",
    "mediationUnsafe": true,
    "explanation": "An arranged introduction and forced marriage are different: consent must be freely given and remain revocable. Threats, confinement or financial demands tied to marriage deserve safety-focused support. Neither family honour nor tradition removes your right to choose.",
    "actions": [
      "Consider whether you can freely say no or delay without being harmed. Do not test this by confronting someone unsafe.",
      "If safe, contact a trusted person privately who will not pass information to those applying pressure.",
      "Seek confidential specialist safeguarding or forced-marriage support appropriate to your location; legal options vary.",
      "If travel, documents or communications are controlled, discuss a safe plan with that specialist. For immediate danger, use urgent human help."
    ],
    "script": "Only if safe to say: I need time and a choice I can make freely. I am not agreeing under pressure.",
    "question": "Who could support your choices without increasing the risk?"
  },
  {
    "id": "reputation",
    "title": "“Log kya kahenge”, gossip and reputation pressure",
    "explanation": "Fear of gossip or disappointing relatives can carry real social costs. You can take those costs seriously while deciding what information you share and which expectations you accept.",
    "actions": [
      "Separate your own needs from the reaction you predict others may have.",
      "Choose a short, repeatable answer rather than explaining private details to everyone.",
      "Share sensitive decisions only with people you trust; you do not owe public disclosure.",
      "Find one supportive person or setting, and review whether secrecy or contact is protecting you or increasing isolation."
    ],
    "script": "I appreciate your concern. This is a personal decision, and I am not discussing the details.",
    "question": "Whose opinion matters to your values, rather than only to your fear?"
  },
  {
    "id": "education",
    "title": "Exams, comparison and career expectations",
    "explanation": "Family hopes, competitive exams and comparison with cousins can make a result feel like a judgement on your worth. A result provides limited information about one task and does not define a person’s future.",
    "actions": [
      "Name the immediate task: preparing, recovering from a result or choosing a path.",
      "Choose one realistic study or career action with breaks, food and sleep protected.",
      "Ask a teacher, adviser or trusted adult about actual options and deadlines rather than relying on comparisons.",
      "If safe, explain what support helps. If a young person faces humiliation or violence, involve a safe adult outside that situation."
    ],
    "script": "I know this matters. Comparing me with others makes it harder to focus. Please help me plan the next step instead.",
    "question": "What is the next decision you can make with reliable information?"
  },
  {
    "id": "remittances",
    "title": "Remittances, breadwinner guilt and family requests",
    "explanation": "Supporting relatives across households or borders can create competing needs. Your available income and essential living costs matter; a request is not proof that you can afford it.",
    "actions": [
      "List essential housing, food, health and dependent-care costs before promising money.",
      "Choose an affordable amount or explain that none is available; avoid borrowing just to hide financial strain.",
      "If safe, discuss a predictable contribution and what happens when income changes.",
      "For debt or financial control, seek free qualified support for your location. Never share banking passwords to prove loyalty."
    ],
    "script": "This is the amount I can offer after essential costs. I cannot promise more or take on new debt.",
    "question": "What contribution is sustainable without losing your own essentials?"
  },
  {
    "id": "migration",
    "title": "Migration, diaspora belonging and distance from home",
    "explanation": "Moving countries or living between cultures can bring opportunity alongside loss, loneliness and divided expectations. There is no single correct way to belong, and the app cannot give immigration advice.",
    "actions": [
      "Choose one manageable connection to people, language or routines that matter to you.",
      "Set contact times across time zones that leave room for sleep and daily responsibilities.",
      "Look for a safe local connection without feeling obliged to disclose personal circumstances.",
      "For immigration, employment or housing decisions, use qualified local advice. If someone controls documents or threatens your status, seek confidential specialist support."
    ],
    "script": "I miss home and I am also building a life here. Can we agree a time to talk that works for both of us?",
    "question": "What would help you feel more connected this week?"
  },
  {
    "id": "colourism",
    "title": "Colourism, body comments and marriage comparisons",
    "explanation": "Comments about skin tone, weight, height or marriageability can be hurtful even when described as concern or a joke. Appearance does not establish health, character or a person’s worth.",
    "actions": [
      "Name the comment and its effect without debating whether your appearance deserves respect.",
      "If safe, ask for body and skin-tone comments to stop; leave or change the subject when possible.",
      "As a witness, interrupt the comment calmly and check privately what support the person wants.",
      "If comments are affecting eating, health or daily functioning, seek qualified support. Avoid skin-lightening or restrictive-diet advice from the app."
    ],
    "script": "Please do not comment on my body or skin tone. We can talk about something else.",
    "question": "What response would protect your dignity without exposing you to more harm?"
  },
  {
    "id": "care-duty",
    "title": "Elder care, sibling roles and gendered care expectations",
    "explanation": "Care can express love and still exhaust the person providing it. Being a daughter, son, spouse or daughter-in-law does not determine unlimited capacity. Preserve the older person’s choices wherever possible.",
    "actions": [
      "List care tasks, time, costs and what the older person wants.",
      "If safe, ask relatives for specific tasks or contributions rather than a general promise to help.",
      "Plan a realistic break and a backup for essential care; do not leave someone dependent without necessary support.",
      "Seek health or social-care advice for new confusion, unmet needs or unsafe care arrangements. Sudden confusion needs urgent medical assessment."
    ],
    "script": "I can manage these tasks. We need someone else to take these duties so care remains sustainable.",
    "question": "Which task could someone else take on first?"
  },
  {
    "id": "money-control",
    "title": "Financial control, restricted movement or family threats",
    "mediationUnsafe": true,
    "explanation": "Control over money, movement, documents or contact can restrict someone’s choices. Abuse can happen in any family or community. You do not need to prove intent or win a debate before seeking support.",
    "actions": [
      "Prioritise what helps you stay safe now; do not confront the person controlling you as an app exercise.",
      "If safe, speak privately with a trusted person or specialist support service outside the controlling relationship.",
      "Consider device and communication privacy; private browsing alone cannot guarantee secrecy on a monitored device.",
      "Discuss practical safety options with a specialist. Do not collect evidence, move documents or announce plans if doing so could increase danger."
    ],
    "script": "For a safe supporter: I need confidential help with someone controlling my choices. Please check with me before contacting anyone.",
    "question": "Is there a safe way to reach someone who will respect your privacy?"
  },
  {
    "id": "work-hierarchy",
    "title": "Workplace hierarchy, language bias and discrimination",
    "explanation": "Differences in seniority, accent, caste, ethnicity or migration status can affect how safe it feels to speak up. A harmful incident deserves attention, while a legal finding requires facts and appropriate local advice.",
    "actions": [
      "Separate the observable event from assumptions about motive, while acknowledging its effect on you.",
      "If safe, keep a factual private note; avoid collecting or storing material that increases danger.",
      "Choose a response proportionate to the risk: a clear request, trusted colleague, union or confidential adviser.",
      "Check local reporting and employment options before acting; the app cannot promise confidentiality or protection from retaliation."
    ],
    "script": "When my accent was mocked in that meeting, I felt undermined. Please keep feedback about the work.",
    "question": "Which route offers useful support with the least risk to you?"
  },
  {
    "id": "heat-crowding",
    "title": "Heat, crowded housing, noise and power cuts",
    "explanation": "Heat, noise, interrupted sleep and lack of space can make coping harder. These conditions are not a personal failure. Practical relief may matter more than asking yourself to stay calm.",
    "actions": [
      "Check immediate physical safety. Severe symptoms, fainting or sudden confusion need urgent medical help; do not delay for a calming exercise.",
      "Where feasible, move to a safer cooler space, reduce exertion and follow local heat guidance and any personal medical fluid advice.",
      "Choose one achievable change, such as a quieter rest period or sharing access to a cooler room. Never use generators or fuel-burning devices indoors.",
      "Ask trusted local people about safe relief or essential support during outages; do not take unsafe journeys or assume services are available."
    ],
    "script": "The heat and noise are affecting my rest. Could we agree a quieter period or share the cooler space?",
    "question": "What practical change could make your surroundings safer or more comfortable now?"
  },
  {
    "id": "disaster",
    "title": "Floods, displacement and disrupted community life",
    "mediationUnsafe": true,
    "explanation": "After a disaster, housing, medicine, documents and contact with loved ones may take priority over reflection. Reactions differ; no one should be pressured to retell traumatic events.",
    "actions": [
      "Follow verified local safety instructions and avoid floodwater, damaged structures or unsafe electrical equipment.",
      "Identify the most urgent need: shelter, water, medical care, contact or protection. Ask nearby trusted responders for help.",
      "Reconnect with a safe person if possible; share your location only through a safe channel.",
      "Choose one small routine when basic safety allows. Seek qualified support for continuing distress, without forcing detailed retelling."
    ],
    "script": "I need help with this immediate need first. I do not want to discuss the whole event right now.",
    "question": "What is the most urgent practical need you can safely ask someone to help with?"
  },
  {
    "id": "faith-family",
    "title": "Faith differences, family customs and personal choice",
    "explanation": "Faith, culture and family customs can overlap without being identical. People in the same household may practise differently. Sukoon will not decide belief or add devotional comfort unless you request it.",
    "actions": [
      "Identify the specific expectation and what you need: space, a change in routine or freedom to decline.",
      "If safe, discuss that one need without trying to settle a whole theological disagreement.",
      "Choose a respectful supporter who will listen without threatening or pressuring you.",
      "If disagreement brings violence, confinement or retaliation, use confidential individual support instead of joint discussion."
    ],
    "script": "I respect that this matters to you. I need room to make my own choice without threats or shame.",
    "question": "What kind of support would respect both your safety and your choices?"
  },
  {
    "id": "fertility-pressure",
    "title": "Fertility questions, son preference and parenting pressure",
    "explanation": "Questions about pregnancy, a child’s sex or family size can intrude on private decisions. Neither infertility nor a child’s sex is a basis for blaming or devaluing someone. Medical questions need qualified care.",
    "actions": [
      "Decide which details, if any, you want to share; a brief refusal is enough.",
      "If safe, agree with your partner or a trusted supporter how to respond to repeated questions.",
      "Protect time together from constant fertility discussion and make room for different feelings.",
      "Seek qualified medical or emotional support if wanted. If pressure becomes coercion or threatens safety, seek confidential specialist help."
    ],
    "script": "Our family plans are private. Please do not ask for updates or make comments about having a son.",
    "question": "What boundary would make the next family conversation easier?"
  },
  {
    "id": "rural-access",
    "title": "Rural isolation, transport limits and lack of privacy",
    "explanation": "Distance, cost, connectivity and being recognised locally can make support harder to reach. Difficulty accessing care is not a lack of effort. Offline self-help cannot replace urgent or specialist care.",
    "actions": [
      "Choose the most pressing need and identify what is realistically reachable.",
      "Ask a trusted person about safe transport, a private place to talk or an available public service.",
      "If using a shared device, consider who can view it; session-only storage does not hide your screen or browser history.",
      "Use one offline coping tool while arranging human support when needed. Do not delay urgent help while waiting for internet access."
    ],
    "script": "I need a private place to talk and help finding a service I can actually reach.",
    "question": "Which barrier could a trusted person help you reduce first?"
  }
];
const byId=new Map(contexts.map(context=>[context.id,context]));
export function contextFor(id){return byId.get(id)||null;}
