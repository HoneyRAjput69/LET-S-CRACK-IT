export type NoteSeed = {
  slug: string;
  examSlug: string | null;
  subject: string;
  title: string;
  summary: string;
  readMinutes: number;
  tags: string[];
  content: string;
};

export const noteSeeds: NoteSeed[] = [
  {
    slug: "nda-maths-trigonometry-formulas",
    examSlug: "nda",
    subject: "Mathematics",
    title: "Trigonometry – Complete Formula Sheet for NDA",
    summary: "All identities, compound angles, multiple angles and heights & distances tricks asked repeatedly in NDA Paper I.",
    readMinutes: 12,
    tags: ["NDA", "Formulas", "High Weightage"],
    content: `# Trigonometry Formula Sheet

## 1. Fundamental Identities
- sin²θ + cos²θ = 1
- 1 + tan²θ = sec²θ
- 1 + cot²θ = cosec²θ

## 2. Standard Values
| θ | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| sin | 0 | 1/2 | 1/√2 | √3/2 | 1 |
| cos | 1 | √3/2 | 1/√2 | 1/2 | 0 |
| tan | 0 | 1/√3 | 1 | √3 | ∞ |

## 3. Compound Angles
- sin(A ± B) = sinA cosB ± cosA sinB
- cos(A ± B) = cosA cosB ∓ sinA sinB
- tan(A ± B) = (tanA ± tanB)/(1 ∓ tanA tanB)

## 4. Multiple Angles
- sin2A = 2sinA cosA = 2tanA/(1+tan²A)
- cos2A = cos²A − sin²A = 1 − 2sin²A = 2cos²A − 1
- tan2A = 2tanA/(1 − tan²A)
- sin3A = 3sinA − 4sin³A
- cos3A = 4cos³A − 3cosA

## 5. Sum to Product
- sinC + sinD = 2 sin((C+D)/2) cos((C−D)/2)
- cosC + cosD = 2 cos((C+D)/2) cos((C−D)/2)
- cosC − cosD = −2 sin((C+D)/2) sin((C−D)/2)

## 6. Properties of Triangle
- Sine Rule: a/sinA = b/sinB = c/sinC = 2R
- Cosine Rule: cosA = (b² + c² − a²)/2bc
- Area = ½ bc sinA = √[s(s−a)(s−b)(s−c)]

## 7. Inverse Trigonometry
- sin⁻¹x + cos⁻¹x = π/2
- tan⁻¹x + tan⁻¹y = tan⁻¹[(x+y)/(1−xy)], xy < 1

## 8. Heights & Distances – Exam Tricks
- Angle of elevation 30° → height = distance/√3
- Angle 45° → height = distance
- Angle 60° → height = distance × √3
- When angle doubles from 30° to 60° while walking distance d toward the tower: height = d√3/2

> **NDA Pattern:** 20–25 questions in Paper I come from trigonometry. Focus on identities + inverse trigonometry + H&D.`,
  },
  {
    slug: "nda-maths-calculus-quick-revision",
    examSlug: "nda",
    subject: "Mathematics",
    title: "Calculus Quick Revision – Limits, Derivatives, Integrals",
    summary: "Standard limits, differentiation rules, integration formulas and application-based shortcuts.",
    readMinutes: 10,
    tags: ["NDA", "CDS", "Calculus"],
    content: `# Calculus Quick Revision

## Standard Limits
- lim(x→0) sinx/x = 1
- lim(x→0) tanx/x = 1
- lim(x→0) (eˣ − 1)/x = 1
- lim(x→0) (1+x)^(1/x) = e
- lim(x→a) (xⁿ − aⁿ)/(x − a) = n·aⁿ⁻¹

## Differentiation
| f(x) | f'(x) |
|---|---|
| xⁿ | n xⁿ⁻¹ |
| eˣ | eˣ |
| ln x | 1/x |
| sin x | cos x |
| cos x | −sin x |
| tan x | sec²x |
| sec x | sec x tan x |
| sin⁻¹x | 1/√(1−x²) |
| tan⁻¹x | 1/(1+x²) |

**Rules:** Product (uv)' = u'v + uv'; Quotient (u/v)' = (u'v − uv')/v²; Chain rule.

## Integration
- ∫xⁿ dx = xⁿ⁺¹/(n+1) + C
- ∫1/x dx = ln|x| + C
- ∫eˣ dx = eˣ + C
- ∫sin x dx = −cos x + C
- ∫sec²x dx = tan x + C
- ∫1/(1+x²) dx = tan⁻¹x + C
- ∫1/√(1−x²) dx = sin⁻¹x + C
- ∫tan x dx = ln|sec x| + C

## Applications
- **Increasing** if f'(x) > 0, **decreasing** if f'(x) < 0
- **Maxima/Minima**: f'(x)=0; f''(x)<0 → max, f''(x)>0 → min
- **Area under curve** = ∫ₐᵇ y dx
- **Tangent slope** = dy/dx at the point; normal slope = −1/(dy/dx)

## Differential Equations
- Order = highest derivative; Degree = power of highest derivative (after removing radicals)
- Variable separable: f(y)dy = g(x)dx
- Linear: dy/dx + Py = Q → I.F. = e^∫P dx`,
  },
  {
    slug: "cds-english-grammar-rules",
    examSlug: "cds",
    subject: "English",
    title: "50 Golden Grammar Rules for Spotting Errors",
    summary: "The most-tested subject-verb agreement, pronoun, preposition and article rules used in CDS, AFCAT & NDA English.",
    readMinutes: 15,
    tags: ["CDS", "AFCAT", "NDA", "Grammar"],
    content: `# Golden Grammar Rules

## Subject–Verb Agreement
1. Two singular subjects joined by **and** take a plural verb. *Ram and Shyam are soldiers.*
2. **Each, every, either, neither, one of, none of** → singular verb.
3. With **as well as, along with, together with, in addition to** – the verb agrees with the first subject.
4. **Neither…nor / Either…or** – verb agrees with the nearer subject.
5. Collective nouns (army, committee, jury) take singular verb unless individual members are emphasised.
6. **A number of** + plural verb; **The number of** + singular verb.
7. Uncountable nouns: *advice, information, furniture, scenery, luggage, news, hair, poetry* – always singular, no 'a/an', no plural 's'.

## Pronouns
8. **Let** is followed by objective case: *Let him go.*
9. Order of pronouns: 231 for good things (You, he and I), 123 for bad things (I, you and he).
10. **Than/As** comparisons: *He is taller than I (am).*
11. Reflexive pronouns must not be used with *enjoy, absent, avail* without object → *He enjoyed himself.*
12. **Who** – subject; **Whom** – object; **Whose** – possession.

## Adjectives & Adverbs
13. **Senior, junior, superior, inferior, prior, prefer** take **to**, not *than*.
14. Do not use double comparatives: ~~more better~~.
15. **Elder/Eldest** for family members; **Older/Oldest** for others.
16. **Little** (hardly any), **A little** (some), **The little** (all that there is).
17. **Few / Little** – countable / uncountable.
18. **Hardly, scarcely** are followed by **when**; **No sooner** by **than**.

## Prepositions
19. Good **at**, afraid **of**, angry **with** (person), angry **at** (thing), die **of** (disease), die **from** (cause).
20. **Since** – point of time; **For** – period of time.
21. **Between** – two; **Among** – more than two.
22. **In** – large place; **At** – small place / specific point.
23. **By** – deadline; **Within** – before time ends.

## Articles
24. **The** with superlatives, ordinals, rivers, oceans, mountain ranges, newspapers, holy books, unique objects.
25. No article before languages, meals, games, diseases (except *the flu*).
26. **An** before vowel *sound*: *an hour, an MP, a university, a European.*

## Tenses
27. Past time markers (yesterday, ago, last year) → simple past, never present perfect.
28. **Since/For** with present perfect continuous for ongoing actions.
29. Conditional Type 2: *If I were you, I would…*
30. Time clauses (when, as soon as, until) take present tense for future meaning.

## Common Confusions
- *Lie–lay–lain* (recline) vs *Lay–laid–laid* (put)
- *Affect* (verb) vs *Effect* (noun)
- *Advice* (noun) vs *Advise* (verb)
- *Principal* (head) vs *Principle* (rule)
- *Stationary* (still) vs *Stationery* (paper)

> **Tip:** In spotting-error questions, first check the verb (agreement & tense), then the preposition, then the noun form.`,
  },
  {
    slug: "vocabulary-500-words-defence",
    examSlug: null,
    subject: "English",
    title: "High-Frequency Vocabulary – Synonyms & Antonyms",
    summary: "Previous-year repeated words with meanings, synonyms and antonyms for CDS, AFCAT, NDA and TA.",
    readMinutes: 20,
    tags: ["Vocabulary", "All Exams"],
    content: `# High-Frequency Vocabulary

| Word | Meaning | Synonym | Antonym |
|---|---|---|---|
| Abate | to lessen | diminish | intensify |
| Audacious | bold | daring | timid |
| Benevolent | kind | charitable | malevolent |
| Candid | frank | honest | deceitful |
| Callous | insensitive | heartless | compassionate |
| Dauntless | fearless | intrepid | cowardly |
| Diligent | hardworking | industrious | lazy |
| Eloquent | fluent speaker | articulate | inarticulate |
| Ephemeral | short-lived | transient | permanent |
| Frugal | thrifty | economical | extravagant |
| Gallant | brave | valiant | cowardly |
| Gregarious | sociable | outgoing | reclusive |
| Hostile | unfriendly | antagonistic | amicable |
| Impeccable | flawless | perfect | faulty |
| Indomitable | unconquerable | invincible | weak |
| Jubilant | joyful | elated | dejected |
| Lethargic | sluggish | inactive | energetic |
| Meticulous | careful | precise | careless |
| Nonchalant | unconcerned | casual | anxious |
| Obsolete | outdated | archaic | modern |
| Perilous | dangerous | hazardous | safe |
| Prudent | wise | judicious | reckless |
| Resilient | tough | flexible | fragile |
| Sagacious | wise | shrewd | foolish |
| Stoic | unemotional | impassive | emotional |
| Tenacious | persistent | determined | yielding |
| Ubiquitous | everywhere | omnipresent | rare |
| Valiant | brave | heroic | cowardly |
| Vigilant | watchful | alert | negligent |
| Zealous | passionate | fervent | apathetic |

## Military Vocabulary
- **Reconnaissance** – survey of enemy territory
- **Ambush** – surprise attack from concealment
- **Camouflage** – disguise to blend with surroundings
- **Sortie** – a single mission by an aircraft
- **Flotilla** – a small fleet of ships
- **Garrison** – troops stationed in a fortress
- **Insurgency** – armed rebellion
- **Logistics** – organisation of supplies and personnel
- **Manoeuvre** – planned movement of forces
- **Salvo** – simultaneous discharge of weapons

## One-Word Substitutions
- One who loves his country – **Patriot**
- One who betrays his country – **Traitor**
- Soldier who fights for money – **Mercenary**
- One who dies for a cause – **Martyr**
- Government by military – **Stratocracy**
- Killing of a king – **Regicide**
- A person who is new to a profession – **Novice**
- Fear of heights – **Acrophobia**
- One who can use both hands – **Ambidextrous**
- Speech without preparation – **Extempore**`,
  },
  {
    slug: "indian-armed-forces-structure",
    examSlug: null,
    subject: "Defence",
    title: "Structure of Indian Armed Forces, Ranks & Commands",
    summary: "Complete overview of Army, Navy, Air Force commands, rank equivalence, training academies and mottos.",
    readMinutes: 14,
    tags: ["Defence GK", "SSB", "All Exams"],
    content: `# Indian Armed Forces – Structure

**Supreme Commander:** President of India
**Chief of Defence Staff (CDS):** Heads Department of Military Affairs (created 2019)
**Integrated Defence Staff HQ:** New Delhi

## Indian Army (est. 1 April 1895 · Army Day 15 Jan)
Motto: *Seva Paramo Dharma* (Service Before Self)
**Commands (7):**
| Command | HQ |
|---|---|
| Northern | Udhampur |
| Western | Chandimandir |
| South Western | Jaipur |
| Southern | Pune |
| Central | Lucknow |
| Eastern | Kolkata |
| Training (ARTRAC) | Shimla |

## Indian Navy (Navy Day 4 Dec)
Motto: *Sham No Varunah*
**Commands:** Western (Mumbai), Eastern (Visakhapatnam), Southern (Kochi – training), Andaman & Nicobar (tri-service, Port Blair)

## Indian Air Force (est. 8 Oct 1932)
Motto: *Nabha Sparsham Deeptam* (Touch the Sky with Glory)
**Commands:** Western (Delhi), South Western (Gandhinagar), Central (Prayagraj), Eastern (Shillong), Southern (Thiruvananthapuram), Training (Bengaluru), Maintenance (Nagpur)

## Rank Equivalence (Officers)
| Army | Navy | Air Force |
|---|---|---|
| Field Marshal | Admiral of the Fleet | Marshal of the IAF |
| General | Admiral | Air Chief Marshal |
| Lt General | Vice Admiral | Air Marshal |
| Major General | Rear Admiral | Air Vice Marshal |
| Brigadier | Commodore | Air Commodore |
| Colonel | Captain | Group Captain |
| Lt Colonel | Commander | Wing Commander |
| Major | Lt Commander | Squadron Leader |
| Captain | Lieutenant | Flight Lieutenant |
| Lieutenant | Sub Lieutenant | Flying Officer |

**Five-star honours:** Field Marshal – Sam Manekshaw (1973), K.M. Cariappa (1986). Marshal of the IAF – Arjan Singh (2002).

## Training Academies
- **NDA** – Khadakwasla, Pune (tri-service)
- **IMA** – Dehradun
- **OTA** – Chennai & Gaya
- **INA** – Ezhimala, Kerala
- **AFA** – Dundigal, Hyderabad
- **Rashtriya Indian Military College** – Dehradun
- **Army War College** – Mhow
- **Defence Services Staff College** – Wellington

## Gallantry Awards (order of precedence)
**Wartime:** Param Vir Chakra → Maha Vir Chakra → Vir Chakra
**Peacetime:** Ashoka Chakra → Kirti Chakra → Shaurya Chakra
**Distinguished service:** Param Vishisht Seva Medal, Ati Vishisht Seva Medal, Vishisht Seva Medal
**Sena / Nao Sena / Vayu Sena Medal** – gallantry/distinguished service

## Key Wars & Operations
- 1947–48 J&K Ops · 1961 Op Vijay (Goa) · 1962 Sino-Indian War
- 1965 Op Riddle/Ablaze · 1971 Op Trident, Python, Cactus Lily · Vijay Diwas 16 Dec
- 1984 Op Meghdoot (Siachen) · 1987 Op Pawan (IPKF, Sri Lanka) · 1988 Op Cactus (Maldives)
- 1999 Op Vijay & Op Safed Sagar (Kargil) · Kargil Vijay Diwas 26 July
- 2016 Surgical Strikes · 2019 Op Bandar (Balakot) · 2025 Op Sindoor`,
  },
  {
    slug: "missiles-and-weapon-systems-india",
    examSlug: "afcat",
    subject: "Defence",
    title: "Indian Missiles, Aircraft & Weapon Systems",
    summary: "IGMDP missiles, indigenous platforms, fighter fleet, naval vessels and recent inductions – a must-do for AFCAT & CAPF GA.",
    readMinutes: 12,
    tags: ["AFCAT", "CAPF", "Current Affairs"],
    content: `# Indian Missiles & Weapon Systems

## IGMDP (1983, Dr. A.P.J. Abdul Kalam)
| Missile | Type | Range |
|---|---|---|
| Prithvi | SRBM (surface-to-surface) | 150–350 km |
| Agni I–V | Ballistic (IRBM/ICBM) | 700 – 5000+ km |
| Trishul | Short-range SAM | 9 km |
| Akash | Medium-range SAM | 25–30 km |
| Nag | Anti-tank guided missile | 4 km |

## Other Key Missiles
- **BrahMos** – Supersonic cruise missile (India–Russia JV), Mach 2.8, 290–800 km
- **Nirbhay** – Subsonic long-range cruise missile
- **Shaurya / K-15 Sagarika** – Submarine-launched
- **K-4** – SLBM, 3500 km (for INS Arihant class)
- **Astra** – Beyond-visual-range air-to-air missile
- **Helina / Dhruvastra** – Helicopter-launched ATGM
- **Pralay** – Tactical quasi-ballistic missile
- **Agni-Prime** – New-generation canisterised
- **Mission Shakti (2019)** – Anti-satellite (ASAT) test
- **Prithvi Air Defence / AAD** – Ballistic Missile Defence programme
- **S-400 Triumf** – Russian long-range SAM (Sudarshan Chakra)

## Indian Air Force Fleet
**Fighters:** Su-30MKI, Rafale, Mirage 2000, MiG-29, Jaguar, Tejas (LCA Mk1/Mk1A)
**Transport:** C-17 Globemaster III, C-130J Super Hercules, IL-76, An-32, C-295
**Helicopters:** Apache AH-64E, Chinook CH-47, Mi-17, Dhruv (ALH), Rudra, Prachand (LCH)
**AEW&C:** Netra (indigenous), Phalcon (IL-76 based)
**Trainers:** Pilatus PC-7, Hawk, HTT-40

## Indian Navy Platforms
- **Aircraft Carriers:** INS Vikramaditya, INS Vikrant (indigenous, 2022)
- **Nuclear Submarines:** INS Arihant, INS Arighaat (SSBN)
- **Scorpene (Project 75):** Kalvari, Khanderi, Karanj, Vela, Vagir, Vagsheer
- **Destroyers:** Visakhapatnam class (P-15B), Kolkata class (P-15A)
- **Frigates:** Nilgiri class (P-17A), Shivalik class
- **Naval Aircraft:** MiG-29K, P-8I Poseidon, MH-60R Seahawk, Rafale-M (ordered)

## Army Systems
- **Tanks:** Arjun Mk1A, T-90 Bhishma, T-72 Ajeya, Zorawar (light tank)
- **Artillery:** Dhanush, ATAGS, K9 Vajra, M777 Ultra-light Howitzer, Pinaka MBRL
- **Rifles:** SIG 716, AK-203 (made at Amethi), INSAS
- **Drones:** Heron, MQ-9B (ordered), Nagastra loitering munition

## DRDO & DPSUs
- DRDO est. 1958, HQ New Delhi
- HAL (Bengaluru) · BEL · BDL · Mazagon Dock · Cochin Shipyard · GRSE · Munitions India Ltd
- **Defence Corridors:** Uttar Pradesh & Tamil Nadu
- **Aero India** – Bengaluru (biennial) · **DefExpo** – Gandhinagar 2022`,
  },
  {
    slug: "indian-polity-notes-defence-exams",
    examSlug: "capf-ac",
    subject: "General Knowledge",
    title: "Indian Polity – Constitution Crash Course",
    summary: "Articles, schedules, amendments, parts of Constitution and important bodies asked in CAPF, CDS and NDA GK.",
    readMinutes: 18,
    tags: ["CAPF", "CDS", "NDA", "Polity"],
    content: `# Indian Polity Crash Course

## Making of the Constitution
- Constituent Assembly first met 9 Dec 1946; Chairman Dr. Rajendra Prasad
- Drafting Committee Chairman: Dr. B.R. Ambedkar
- Adopted 26 Nov 1949 (Constitution Day); enforced 26 Jan 1950
- Originally 395 Articles, 22 Parts, 8 Schedules

## Sources Borrowed
| Feature | Source |
|---|---|
| Parliamentary system, Rule of law | UK |
| Fundamental Rights, Judicial review, Impeachment | USA |
| DPSP | Ireland |
| Federation with strong centre, Residuary powers | Canada |
| Concurrent list, Freedom of trade | Australia |
| Emergency provisions | Germany |
| Fundamental Duties | USSR |
| Republic, Liberty-Equality-Fraternity | France |

## Important Articles
- **Art 1** – India, that is Bharat, Union of States
- **Art 14–18** – Right to Equality
- **Art 19–22** – Right to Freedom (Art 21 – Life & Personal Liberty; 21A – Education)
- **Art 23–24** – Against Exploitation
- **Art 25–28** – Freedom of Religion
- **Art 29–30** – Cultural & Educational Rights
- **Art 32** – Constitutional Remedies ("Heart & Soul" – Ambedkar)
- **Art 51A** – Fundamental Duties (11)
- **Art 52** – President; **Art 53** – Executive power & Supreme Command
- **Art 72** – Pardoning power of President
- **Art 74** – Council of Ministers; **Art 76** – Attorney General
- **Art 110** – Money Bill; **Art 112** – Budget (Annual Financial Statement)
- **Art 123** – Ordinance by President
- **Art 148** – CAG; **Art 280** – Finance Commission
- **Art 324** – Election Commission
- **Art 352/356/360** – National / State / Financial Emergency
- **Art 368** – Amendment procedure
- **Art 370** – J&K special status (abrogated 5 Aug 2019)

## Schedules (12)
1 States & UTs · 2 Salaries · 3 Oaths · 4 Rajya Sabha seats · 5 Scheduled areas · 6 Tribal areas (Assam, Meghalaya, Tripura, Mizoram) · 7 Union/State/Concurrent lists · 8 Languages (22) · 9 Land reforms (1st Amendment) · 10 Anti-defection (52nd) · 11 Panchayats (73rd) · 12 Municipalities (74th)

## Key Amendments
- **1st (1951)** – 9th Schedule
- **42nd (1976)** – "Mini Constitution": Socialist, Secular, Integrity in Preamble; Fundamental Duties
- **44th (1978)** – Right to Property removed from FRs (now Art 300A)
- **52nd (1985)** – Anti-defection
- **61st (1989)** – Voting age 21 → 18
- **73rd/74th (1992)** – Panchayati Raj / Municipalities
- **86th (2002)** – Right to Education (Art 21A)
- **101st (2016)** – GST
- **103rd (2019)** – 10% EWS reservation
- **106th (2023)** – Nari Shakti Vandan Adhiniyam (33% women reservation)

## Parliament Facts
- Lok Sabha max 550 (currently 543); Rajya Sabha max 250 (currently 245, 12 nominated)
- Rajya Sabha term 6 years, 1/3 retire every 2 years
- Money Bill only in Lok Sabha; Rajya Sabha can hold it 14 days
- Speaker decides Money Bill; casting vote in tie
- Quorum: 1/10th of total strength

## Judiciary
- Supreme Court: Art 124; CJI + 33 judges; retire at 65
- High Court judges retire at 62
- Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto
- Landmark: Kesavananda Bharati (1973) – Basic Structure doctrine`,
  },
  {
    slug: "indian-geography-crash-notes",
    examSlug: "cds",
    subject: "General Knowledge",
    title: "Indian & Physical Geography – Key Facts",
    summary: "Mountains, rivers, passes, soils, climate, national parks and border facts for GK sections.",
    readMinutes: 14,
    tags: ["CDS", "NDA", "Agniveer", "Geography"],
    content: `# Geography Key Facts

## India – Location
- Latitude 8°4′N – 37°6′N; Longitude 68°7′E – 97°25′E
- Tropic of Cancer (23.5°N) passes through 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram
- Standard Meridian 82°30′E (Mirzapur, UP); IST = GMT + 5:30
- Land boundary 15,200 km; coastline 7,516 km (mainland 6,100 km)
- Longest land border with **Bangladesh** (4,096 km); longest coastline **Gujarat**
- Southernmost point: Indira Point (Great Nicobar); mainland: Kanyakumari

## Border Lines
- **Radcliffe Line** – India–Pakistan (1947)
- **McMahon Line** – India–China (1914)
- **Durand Line** – Pakistan–Afghanistan
- **LoC** – J&K (1972 Shimla Agreement); **LAC** – China; **AGPL** – Siachen

## Mountains & Passes
- Himalayas: Trans-Himalaya (Karakoram, Ladakh, Zanskar), Himadri, Himachal, Shiwalik
- Highest peaks: K2 (8611 m, PoK), Kangchenjunga (8586 m, Sikkim – highest in India), Nanda Devi (Uttarakhand)
- Passes: Zoji La (J&K), Khardung La (Ladakh), Rohtang (HP), Shipki La (HP), Lipulekh (UK), Nathu La & Jelep La (Sikkim), Bomdila (Arunachal)
- **Siachen Glacier** – Karakoram; **Aravalli** – oldest fold mountains; **Anamudi** (2695 m) – highest in South India

## Rivers
| River | Source | Length in India |
|---|---|---|
| Ganga | Gangotri (Bhagirathi) | 2525 km |
| Brahmaputra | Chemayungdung (Tibet) | 916 km |
| Indus | Mansarovar (Tibet) | 1114 km |
| Godavari | Trimbakeshwar | 1465 km (longest peninsular) |
| Krishna | Mahabaleshwar | 1400 km |
| Narmada | Amarkantak | 1312 km (flows west, rift valley) |
| Kaveri | Talakaveri | 800 km |

- Indus Water Treaty (1960) – East rivers (Ravi, Beas, Sutlej) to India; West (Indus, Jhelum, Chenab) to Pakistan
- Ganga is called Padma & Meghna in Bangladesh; Brahmaputra = Tsangpo (Tibet), Jamuna (Bangladesh)

## Soils
- **Alluvial** – 40% area, Indo-Gangetic plains
- **Black (Regur)** – Deccan trap, cotton
- **Red** – Tamil Nadu, iron oxide
- **Laterite** – Western Ghats, tea, coffee, cashew
- **Desert** – Rajasthan

## Climate
- Southwest Monsoon: June–Sept (Arabian Sea & Bay of Bengal branches)
- Retreating/NE monsoon: Oct–Dec (Tamil Nadu rainfall)
- Mawsynram (Meghalaya) – highest rainfall
- Western disturbances – winter rain in NW India

## National Parks / Reserves
- Jim Corbett (Uttarakhand, first NP – 1936) · Kaziranga (Assam, one-horned rhino) · Gir (Gujarat, Asiatic lion) · Sundarbans (WB, tiger) · Keoladeo (Rajasthan, birds) · Hemis (Ladakh, largest NP) · Periyar (Kerala)

## Important Firsts / Superlatives
- Largest state: Rajasthan; smallest: Goa
- Most populous: UP; least: Sikkim
- Highest dam: Tehri (Bhagirathi); longest dam: Hirakud (Mahanadi)
- Largest lake: Wular (freshwater), Chilika (brackish)
- Largest delta: Sundarbans`,
  },
  {
    slug: "physics-formulas-agniveer",
    examSlug: "agniveer-army",
    subject: "Science",
    title: "Physics One-Liners & Formulas – Class 10–12 Level",
    summary: "Units, laws of motion, work-energy, optics, electricity, waves – tailored for Agniveer, Navy SSR, Vayu and NDA GAT.",
    readMinutes: 12,
    tags: ["Agniveer", "Navy SSR", "Vayu", "NDA"],
    content: `# Physics Essentials

## SI Units
| Quantity | Unit |
|---|---|
| Force | Newton (N) |
| Work / Energy | Joule (J) |
| Power | Watt (W) |
| Pressure | Pascal (Pa) |
| Frequency | Hertz (Hz) |
| Charge | Coulomb (C) |
| Potential | Volt (V) |
| Resistance | Ohm (Ω) |
| Capacitance | Farad (F) |
| Magnetic flux | Weber (Wb) |
| Magnetic field | Tesla (T) |
| Radioactivity | Becquerel (Bq) |
| Luminous intensity | Candela (cd) |

## Mechanics
- v = u + at; s = ut + ½at²; v² = u² + 2as
- F = ma; Momentum p = mv; Impulse = FΔt = Δp
- Work W = F·s·cosθ; KE = ½mv²; PE = mgh; Power = W/t
- Friction f = μN; Centripetal force = mv²/r
- g = 9.8 m/s²; g decreases with height & depth; zero at centre of Earth
- Escape velocity = 11.2 km/s; Orbital velocity ≈ 7.9 km/s
- Kepler: T² ∝ r³
- Rocket – conservation of momentum (Newton's 3rd law)

## Properties of Matter
- Pressure = F/A; liquid pressure = hρg
- Archimedes: Buoyant force = weight of displaced fluid
- Pascal's law → hydraulic brakes/lift
- Bernoulli → aircraft lift, spinning ball (Magnus effect)
- Surface tension → spherical drops; capillarity
- Hooke's law: stress ∝ strain

## Heat
- Q = mcΔT; Latent heat L = Q/m
- Celsius→Kelvin: K = °C + 273.15; °F = 9/5 °C + 32; −40° same in both
- Conduction (solids), convection (fluids), radiation (vacuum)
- Water has maximum density at 4°C

## Waves & Sound
- v = fλ; Sound speed: air 332 m/s, water ~1480 m/s, steel ~5000 m/s
- Audible 20 Hz – 20 kHz; Ultrasound > 20 kHz (SONAR, medical)
- Echo needs ≥ 17 m distance
- Doppler effect – RADAR speed guns, red shift

## Light
- Speed 3 × 10⁸ m/s; Refractive index n = c/v
- Mirror formula 1/f = 1/v + 1/u; f = R/2
- Convex mirror – rear view; Concave – shaving, headlights
- Convex lens – hypermetropia; Concave lens – myopia
- Total internal reflection – optical fibre, mirage, diamond sparkle
- VIBGYOR: red longest wavelength, violet most deviated
- Sky blue – Rayleigh scattering; Rainbow – dispersion + TIR

## Electricity & Magnetism
- V = IR; P = VI = I²R; 1 kWh = 3.6 × 10⁶ J
- Series: R = R₁+R₂; Parallel: 1/R = 1/R₁+1/R₂
- Fuse wire – tin-lead alloy, low melting point
- Transformer – mutual induction (AC only); Generator – EMI (Faraday)
- Electric motor – force on current-carrying conductor (Fleming's left hand)

## Modern Physics
- Nuclear fission – U-235 (reactors, atom bomb); Fusion – H→He (Sun, hydrogen bomb)
- Moderator: heavy water/graphite; Control rods: cadmium/boron
- Half-life; α (helium nuclei), β (electrons), γ (EM waves)
- Photoelectric effect – Einstein (Nobel 1921)`,
  },
  {
    slug: "chemistry-biology-one-liners",
    examSlug: "agniveer-navy",
    subject: "Science",
    title: "Chemistry & Biology One-Liners",
    summary: "Most repeated facts – elements, alloys, acids, vitamins, diseases, human body – for all soldier & officer level exams.",
    readMinutes: 10,
    tags: ["Navy SSR", "Agniveer", "GD", "Coast Guard"],
    content: `# Chemistry One-Liners
- Lightest element – Hydrogen; heaviest natural – Uranium
- Most abundant element in Earth's crust – Oxygen; in universe – Hydrogen; metal in crust – Aluminium
- Hardest natural substance – Diamond; hardest metal – Tungsten (highest MP 3422°C)
- Liquid metal – Mercury; liquid non-metal – Bromine
- Best conductor – Silver; used in wires – Copper
- Heavy water – D₂O (moderator); Dry ice – solid CO₂
- Laughing gas – N₂O; Marsh gas – CH₄; Tear gas – chloropicrin; Mustard gas – chemical weapon
- Quick lime – CaO; Slaked lime – Ca(OH)₂; Baking soda – NaHCO₃; Washing soda – Na₂CO₃·10H₂O; Plaster of Paris – CaSO₄·½H₂O; Bleaching powder – CaOCl₂
- pH: acid < 7 < base; blood 7.4; stomach acid HCl pH 1–2
- Alloys: Brass (Cu+Zn), Bronze (Cu+Sn), Steel (Fe+C), Stainless steel (Fe+Cr+Ni), Duralumin (Al+Cu+Mg+Mn – aircraft), Solder (Pb+Sn), German silver (Cu+Zn+Ni)
- Fuel gases: LPG – butane/propane; CNG – methane; Biogas – methane; Producer gas – CO+N₂; Water gas – CO+H₂
- Gunpowder – KNO₃ + charcoal + sulphur; Dynamite – nitroglycerine (Nobel); TNT – trinitrotoluene; RDX – cyclotrimethylene trinitramine
- Fire extinguisher – CO₂ / NaHCO₃ + H₂SO₄
- Photographic film – silver bromide
- Ozone layer depletion – CFCs; Acid rain – SO₂, NOₓ; Greenhouse gases – CO₂, CH₄, N₂O
- Radioactivity discovered by Becquerel; Radium – Marie Curie
- Periodic table – Mendeleev; modern periodic law – Moseley (atomic number)

# Biology One-Liners
## Human Body
- Bones 206 (largest femur, smallest stapes); Muscles ~640; Teeth 32
- Largest organ – Skin; largest internal organ – Liver; largest gland – Liver; smallest – Pineal
- Blood ~5 L; RBC life 120 days; Universal donor O⁻; Universal recipient AB⁺
- Heart 72 bpm; BP 120/80 mmHg; pacemaker – SA node
- Normal temperature 37°C (98.6°F)
- Master gland – Pituitary; Insulin – Pancreas; Adrenaline – Adrenal (emergency hormone); Thyroxine – Thyroid (iodine)
- Kidney unit – Nephron; Brain: Cerebrum (thinking), Cerebellum (balance), Medulla (involuntary)
- Blood groups – Karl Landsteiner; DNA structure – Watson & Crick; Vaccination – Edward Jenner; Penicillin – Alexander Fleming

## Vitamins & Deficiency
| Vitamin | Chemical name | Deficiency |
|---|---|---|
| A | Retinol | Night blindness |
| B1 | Thiamine | Beriberi |
| B3 | Niacin | Pellagra |
| B12 | Cobalamin | Anaemia |
| C | Ascorbic acid | Scurvy |
| D | Calciferol | Rickets |
| E | Tocopherol | Sterility |
| K | Phylloquinone | Blood clotting delay |

## Diseases
- **Viral:** AIDS, Dengue, Polio, Rabies, Measles, COVID-19, Chickenpox, Hepatitis
- **Bacterial:** TB, Cholera, Typhoid, Tetanus, Leprosy, Plague, Diphtheria
- **Protozoan:** Malaria (Plasmodium – Anopheles), Sleeping sickness, Amoebiasis
- **Deficiency:** Goitre (iodine), Anaemia (iron), Kwashiorkor (protein)
- Vectors: Aedes – Dengue, Chikungunya, Zika; Culex – Filaria, Japanese encephalitis

## Botany
- Photosynthesis – chloroplast; 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂
- Xylem – water; Phloem – food
- Plant hormones: Auxin (growth), Gibberellin (elongation), Ethylene (ripening), Abscisic acid (dormancy)
- Father of Botany – Theophrastus; Father of Green Revolution India – M.S. Swaminathan`,
  },
  {
    slug: "reasoning-shortcuts-afcat",
    examSlug: "afcat",
    subject: "Reasoning",
    title: "Reasoning & Military Aptitude Shortcuts",
    summary: "Fast methods for series, coding, blood relations, directions, clocks, calendars, dice and non-verbal figure questions.",
    readMinutes: 12,
    tags: ["AFCAT", "SSB OIR", "CAPF", "Agniveer"],
    content: `# Reasoning Shortcuts

## Alphabet Positions (memorise!)
**EJOTY rule:** E=5, J=10, O=15, T=20, Y=25
Reverse position = 27 − forward position (A=26, Z=1)

## Number Series – checklist
1. Difference constant? (AP) → next = last + d
2. Ratio constant? (GP)
3. Differences form a pattern (squares, primes, AP)?
4. Squares ±k, cubes ±k?
5. Alternate series (odd/even positions)?
6. ×2+1, ×2−1, ×3+2 type patterns?

## Coding-Decoding
- Check letter shift (+1, −1, +2, alternating)
- Reverse word, then shift
- Position sum coding (A=1…Z=26)
- Substitution coding – map word to word from given statements

## Blood Relations – Family Tree Method
- Draw generations vertically; use **+** for male, **−** for female
- "Only daughter of my mother" = myself (if female) or my sister
- "Son of my grandfather's only son" = me or my brother
- Paternal uncle = father's brother; Maternal uncle = mother's brother

## Direction Sense
- Draw N-E-S-W cross always; right turn = clockwise 90°
- Shadow: morning → shadow towards **West**; evening → **East**
- Displacement: use Pythagoras (3-4-5, 5-12-13, 8-15-17)

## Ranking
- From other end = Total − position + 1
- Total = Left + Right − 1 (same person)
- Between two persons: Total − (L + R) when positions given from opposite ends

## Clock
- Angle = |30H − 5.5M|
- Hands coincide every 65 5/11 min; 11 times in 12 hrs, 22 times in 24 hrs
- Right angle 22 times in 12 hrs; straight line 22 times

## Calendar
- Odd days: ordinary year 1, leap year 2; 100 yrs = 5, 200 = 3, 300 = 1, 400 = 0
- Century year leap only if divisible by 400
- Same calendar repeats after 6, 11 or 28 years

## Dice
- Sum of opposite faces of standard dice = 7
- If two dice views share two faces, the remaining faces are opposite each other

## Cube Cutting (n³ small cubes, all faces painted)
- 3 faces painted = 8 (corners)
- 2 faces = 12(n−2)
- 1 face = 6(n−2)²
- 0 faces = (n−2)³

## Syllogism – Venn shortcut
- "All A are B" → A inside B
- "Some A are B" → overlap
- "No A is B" → separate
- Draw the *least* possible diagram; conclusion must hold in *all* cases

## Non-Verbal (AFCAT Military Aptitude)
- **Series:** check rotation (45°/90°), element addition/removal, shading shift
- **Mirror image:** left↔right swap; Water image: top↔bottom swap
- **Embedded figure:** look for the shape's outline without size change
- **Paper folding:** holes reflect across each fold line
- **Spatial ability (AFCAT):** count blocks in 3D stacks layer by layer
- **Rotated blocks:** identify the odd figure that cannot be obtained by rotation (needs a flip)

## Speed Tips
- Attempt series & analogy first (least time), leave puzzles for last
- In OIR, aim for 45+ out of 50 with speed; no negative marking`,
  },
  {
    slug: "ssb-interview-complete-guide",
    examSlug: "ssb",
    subject: "SSB",
    title: "SSB Interview – 5 Day Procedure & Officer Like Qualities",
    summary: "Day-wise breakdown of screening, psychology, GTO and interview with tips on OLQs, PIQ form and common questions.",
    readMinutes: 20,
    tags: ["SSB", "NDA", "CDS", "AFCAT", "TA"],
    content: `# SSB Interview – Complete Guide

## Day 1 – Screening (Stage I)
### OIR (Officer Intelligence Rating)
- Two booklets: Verbal (~40 Qs) + Non-verbal (~40 Qs), ~17 min each
- Topics: series, analogy, coding, odd one out, figures, embedded figures
- Rating 1 (best) to 5; needs to be combined with good PPDT

### PPDT (Picture Perception & Description Test)
- Hazy picture shown 30 sec → write story in 4 min (characters, mood, age, sex, action)
- Individual narration (1 min) → Group discussion → common story
- **Tips:** positive, realistic, action-oriented hero; speak clearly; don't shout in GD; help the group reach consensus

## Day 2 – Psychology Tests
| Test | Details | Tips |
|---|---|---|
| TAT | 11 pictures + 1 blank, 4 min each | Hero solves problem with planning & resources |
| WAT | 60 words, 15 sec each | Write positive, action sentences, avoid "should/must" |
| SRT | 60 situations, 30 min | Short practical responses; be the doer |
| SD | Self Description – parents, teachers, friends, self, aims | Honest, balanced, matches PIQ |

## Day 3 & 4 – GTO (Group Testing Officer)
1. **Group Discussion** – two rounds, current topics
2. **Group Planning Exercise (GPE)** – model problem, write plan, group plan
3. **Progressive Group Task (PGT)** – 4 obstacles with helping material; rules: colour rule, rigidity rule, distance rule, group rule
4. **Group Obstacle Race (Snake Race)** – team spirit, follow rules
5. **Half Group Task (HGT)** – like PGT with half the group
6. **Lecturette** – 3 min talk on chosen topic (4 given), 3 min prep
7. **Individual Obstacles** – 10 obstacles in 3 min (points 1–10)
8. **Command Task** – you command 2 subordinates
9. **Final Group Task (FGT)** – one last PGT-like task

## Personal Interview (Day 2–4)
Based on **PIQ form**. Common questions:
- Introduce yourself; family; education; why armed forces?
- Rapid-fire: hobbies, friends, strengths, weaknesses, daily routine
- Academics: favourite subject basics
- Current affairs & defence GK
- Why did you not clear earlier? What are your alternatives?

## Day 5 – Conference
- Board members in uniform; brief chat; results announced; medicals for recommended candidates

## 15 Officer Like Qualities (OLQs)
**Factor I – Planning & Organising:** Effective Intelligence, Reasoning Ability, Organising Ability, Power of Expression
**Factor II – Social Adjustment:** Social Adaptability, Cooperation, Sense of Responsibility
**Factor III – Social Effectiveness:** Initiative, Self Confidence, Speed of Decision, Ability to Influence the Group, Liveliness
**Factor IV – Dynamic:** Determination, Courage, Stamina

## Preparation Checklist
- Fill PIQ truthfully – every answer is a potential question
- Read newspaper daily; know your state/district facts
- Physical fitness: 2.4 km run, pull-ups, obstacle practice
- Practise 5 TAT stories/day, 60 WAT words in 15 min
- Speak in front of a mirror; record lecturettes
- Be natural – assessors detect coaching-institute clichés

> "Be yourself, be honest, be positive." The SSB selects personalities, not toppers.`,
  },
  {
    slug: "current-affairs-defence-2024-25",
    examSlug: null,
    subject: "General Knowledge",
    title: "Defence & National Current Affairs Capsule 2024–25",
    summary: "Latest inductions, exercises, appointments, space missions, awards and schemes relevant for upcoming exams.",
    readMinutes: 12,
    tags: ["Current Affairs", "All Exams"],
    content: `# Current Affairs Capsule 2024–25

## Appointments
- **Chief of Defence Staff:** Gen. Anil Chauhan (since Sept 2022)
- **Chief of Army Staff:** Gen. Upendra Dwivedi (from 30 June 2024)
- **Chief of Naval Staff:** Adm. Dinesh K. Tripathi (from 30 April 2024)
- **Chief of Air Staff:** ACM Amar Preet Singh (from 30 Sept 2024)
- **Defence Minister:** Rajnath Singh
- **NSA:** Ajit Doval

## Defence Developments
- **Op Sindoor (May 2025)** – Indian tri-service strikes on terror infrastructure in Pakistan & PoK after Pahalgam attack
- **INS Arighaat** – second SSBN commissioned Aug 2024
- **INS Surat, INS Nilgiri, INS Vaghsheer** – commissioned together Jan 2025 (Mumbai)
- **INS Tushil** – stealth frigate from Russia, Dec 2024
- **Agni-Prime, Agni-5 MIRV (Mission Divyastra)** – successful tests
- **K-4 SLBM** tested from INS Arighaat (Nov 2024)
- **LCH Prachand** – 156 helicopters order (2025)
- **Rafale-M** – 26 aircraft deal with France for INS Vikrant (April 2025)
- **MQ-9B Predator drones** – 31 units deal with USA (Oct 2024)
- **Zorawar light tank** – trials in Ladakh
- **Pinaka, ATAGS** – large orders placed; ATAGS first indigenous 155 mm gun
- **Nagastra-1** – first indigenous loitering munition inducted
- **Theatre Commands** – three integrated theatre commands proposed
- **Defence exports** crossed ₹23,600 crore in FY 2024–25 (record)
- **Year 2025** declared "Year of Reforms" by MoD

## Major Exercises
| Exercise | Partner | Type |
|---|---|---|
| Yudh Abhyas | USA | Army |
| Vajra Prahar | USA | Special Forces |
| Malabar | USA, Japan, Australia | Navy |
| Garuda | France | Air Force |
| Varuna | France | Navy |
| Indra | Russia | Tri-service |
| Ajeya Warrior | UK | Army |
| Mitra Shakti | Sri Lanka | Army |
| Surya Kiran | Nepal | Army |
| Sampriti | Bangladesh | Army |
| Hand-in-Hand | China | Army |
| Tarang Shakti 2024 | Multinational (first ever hosted by IAF) | Air |
| MILAN 2024 | Multinational, Visakhapatnam | Navy |
| Dharma Guardian | Japan | Army |
| Austra Hind | Australia | Army |

## Space & Science
- **Chandrayaan-3** – 23 Aug 2023, Shiv Shakti Point; National Space Day
- **Aditya-L1** – Sun mission, reached L1 Jan 2024
- **XPoSat** – Jan 2024, X-ray polarimetry
- **Gaganyaan** – crewed mission, 4 astronaut-designates (Group Capt. Prasanth Nair, Ajit Krishnan, Angad Pratap, Shubhanshu Shukla)
- **Shubhanshu Shukla** – Axiom-4 mission to ISS (June 2025), second Indian in space
- **SpaDeX** – space docking success Jan 2025 (India 4th nation)
- **NISAR** – NASA-ISRO SAR satellite (2025)
- ISRO Chairman: V. Narayanan (from Jan 2025)

## Awards
- **Param Vir Chakra** – 21 awardees till date (last: Capt. Vikram Batra, Lt. Manoj Pandey, Gren. Yogendra Yadav, Rfn. Sanjay Kumar – Kargil 1999)
- **Bharat Ratna 2024:** Karpoori Thakur, L.K. Advani, P.V. Narasimha Rao, Chaudhary Charan Singh, M.S. Swaminathan
- **Khel Ratna 2024:** Manu Bhaker, D. Gukesh, Harmanpreet Singh, Praveen Kumar
- **Paris Olympics 2024:** India 6 medals (1 silver – Neeraj Chopra, 5 bronze); Manu Bhaker 2 medals

## Schemes & Misc
- **Agnipath** – 4-year tenure, 25% retained, Seva Nidhi ~₹11.7 lakh
- **Sainik Schools** – 100 new partnership-mode schools
- **iDEX** – Innovations for Defence Excellence
- **SPRINT** – Navy indigenisation of 75 technologies
- **Positive Indigenisation Lists** – 5 lists, 500+ items banned for import
- **Bharatiya Nyaya Sanhita** replaced IPC (1 July 2024)
- **One Nation One Election** bill introduced Dec 2024
- **Nari Shakti Vandan Adhiniyam** – 33% women reservation (106th Amendment)`,
  },
  {
    slug: "agniveer-gd-complete-strategy",
    examSlug: "agniveer-army",
    subject: "Strategy",
    title: "Agniveer GD – Syllabus, Pattern & 30-Day Plan",
    summary: "Exact CEE pattern, physical standards, cut-offs and a day-by-day preparation schedule for Army Agniveer.",
    readMinutes: 8,
    tags: ["Agniveer", "Strategy"],
    content: `# Agniveer GD – Complete Strategy

## Exam Pattern (Online CEE)
| Category | Subjects | Qs | Marks | Time |
|---|---|---|---|---|
| GD | GK 15, Science 15, Maths 15, Reasoning 5 | 50 | 100 | 60 min |
| Technical | GK 10, Maths 15, Physics 15, Chemistry 10 | 50 | 200 | 60 min |
| Clerk/SKT | Part I: GK 5, Science 5, Maths 10, Computer 5 · Part II: English 25 | 50 | 200 | 60 min |
| Tradesman | GK 10, Science 10, Maths 10, Reasoning 10 (10th) | 50 | 100 | 60 min |

**Negative marking:** 25% of marks per wrong answer. **Bonus:** up to 20 marks for NCC C certificate, 10% for ITI etc.

## Physical Fitness Test
- **1.6 km run:** Group I ≤ 5 min 30 sec (60 marks); Group II ≤ 5 min 45 sec (48 marks)
- **Pull-ups:** 10 = 40 marks, 9 = 33, 8 = 27, 7 = 21, 6 = 16
- **9-feet ditch** & **Zig-zag balance** – qualifying
- Height: 170 cm (varies by region); Chest 77 cm + 5 cm expansion; Weight proportionate

## Selection Process
1. Online CEE (Phase I) → 2. Rally: PFT + PMT + Document verification → 3. Medical → 4. Final merit → 5. Training (31 weeks)

## 30-Day Plan
**Days 1–10 – Foundation**
- Maths: number system, HCF/LCM, percentage, ratio, SI/CI, time-work, speed-distance, mensuration (NCERT 8–10)
- Science: NCERT 9–10 physics/chemistry/biology one-liners
- GK: static – polity, geography, history basics; daily current affairs

**Days 11–20 – Practice**
- 2 sectional tests daily (Maths + GK/Science)
- Reasoning: series, coding, analogy, odd one out
- Revise defence GK (ranks, exercises, missiles)

**Days 21–28 – Mock Mode**
- One full 50-question mock daily under timer
- Analyse errors; maintain a mistake notebook

**Days 29–30 – Revision**
- Formula sheet, GK capsule, current affairs of last 6 months

## Tips
- Attempt accuracy > attempts: with −0.5 per wrong, leave doubtful ones
- Run daily; practise pull-ups with proper form
- Keep documents (10th/12th marksheets, domicile, caste, NCC, character certificate) ready`,
  },
  {
    slug: "cds-elementary-maths-formulas",
    examSlug: "cds",
    subject: "Mathematics",
    title: "CDS Elementary Mathematics – Arithmetic & Geometry Formula Bank",
    summary: "Number system, algebra, geometry theorems, mensuration and statistics formulas required for CDS/TA/CAPF maths.",
    readMinutes: 12,
    tags: ["CDS", "TA", "Formulas"],
    content: `# Elementary Mathematics Formula Bank

## Number System
- Divisibility: 3 & 9 (digit sum), 4 (last two digits), 8 (last three), 11 (alternate digit sum difference)
- Sum of first n natural numbers = n(n+1)/2; squares = n(n+1)(2n+1)/6; cubes = [n(n+1)/2]²
- HCF × LCM = product of two numbers
- Number of factors of N = p^a·q^b → (a+1)(b+1)
- Unit digit cycles: 2→(2,4,8,6), 3→(3,9,7,1), 7→(7,9,3,1), 4→(4,6), 9→(9,1)

## Percentage & Profit-Loss
- % change = (change/original) × 100
- Successive % changes a, b: net = a + b + ab/100
- Profit% = (SP−CP)/CP × 100; SP = CP × (100 ± %)/100
- Discount on Marked Price; successive discounts same rule
- False weight profit% = error/(true − error) × 100

## Interest
- SI = PRT/100; A = P(1 + R/100)ᵀ for CI
- CI − SI for 2 yrs = P(R/100)²; for 3 yrs = P(R/100)²(3 + R/100)
- Half-yearly: R/2, 2T

## Time, Speed & Distance
- km/h → m/s multiply by 5/18
- Relative speed: same direction subtract, opposite add
- Train crossing pole: L/v; platform: (L+P)/v
- Boats: down = b + s, up = b − s; b = (d+u)/2, s = (d−u)/2
- Average speed for equal distances = 2xy/(x+y)

## Time & Work
- Work = Rate × Time; A in a days, B in b days → together ab/(a+b)
- M₁D₁H₁/W₁ = M₂D₂H₂/W₂
- Pipes: outlet negative rate

## Algebra
- (a+b)² = a²+2ab+b²; (a−b)² = a²−2ab+b²; a²−b² = (a+b)(a−b)
- a³+b³ = (a+b)(a²−ab+b²); a³−b³ = (a−b)(a²+ab+b²)
- (a+b)³ = a³+b³+3ab(a+b)
- If a+b+c = 0 then a³+b³+c³ = 3abc
- Quadratic ax²+bx+c: sum = −b/a, product = c/a, D = b²−4ac

## Geometry Theorems
- Angle sum triangle 180°; exterior angle = sum of opposite interior
- Pythagoras; Basic Proportionality (Thales)
- Angle in semicircle = 90°; angle at centre = 2 × angle at circumference
- Cyclic quadrilateral: opposite angles supplementary
- Tangent ⊥ radius; tangents from external point equal
- Polygon interior sum = (n−2)180°; each exterior = 360°/n
- Centroid divides median 2:1; Orthocentre, Circumcentre, Incentre

## Mensuration
| Figure | Area / Volume |
|---|---|
| Triangle | ½bh; Heron √[s(s−a)(s−b)(s−c)]; equilateral (√3/4)a² |
| Circle | πr²; circumference 2πr; sector (θ/360)πr² |
| Trapezium | ½(a+b)h |
| Rhombus | ½ d₁d₂ |
| Cube | V = a³, TSA = 6a², diagonal a√3 |
| Cuboid | V = lbh, TSA = 2(lb+bh+hl), diagonal √(l²+b²+h²) |
| Cylinder | V = πr²h, CSA = 2πrh, TSA = 2πr(r+h) |
| Cone | V = ⅓πr²h, CSA = πrl, l = √(r²+h²) |
| Sphere | V = 4/3πr³, SA = 4πr² |
| Hemisphere | V = 2/3πr³, CSA = 2πr², TSA = 3πr² |

## Statistics
- Mean = Σx/n; grouped: Σfx/Σf
- Median: middle value; grouped: l + [(n/2 − cf)/f] × h
- Mode = l + [(f₁−f₀)/(2f₁−f₀−f₂)] × h
- Empirical: Mode = 3 Median − 2 Mean
- Range = max − min`,
  },
  {
    slug: "modern-indian-history-timeline",
    examSlug: "nda",
    subject: "General Knowledge",
    title: "Modern Indian History – Timeline 1757 to 1947",
    summary: "Battles, Governor-Generals, revolts, Congress sessions, Gandhian movements and key acts in one place.",
    readMinutes: 15,
    tags: ["NDA", "CDS", "CAPF", "History"],
    content: `# Modern Indian History Timeline

## Rise of British Power
- **1757 Battle of Plassey** – Clive defeats Siraj-ud-Daulah
- **1764 Battle of Buxar** – British defeat Mir Qasim, Shuja-ud-Daulah, Shah Alam II → Diwani of Bengal (1765)
- **1767–99 Anglo-Mysore Wars** – Tipu Sultan dies at Srirangapatna (1799)
- **1775–1818 Anglo-Maratha Wars** – Maratha power ends
- **1845–49 Anglo-Sikh Wars** – Punjab annexed (1849)

## Governor-Generals & Viceroys (must-know)
| Name | Key Events |
|---|---|
| Warren Hastings (1772–85) | Regulating Act 1773, first GG of Bengal |
| Cornwallis (1786–93) | Permanent Settlement 1793, Civil services |
| Wellesley (1798–1805) | Subsidiary Alliance |
| William Bentinck (1828–35) | Sati abolished 1829, English education, first GG of India |
| Dalhousie (1848–56) | Doctrine of Lapse, Railways 1853, Telegraph, Post |
| Canning (1856–62) | 1857 Revolt, first Viceroy, Universities 1857 |
| Lytton (1876–80) | Vernacular Press Act 1878, Delhi Durbar 1877 |
| Ripon (1880–84) | Local self-govt 1882, Ilbert Bill |
| Curzon (1899–1905) | Partition of Bengal 1905 |
| Minto II (1905–10) | Morley-Minto Reforms 1909, Muslim League 1906 |
| Hardinge II (1910–16) | Capital shifted to Delhi 1911 |
| Chelmsford (1916–21) | Rowlatt Act, Jallianwala Bagh 1919, Montagu-Chelmsford |
| Irwin (1926–31) | Simon Commission, Dandi March, Gandhi-Irwin Pact 1931 |
| Linlithgow (1936–44) | Cripps Mission 1942, Quit India |
| Wavell (1944–47) | Shimla Conference, Cabinet Mission 1946 |
| Mountbatten (1947–48) | Partition, Independence; last Viceroy, first GG of free India |

## Revolt of 1857
- Began 10 May 1857 at Meerut; Mangal Pandey (Barrackpore, 29 March)
- Leaders: Bahadur Shah Zafar (Delhi), Nana Saheb & Tantia Tope (Kanpur), Rani Lakshmibai (Jhansi), Kunwar Singh (Bihar), Begum Hazrat Mahal (Lucknow)
- Result: Company rule ended; Govt of India Act 1858; Queen's Proclamation

## Organisations
- 1828 Brahmo Samaj (Raja Ram Mohan Roy) · 1875 Arya Samaj (Dayanand) · 1885 Indian National Congress (A.O. Hume; first session Bombay, W.C. Bonnerjee) · 1906 Muslim League (Dhaka) · 1916 Home Rule (Tilak, Besant) · 1925 RSS · 1928 HSRA (Bhagat Singh) · 1936 AIKS

## Gandhian Era
- 1915 Gandhi returns; 1917 Champaran; 1918 Kheda, Ahmedabad mill
- 1919 Rowlatt Satyagraha; 13 April Jallianwala Bagh (Gen. Dyer)
- 1920–22 Non-Cooperation; ended after Chauri Chaura (Feb 1922)
- 1927 Simon Commission ("Simon Go Back"); 1928 Nehru Report; Lala Lajpat Rai dies
- 1929 Lahore Session – Purna Swaraj (26 Jan 1930 first Independence Day)
- 1930 Dandi March (12 March–6 April), Civil Disobedience
- 1930–32 Round Table Conferences (Gandhi attended 2nd)
- 1932 Communal Award, Poona Pact (Gandhi–Ambedkar)
- 1935 Government of India Act – provincial autonomy
- 1942 Cripps Mission; 8 Aug Quit India – "Do or Die"
- 1943 Netaji forms Azad Hind Govt (Singapore), INA – "Delhi Chalo", "Jai Hind"
- 1945–46 INA trials (Red Fort); 1946 RIN Mutiny (Bombay)
- 1946 Cabinet Mission; Direct Action Day 16 Aug; Interim Govt (Nehru)
- 1947 3 June Mountbatten Plan; Indian Independence Act 18 July; **15 August 1947**

## Revolutionaries
- Khudiram Bose (1908) · Alipore conspiracy · Ghadar Party (1913, San Francisco, Lala Hardayal) · Kakori (1925 – Ram Prasad Bismil, Ashfaqulla) · Saunders murder (1928) · Assembly bomb (1929 – Bhagat Singh, Batukeshwar Dutt) · Chittagong armoury raid (1930 – Surya Sen) · Bhagat Singh, Rajguru, Sukhdev hanged 23 March 1931`,
  },
  {
    slug: "coast-guard-navik-english-basics",
    examSlug: "coast-guard",
    subject: "English",
    title: "English Basics – Tenses, Voice & Narration Quick Notes",
    summary: "Compact rules for tenses, active-passive and direct-indirect speech with conversion tables for Navik, SSR & Vayu.",
    readMinutes: 8,
    tags: ["Coast Guard", "Navy SSR", "Vayu", "Grammar"],
    content: `# English Basics

## Tenses Table
| Tense | Structure | Example |
|---|---|---|
| Simple Present | V1/V1+s | He runs. |
| Present Continuous | is/am/are + V-ing | He is running. |
| Present Perfect | has/have + V3 | He has run. |
| Present Perfect Cont. | has/have been + V-ing | He has been running since 6. |
| Simple Past | V2 | He ran. |
| Past Continuous | was/were + V-ing | He was running. |
| Past Perfect | had + V3 | He had run. |
| Past Perfect Cont. | had been + V-ing | He had been running. |
| Simple Future | will + V1 | He will run. |
| Future Continuous | will be + V-ing | He will be running. |
| Future Perfect | will have + V3 | He will have run. |

**Signal words:** always/usually → simple present · now/at present → continuous · just/already/yet/ever → present perfect · yesterday/ago/last → simple past · by next year → future perfect

## Active → Passive
Object becomes subject; verb → be + V3; subject → by + agent
| Active | Passive |
|---|---|
| V1 | is/am/are + V3 |
| is/am/are + V-ing | is/am/are being + V3 |
| has/have + V3 | has/have been + V3 |
| V2 | was/were + V3 |
| was/were + V-ing | was/were being + V3 |
| had + V3 | had been + V3 |
| will + V1 | will be + V3 |
| modal + V1 | modal + be + V3 |
- Imperative: *Shut the door* → *Let the door be shut.* / *You are ordered to shut the door.*
- Interrogative: *Did he write it?* → *Was it written by him?*
- Future continuous & perfect continuous have no passive.

## Direct → Indirect
**Tense change (when reporting verb is past):**
Present → Past · Present Perfect → Past Perfect · Past → Past Perfect · will → would · can → could · may → might · must → had to
**Word change:** now→then, today→that day, tomorrow→the next day, yesterday→the previous day, here→there, this→that, ago→before, come→go
**Sentence types:**
- Statement: said that
- Question: asked if/whether (yes-no) or asked + wh-word; sentence order (not question order)
- Command: ordered/told/requested + to + V1
- Exclamation: exclaimed with joy/sorrow that
- Universal truth: tense does not change (*He said that the Sun rises in the east.*)

## Common Error Areas for Navik/SSR
- *Much* (uncountable) vs *Many* (countable)
- *Fewer* (countable) vs *Less* (uncountable)
- *Its* (possessive) vs *It's* (it is)
- *Their* / *There* / *They're*
- Question tags: positive statement → negative tag (*He is a sailor, isn't he?*)`,
  },
  {
    slug: "capf-essay-and-comprehension-guide",
    examSlug: "capf-ac",
    subject: "Strategy",
    title: "CAPF Paper II – Essay, Précis & Comprehension Strategy",
    summary: "Structure for essays, argument-building, précis rules, report writing and time allocation for the 200-mark descriptive paper.",
    readMinutes: 10,
    tags: ["CAPF", "Descriptive", "Strategy"],
    content: `# CAPF Paper II Strategy (200 marks, 3 hrs)

## Paper Structure
- **Part A (80 marks):** Essay – 4 out of 6 topics (Hindi or English), ~300 words each
- **Part B (120 marks):** Comprehension passages, précis, report writing, grammar & vocabulary (English only)
- Qualifying: Paper II evaluated only if Paper I cut-off cleared; minimum 25% in Paper II

## Essay Framework (300 words, ~20 min)
1. **Hook** (2–3 lines): quote, fact or question
2. **Context/Definition** (4–5 lines)
3. **Body para 1** – Positive/Arguments for (with example/data)
4. **Body para 2** – Challenges/Counterview
5. **Body para 3** – Way forward/Government measures
6. **Conclusion** – balanced, optimistic, tie to hook

**Frequent themes:** internal security, border management, Naxalism, cyber security, women in forces, technology in policing, climate change, federalism, India's foreign policy, human rights vs security, drugs & narcotics, disaster management, Agnipath.

## Argument for/against (Part B)
- Take a clear stand; 3 points each side; use "Firstly… Moreover… However… Therefore…"
- Cite constitutional articles, committees (e.g. Sarkaria, Punchhi), reports (NCRB), schemes

## Précis Rules
- 1/3 of original length; title compulsory
- Third person, indirect speech, past tense (if original is past)
- Retain main ideas, drop examples/repetitions
- One paragraph; do not add opinion
- Count words; write the count at the end

## Report Writing
- Heading, byline, dateline, opening summary (who-what-when-where), details, conclusion
- Objective tone; passive voice acceptable

## Comprehension
- Read questions first; underline keywords
- Answer in own words, complete sentences, within word limit
- Inference questions: "The author suggests…" – base on passage only

## Grammar Section
- Common areas: sentence correction, rearrangement, synonyms/antonyms, idioms, fill in blanks (prepositions/articles)

## Time Allocation
- Essays 4 × 22 min = 90 min
- Comprehension 30 min · Précis 20 min · Report 15 min · Grammar 15 min · Revision 10 min

## Presentation Tips
- Legible handwriting, clear paragraphs, subheadings for essays if allowed
- Underline key terms sparingly
- Avoid extreme views; show balanced officer-like judgement`,
  },
  {
    slug: "afcat-numerical-ability-shortcuts",
    examSlug: "afcat",
    subject: "Mathematics",
    title: "AFCAT Numerical Ability – 10th-Level Shortcuts",
    summary: "Vedic tricks, percentage-fraction table, ratio, average, profit-loss and time-distance shortcuts for 18 AFCAT numerical questions.",
    readMinutes: 9,
    tags: ["AFCAT", "Shortcuts"],
    content: `# AFCAT Numerical Ability Shortcuts

## Percentage ↔ Fraction Table (memorise)
| % | Fraction | % | Fraction |
|---|---|---|---|
| 50 | 1/2 | 12.5 | 1/8 |
| 33.33 | 1/3 | 11.11 | 1/9 |
| 25 | 1/4 | 10 | 1/10 |
| 20 | 1/5 | 9.09 | 1/11 |
| 16.67 | 1/6 | 8.33 | 1/12 |
| 14.28 | 1/7 | 6.25 | 1/16 |

## Quick Multiplication
- × 5 → × 10 ÷ 2; × 25 → × 100 ÷ 4; × 125 → × 1000 ÷ 8
- × 11: write digits, add neighbours (e.g. 45 × 11 = 4 (4+5) 5 = 495)
- Squares ending in 5: n5² = n(n+1) | 25 (65² = 4225)
- (a)(b) near 100: 97 × 96 = (97−4)|(3×4) = 9312

## Averages
- New member changes average by x → its value = old avg ± x × (n+1)
- Average speed for equal distances = 2ab/(a+b)
- Average of consecutive numbers = (first + last)/2

## Ratio & Partnership
- Profit share = capital × time
- Mixture/Alligation: (cheap qty)/(dear qty) = (dear − mean)/(mean − cheap)
- Remove & replace: final = initial × (1 − x/V)ⁿ

## Profit & Loss
- Equal SP with x% profit and x% loss → always loss of x²/100 %
- Discount & markup: SP = MP × (1 − d%), CP × (1 + p%) = SP
- Two successive discounts a%, b% = a + b − ab/100

## Simple / Compound Interest
- Money doubles in SI: T = 100/R years
- Rule of 72 (CI): doubling time ≈ 72/R
- CI 2 yrs shortcut: R% then R% → net = 2R + R²/100

## Time & Work
- LCM method: total work = LCM of days; rates = LCM/days
- Efficiency ratio inversely proportional to time
- Men-Days: M₁D₁ = M₂D₂ (same work)

## Time, Speed & Distance
- 1 km/h = 5/18 m/s; 1 m/s = 3.6 km/h
- Trains opposite: time = (L₁+L₂)/(v₁+v₂)
- Meeting problems: time = distance/relative speed
- Circular track: meet at start again after LCM of individual times

## Number System
- Sum of n odd numbers = n²; sum of n even numbers = n(n+1)
- Remainder theorem: (aⁿ) mod (a+1): if n even → 1, odd → a
- Trailing zeros in n! = ⌊n/5⌋ + ⌊n/25⌋ + …

## Simplification – BODMAS & Decimals
- 0.1̄ = 1/9, 0.2̄ = 2/9, 0.12̄ = (12−1)/90
- √2 = 1.414, √3 = 1.732, √5 = 2.236, π = 3.1416

> AFCAT numerical is 10th standard – speed matters. Target 15/18 in under 20 minutes.`,
  },
  {
    slug: "navy-ssr-maths-physics-syllabus",
    examSlug: "agniveer-navy",
    subject: "Strategy",
    title: "Navy SSR & MR – Syllabus Breakdown and Topic Weightage",
    summary: "Section-wise syllabus for Agniveer SSR/MR with high-yield topics, negative marking strategy and PFT standards.",
    readMinutes: 7,
    tags: ["Navy SSR", "MR", "Strategy"],
    content: `# Navy Agniveer SSR & MR

## SSR Exam (100 Qs · 100 marks · 60 min · −0.25)
| Section | Qs | High-yield topics |
|---|---|---|
| English | 25 | Passage, prepositions, verbs/tenses, synonyms-antonyms, punctuation, direct-indirect |
| Science | 25 | Physics (motion, force, work-energy, heat, light, electricity, atomic physics), Chemistry (metals, carbon compounds, acids-bases), basics |
| Mathematics | 25 | Relations & functions, trigonometry, complex numbers, quadratic, permutations, binomial, sequences, straight lines, conic sections, limits & derivatives, statistics, probability, matrices, vectors, 3D |
| General Awareness | 25 | Culture, freedom movement, sports, defence, current affairs, geography, national/international events, eminent personalities, abbreviations |

## MR Exam (50 Qs · 50 marks · 30 min · −0.25)
- Science & Maths (25): Nature of matter, universe, electricity, motion, metals, measurements, arithmetic, algebra, geometry, mensuration, trigonometry
- General Awareness (25): as above at 10th level

## Selection Stages
1. INET (online) → 2. Stage II: PFT & recruitment medical → 3. Final medical at INS Chilka → 4. Training (SSR at INS Chilka)

## PFT Standards
- **Male:** 1.6 km in 6 min 30 sec; 20 squats (uthak-baithak); 12 push-ups
- **Female:** 1.6 km in 8 min; 15 squats; 10 push-ups (knee push-ups)
- Height: Male 157 cm, Female 152 cm

## Attempt Strategy
- English first (fast, high accuracy) → GA → Science → Maths
- With −0.25, attempt if you can eliminate two options
- Sectional qualifying not required – maximise total

## Must-Do Defence GK for Navy
- Naval commands, Navy Day (4 Dec), Op Trident
- INS Vikrant, Vikramaditya, Arihant, Arighaat, Kalvari class
- Ranks (Admiral → Sub Lieutenant); Sailor ranks (Master Chief Petty Officer → Seaman II)
- Exercises: Malabar, Varuna, MILAN, Konkan (UK), JIMEX (Japan), SIMBEX (Singapore)
- Chief of Naval Staff, first woman naval officers, Navika Sagar Parikrama (INSV Tarini)
- Motto: Sham No Varunah; Naval ensign redesigned 2022 (Shivaji's octagon)`,
  },
  {
    slug: "territorial-army-overview-and-prep",
    examSlug: "territorial-army",
    subject: "Strategy",
    title: "Territorial Army Officer – Eligibility, Exam & PIB Prep",
    summary: "Who can apply, exam sections, cut-off logic, PIB interview process and SSB for TA officers.",
    readMinutes: 7,
    tags: ["Territorial Army", "Strategy"],
    content: `# Territorial Army Officer Entry

## About TA
- Raised 9 Oct 1949 ("Terriers"), motto *Savdhani Va Shoorta* (Vigilance & Valour)
- Part-time commission; "Citizens' Army"; famous members: Kapil Dev, M.S. Dhoni, Sachin Pilot, Anurag Thakur, Mohanlal
- Departmental (Railway, ONGC, IOC) & Non-departmental (Infantry, Ecological) units

## Eligibility
- Citizen of India, age 18–42 on last date
- Graduate from recognised university
- **Gainfully employed** – salaried/self-employed with proof (ITR/salary slip)
- Physically & medically fit; serving defence personnel not eligible

## Written Exam (Objective, 2 papers)
| Paper | Sections | Qs | Marks | Time |
|---|---|---|---|---|
| I | Reasoning (50) + Elementary Maths (50) | 100 | 100 | 2 hrs |
| II | General Knowledge (50) + English (50) | 100 | 100 | 2 hrs |
- Negative marking 1/3 · 40% minimum in each part, 50% aggregate

## Syllabus Highlights
- **Reasoning:** verbal & non-verbal (series, analogy, coding, blood relations, syllogism, figure matrix)
- **Maths:** arithmetic (number system, %, ratio, SI/CI, time-work), algebra, geometry, mensuration, statistics, trigonometry (10th level)
- **GK:** current affairs (last 12 months), defence, polity, geography, history, science, sports, awards
- **English:** comprehension, grammar (error spotting, fill blanks), vocabulary, sentence arrangement

## Selection Steps
1. Written exam → 2. **PIB (Preliminary Interview Board)** at TA Group HQ → 3. **SSB** (5 days) → 4. Medical → 5. Merit list → Training at IMA/OTA (post-commission)

## PIB Tips
- Panel of Army officers; questions on job profile, motivation to join TA, current affairs, hobbies
- Carry all employment proof, degree, ID, photographs
- Be clear about balancing civilian job with TA commitments (2 months training/year)

## Preparation Plan (8 weeks)
- Weeks 1–3: NCERT maths 8–10, reasoning basics, grammar rules
- Weeks 4–6: sectional tests, daily current affairs, defence GK
- Weeks 7–8: full mocks, PIB/SSB practice (PIQ, lecturette, OIR)`,
  },
];
