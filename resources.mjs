// Original short descriptions; publisher text and books are not bundled.
const who='https://www.who.int/publications/i/item/9789240003927';
const cci='https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/';
const nhs='https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/';
const item=(id,title,publisher,url,tags,format,description,languages=['English'])=>({id,title,publisher,url,tags,format,description,languages,cost:'Free access; no account required for listed material',access:'Open publisher page for reading or available downloads',rights:'Link only. Publisher terms apply; free access does not imply permission to redistribute.',reviewed:'2026-10-17'});
export const resources=[
 item('who-stress','Doing What Matters in Times of Stress','WHO',who,['stress','grounding','motivation'],'Illustrated book + audio','A practical stress-skills guide. The publisher provides multiple language editions and accompanying audio.'),
 item('who-urdu','Doing What Matters — Urdu edition / اردو','WHO',who,['stress','grounding'],'Illustrated book','Open the official page and choose Urdu in the language list. Urdu edition is listed; the linked download was not independently retrieved.',['Urdu']),
 item('cci-low','Back from the Bluez','CCI, Government of Western Australia',cci+'Depression',['low mood','motivation'],'Workbook','Modules and worksheets for understanding low mood and building helpful activities.'),
 item('cci-worry','What? Me Worry?','CCI, Government of Western Australia',cci+'Worry-and-Rumination',['worry','stress'],'Workbook','Work through worry, uncertainty and practical problem solving at your own pace.'),
 item('cci-anxiety','Understanding anxiety','CCI, Government of Western Australia',cci+'Anxiety',['worry','stress'],'Worksheets','Information and reflection sheets about anxiety and coping.'),
 item('cci-panic','When Panic Attacks','CCI, Government of Western Australia',cci+'Panic',['panic','worry'],'Workbook','Education about panic and associated patterns. Read the guidance before attempting exercises; seek professional support if unsure.'),
 item('cci-kind','Building Self-Compassion','CCI, Government of Western Australia',cci+'Self-Compassion',['self-kindness','low mood'],'Workbook','Step-by-step learning for responding to yourself with more care.'),
 item('cci-esteem','Improving Self-Esteem','CCI, Government of Western Australia',cci+'Self-Esteem',['self-kindness','confidence'],'Workbook','Structured reading and worksheets about self-critical beliefs.'),
 item('cci-distress','Facing Your Feelings','CCI, Government of Western Australia',cci+'Tolerating-Distress',['grounding','stress'],'Workbook','Explore emotional discomfort and ways of responding to difficult feelings.'),
 item('cci-start','Put Off Procrastinating','CCI, Government of Western Australia',cci+'Procrastination',['motivation','learning'],'Workbook','Practical ways to understand task avoidance and take manageable steps.'),
 item('nhs-breathe','Breathing exercises for stress','NHS',nhs+'breathing-exercises-for-stress/',['stress','grounding','panic'],'Guide','Comfortable, unforced breathing guidance. Adapt to your comfort and stop if it makes you feel worse.'),
 item('nhs-five','Five steps to mental wellbeing','NHS',nhs+'five-steps-to-mental-wellbeing/',['connection','movement','learning','motivation'],'Guide','Ideas for connection, activity, learning, kindness and attention to the present.'),
 item('nhs-sleep','Sleep problems','NHS','https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/',['sleep','low mood'],'Guide','Information about sleep difficulties, routines and when to seek further support.')
];
export const activities=[
 {id:'move',label:'A little movement',text:'If comfortable for your body, try a short walk indoors or a gentle seated movement.',source:'nhs-five'},
 {id:'connect',label:'A small connection',text:'Send a kind message or speak to someone you feel safe with.',source:'nhs-five'},
 {id:'learn',label:'Learn something small',text:'Choose a short reading or a skill you enjoy. A few minutes is enough for today.',source:'nhs-five'},
 {id:'kind',label:'An act of kindness',text:'Thank someone or offer a manageable bit of help, while respecting your own limits.',source:'nhs-five'},
 {id:'notice',label:'Notice the present',text:'Pause and notice one colour, one sound and the surface supporting you.',source:'nhs-five'},
 {id:'rest',label:'Make space for rest',text:'Choose one gentle wind-down step, such as putting your phone aside before bed.',source:'nhs-sleep'}
];
