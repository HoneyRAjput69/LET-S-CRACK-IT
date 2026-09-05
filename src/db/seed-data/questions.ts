export type QSeed = {
  subject: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty?: string;
};

const q = (
  subject: string,
  topic: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
  difficulty = "Moderate"
): QSeed => ({ subject, topic, question, options, correctIndex, explanation, difficulty });

/* ------------------------------------------------------------------ */
/* MATHEMATICS                                                         */
/* ------------------------------------------------------------------ */
export const mathBank: QSeed[] = [
  q("Mathematics", "Sets", "If A = {1,2,3,4} and B = {3,4,5,6}, then n(A ∪ B) is", ["4", "6", "8", "2"], 1, "A ∪ B = {1,2,3,4,5,6}, so 6 elements."),
  q("Mathematics", "Trigonometry", "The value of sin 30° · cos 60° + cos 30° · sin 60° is", ["0", "1/2", "1", "√3/2"], 2, "sin(30°+60°) = sin 90° = 1."),
  q("Mathematics", "Trigonometry", "If tan θ = 3/4, then the value of sin θ (θ acute) is", ["3/5", "4/5", "5/3", "3/4"], 0, "Opposite 3, adjacent 4 → hypotenuse 5 → sin θ = 3/5."),
  q("Mathematics", "Quadratic Equations", "The roots of x² − 5x + 6 = 0 are", ["2, 3", "−2, −3", "1, 6", "−1, −6"], 0, "(x−2)(x−3) = 0."),
  q("Mathematics", "Quadratic Equations", "If the sum of roots of x² + px + 12 = 0 is 7, then p equals", ["7", "−7", "12", "−12"], 1, "Sum of roots = −p = 7 → p = −7."),
  q("Mathematics", "Logarithms", "The value of log₂ 64 is", ["4", "5", "6", "8"], 2, "2⁶ = 64."),
  q("Mathematics", "Logarithms", "If log 2 = 0.3010, then log 8 equals", ["0.6020", "0.9030", "1.2040", "0.3010"], 1, "log 8 = 3 log 2 = 0.9030."),
  q("Mathematics", "Matrices", "If A is a 2×3 matrix and B is a 3×4 matrix, then the order of AB is", ["2×4", "3×3", "4×2", "2×3"], 0, "Order of product = rows of A × columns of B."),
  q("Mathematics", "Determinants", "The determinant of matrix [[2,3],[1,4]] is", ["5", "11", "8", "−5"], 0, "2×4 − 3×1 = 5."),
  q("Mathematics", "Complex Numbers", "The value of i⁴ⁿ⁺³ where i = √−1 is", ["i", "−i", "1", "−1"], 1, "i⁴ⁿ = 1, i³ = −i."),
  q("Mathematics", "Complex Numbers", "Modulus of the complex number 3 + 4i is", ["5", "7", "1", "25"], 0, "|z| = √(9+16) = 5."),
  q("Mathematics", "Progressions", "The 10th term of the A.P. 2, 7, 12, ... is", ["45", "47", "50", "52"], 1, "a + 9d = 2 + 45 = 47."),
  q("Mathematics", "Progressions", "Sum of first 20 natural numbers is", ["200", "210", "220", "190"], 1, "n(n+1)/2 = 20×21/2 = 210."),
  q("Mathematics", "Progressions", "The sum of infinite G.P. 1 + 1/2 + 1/4 + ... is", ["1", "1.5", "2", "∞"], 2, "S = a/(1−r) = 1/(1−1/2) = 2."),
  q("Mathematics", "Permutations", "The number of ways to arrange the letters of the word 'ARMY' is", ["12", "24", "16", "4"], 1, "4! = 24."),
  q("Mathematics", "Combinations", "The value of ⁸C₃ is", ["56", "48", "336", "24"], 0, "8×7×6 / 6 = 56."),
  q("Mathematics", "Binomial Theorem", "The number of terms in the expansion of (x + y)¹⁰ is", ["10", "11", "9", "20"], 1, "n + 1 = 11 terms."),
  q("Mathematics", "Probability", "A die is thrown once. Probability of getting a prime number is", ["1/2", "1/3", "2/3", "1/6"], 0, "Primes: 2,3,5 → 3/6 = 1/2."),
  q("Mathematics", "Probability", "Two coins are tossed. Probability of getting at least one head is", ["1/4", "1/2", "3/4", "1"], 2, "1 − P(no head) = 1 − 1/4 = 3/4."),
  q("Mathematics", "Statistics", "The mean of first five prime numbers is", ["5.6", "5", "6", "4.8"], 0, "(2+3+5+7+11)/5 = 28/5 = 5.6."),
  q("Mathematics", "Statistics", "The median of 3, 8, 1, 9, 5, 7, 4 is", ["5", "7", "4", "8"], 0, "Sorted: 1,3,4,5,7,8,9 → middle = 5."),
  q("Mathematics", "Calculus", "The derivative of sin x · cos x with respect to x is", ["cos 2x", "sin 2x", "−cos 2x", "2 cos 2x"], 0, "sin x cos x = ½ sin 2x → derivative = cos 2x."),
  q("Mathematics", "Calculus", "∫ (1/x) dx equals", ["x + C", "ln|x| + C", "−1/x² + C", "eˣ + C"], 1, "Standard integral."),
  q("Mathematics", "Calculus", "lim (x→0) (sin x)/x is", ["0", "1", "∞", "−1"], 1, "Standard limit."),
  q("Mathematics", "Calculus", "The derivative of eˣ² is", ["eˣ²", "2x eˣ²", "x eˣ²", "2 eˣ²"], 1, "Chain rule: eˣ² · 2x."),
  q("Mathematics", "Coordinate Geometry", "The distance between points (1, 2) and (4, 6) is", ["5", "√7", "7", "3"], 0, "√(9+16) = 5."),
  q("Mathematics", "Coordinate Geometry", "The slope of the line 3x + 4y = 12 is", ["3/4", "−3/4", "4/3", "−4/3"], 1, "y = −(3/4)x + 3."),
  q("Mathematics", "Coordinate Geometry", "The centre of the circle x² + y² − 4x + 6y − 3 = 0 is", ["(2, −3)", "(−2, 3)", "(4, −6)", "(−4, 6)"], 0, "Centre = (−g, −f) = (2, −3)."),
  q("Mathematics", "Vectors", "If a = 2i + 3j and b = i − j, then a · b is", ["5", "−1", "1", "−5"], 1, "2×1 + 3×(−1) = −1."),
  q("Mathematics", "Vectors", "The magnitude of the vector 6i − 2j + 3k is", ["7", "√11", "11", "5"], 0, "√(36+4+9) = 7."),
  q("Mathematics", "Number System", "The HCF of 84 and 126 is", ["21", "42", "14", "7"], 1, "84 = 2²·3·7, 126 = 2·3²·7 → HCF = 2·3·7 = 42."),
  q("Mathematics", "Number System", "The LCM of 12, 15 and 20 is", ["60", "120", "30", "180"], 0, "LCM = 2²·3·5 = 60."),
  q("Mathematics", "Number System", "The binary equivalent of decimal 25 is", ["11001", "10101", "11010", "10011"], 0, "25 = 16+8+1 = 11001₂."),
  q("Mathematics", "Number System", "The unit digit of 7¹⁰⁰ is", ["1", "3", "7", "9"], 0, "Cycle 7,9,3,1; 100 mod 4 = 0 → 1."),
  q("Mathematics", "Mensuration", "The volume of a sphere of radius 3 cm is", ["36π cm³", "27π cm³", "12π cm³", "9π cm³"], 0, "(4/3)π·27 = 36π."),
  q("Mathematics", "Mensuration", "The area of an equilateral triangle of side 4 cm is", ["4√3 cm²", "8√3 cm²", "16 cm²", "2√3 cm²"], 0, "(√3/4)·16 = 4√3."),
  q("Mathematics", "Mensuration", "A cylinder has radius 7 cm and height 10 cm. Its curved surface area is", ["440 cm²", "220 cm²", "1540 cm²", "308 cm²"], 0, "2πrh = 2×22/7×7×10 = 440."),
  q("Mathematics", "Geometry", "The sum of interior angles of a hexagon is", ["540°", "720°", "900°", "360°"], 1, "(n−2)×180 = 720°."),
  q("Mathematics", "Geometry", "In a right triangle, if the two legs are 5 and 12, the hypotenuse is", ["13", "17", "15", "14"], 0, "√(25+144) = 13."),
  q("Mathematics", "Time & Work", "A can do a work in 10 days, B in 15 days. Together they finish it in", ["5 days", "6 days", "8 days", "12 days"], 1, "1/10 + 1/15 = 1/6 → 6 days."),
  q("Mathematics", "Time & Work", "12 men can build a wall in 18 days. How many men can build it in 12 days?", ["16", "18", "20", "24"], 1, "12×18 = M×12 → M = 18."),
  q("Mathematics", "Speed & Distance", "A train 150 m long passes a pole in 15 seconds. Its speed is", ["36 km/h", "45 km/h", "54 km/h", "60 km/h"], 0, "10 m/s = 36 km/h."),
  q("Mathematics", "Speed & Distance", "A boat goes 20 km downstream in 2 hrs and returns in 4 hrs. Speed of stream is", ["2.5 km/h", "5 km/h", "7.5 km/h", "10 km/h"], 0, "Down 10, up 5 → stream = (10−5)/2 = 2.5."),
  q("Mathematics", "Percentage", "If the price of sugar rises by 25%, by what % must consumption be reduced to keep expenditure same?", ["20%", "25%", "30%", "15%"], 0, "25/125 × 100 = 20%."),
  q("Mathematics", "Profit & Loss", "A man buys an article for ₹800 and sells it for ₹920. His profit % is", ["12%", "15%", "18%", "20%"], 1, "120/800 × 100 = 15%."),
  q("Mathematics", "Simple Interest", "SI on ₹5000 at 8% p.a. for 3 years is", ["₹1200", "₹1000", "₹1500", "₹800"], 0, "5000×8×3/100 = 1200."),
  q("Mathematics", "Compound Interest", "CI on ₹10000 at 10% p.a. for 2 years is", ["₹2000", "₹2100", "₹2200", "₹1100"], 1, "10000×1.21 − 10000 = 2100."),
  q("Mathematics", "Ratio", "Divide ₹1200 in the ratio 2:3:5. The largest share is", ["₹500", "₹600", "₹400", "₹240"], 1, "5/10 × 1200 = 600."),
  q("Mathematics", "Average", "The average of 5 numbers is 27. If one number is excluded, average becomes 25. The excluded number is", ["35", "30", "27", "25"], 0, "135 − 100 = 35."),
  q("Mathematics", "Algebra", "If x + 1/x = 3, then x² + 1/x² equals", ["7", "9", "11", "5"], 0, "(x+1/x)² − 2 = 9 − 2 = 7."),
  q("Mathematics", "Algebra", "The value of (a+b)² − (a−b)² is", ["4ab", "2ab", "a²+b²", "2(a²+b²)"], 0, "Standard identity."),
  q("Mathematics", "Functions", "If f(x) = 2x + 3, then f(f(1)) is", ["13", "11", "9", "7"], 0, "f(1) = 5, f(5) = 13."),
  q("Mathematics", "Differential Equations", "The order of the differential equation d²y/dx² + (dy/dx)³ + y = 0 is", ["1", "2", "3", "4"], 1, "Highest derivative is second order."),
  q("Mathematics", "Trigonometry", "If sin θ + cos θ = √2, then θ equals", ["30°", "45°", "60°", "90°"], 1, "sin 45 + cos 45 = √2."),
  q("Mathematics", "Trigonometry", "The value of tan 15° is", ["2 − √3", "2 + √3", "√3 − 1", "1"], 0, "tan(45−30) = (1 − 1/√3)/(1 + 1/√3) = 2 − √3."),
  q("Mathematics", "Heights & Distances", "The angle of elevation of the top of a tower from a point 30 m away is 60°. Height of tower is", ["30√3 m", "10√3 m", "30 m", "15 m"], 0, "h = 30 tan 60° = 30√3."),
];

/* ------------------------------------------------------------------ */
/* ENGLISH                                                             */
/* ------------------------------------------------------------------ */
export const englishBank: QSeed[] = [
  q("English", "Synonyms", "Choose the word most similar in meaning to VALIANT", ["Cowardly", "Brave", "Timid", "Feeble"], 1, "Valiant means possessing courage."),
  q("English", "Synonyms", "Synonym of CANDID", ["Secretive", "Frank", "Dishonest", "Shy"], 1, "Candid = truthful and straightforward."),
  q("English", "Synonyms", "Synonym of ABUNDANT", ["Scarce", "Plentiful", "Rare", "Little"], 1, "Abundant = existing in large quantities."),
  q("English", "Synonyms", "Synonym of METICULOUS", ["Careless", "Precise", "Hasty", "Random"], 1, "Meticulous = showing great attention to detail."),
  q("English", "Synonyms", "Synonym of RESILIENT", ["Fragile", "Tough", "Weak", "Brittle"], 1, "Resilient = able to recover quickly."),
  q("English", "Antonyms", "Choose the word opposite in meaning to BENEVOLENT", ["Kind", "Malevolent", "Generous", "Charitable"], 1, "Benevolent = kind; Malevolent = wishing evil."),
  q("English", "Antonyms", "Antonym of TRANSPARENT", ["Clear", "Opaque", "Lucid", "Visible"], 1, "Opaque = not able to be seen through."),
  q("English", "Antonyms", "Antonym of OBSOLETE", ["Outdated", "Modern", "Ancient", "Archaic"], 1, "Obsolete = out of date."),
  q("English", "Antonyms", "Antonym of HOSTILE", ["Aggressive", "Friendly", "Unfriendly", "Bitter"], 1, "Hostile = unfriendly."),
  q("English", "Antonyms", "Antonym of AUDACIOUS", ["Bold", "Timid", "Daring", "Fearless"], 1, "Audacious = bold; Timid = lacking courage."),
  q("English", "Spotting Errors", "Find the part with error: 'One of my friend (a)/ is going (b)/ to Delhi tomorrow. (c)/ No error (d)'", ["a", "b", "c", "d"], 0, "'One of' takes plural noun: 'One of my friends'."),
  q("English", "Spotting Errors", "Find the error: 'The teacher (a)/ as well as the students (b)/ were present. (c)/ No error (d)'", ["a", "b", "c", "d"], 2, "With 'as well as', verb agrees with first subject: 'was present'."),
  q("English", "Spotting Errors", "Find the error: 'He is (a)/ senior than me (b)/ by two years. (c)/ No error (d)'", ["a", "b", "c", "d"], 1, "'Senior' takes 'to', not 'than'."),
  q("English", "Spotting Errors", "Find the error: 'Neither of the two soldiers (a)/ have reported (b)/ for duty. (c)/ No error (d)'", ["a", "b", "c", "d"], 1, "'Neither' is singular: 'has reported'."),
  q("English", "Spotting Errors", "Find the error: 'The sceneries (a)/ of Kashmir (b)/ are beautiful. (c)/ No error (d)'", ["a", "b", "c", "d"], 0, "'Scenery' is uncountable; no plural form."),
  q("English", "Fill in the blanks", "The officer ______ the troops to advance.", ["ordered", "order", "ordering", "orders"], 0, "Past tense narrative requires 'ordered'."),
  q("English", "Fill in the blanks", "She has been working here ______ 2015.", ["for", "since", "from", "by"], 1, "'Since' is used with a point of time."),
  q("English", "Fill in the blanks", "The committee ______ divided in its opinion.", ["is", "are", "were", "has"], 1, "When members act individually, collective noun takes plural verb."),
  q("English", "Fill in the blanks", "He is very good ______ mathematics.", ["in", "at", "on", "with"], 1, "'Good at' is the correct preposition."),
  q("English", "Fill in the blanks", "The soldiers fought ______ to defend the post.", ["bravely", "brave", "bravery", "braver"], 0, "Adverb modifies the verb 'fought'."),
  q("English", "Idioms", "Meaning of the idiom 'To bite the bullet'", ["To eat quickly", "To face a difficult situation bravely", "To fire a weapon", "To lose a battle"], 1, "Originates from soldiers biting a bullet during surgery."),
  q("English", "Idioms", "Meaning of 'At the eleventh hour'", ["Very early", "At the last moment", "At 11 o'clock", "Too late"], 1, "At the latest possible moment."),
  q("English", "Idioms", "Meaning of 'A blessing in disguise'", ["A hidden curse", "An apparent misfortune that turns out well", "A religious act", "A costume"], 1, "Something good that isn't recognized at first."),
  q("English", "Idioms", "Meaning of 'To burn the midnight oil'", ["To waste fuel", "To work late into the night", "To set fire", "To sleep late"], 1, "Working or studying late."),
  q("English", "Idioms", "Meaning of 'Once in a blue moon'", ["Very rarely", "Every month", "At night", "Frequently"], 0, "Something that happens rarely."),
  q("English", "One Word Substitution", "One who is out to destroy the government", ["Anarchist", "Patriot", "Martyr", "Loyalist"], 0, "Anarchist advocates abolition of government."),
  q("English", "One Word Substitution", "A person who loves his country and is ready to defend it", ["Traitor", "Patriot", "Mercenary", "Rebel"], 1, "Definition of patriot."),
  q("English", "One Word Substitution", "Study of the stars and celestial bodies", ["Astrology", "Astronomy", "Geology", "Meteorology"], 1, "Astronomy is the scientific study."),
  q("English", "One Word Substitution", "A speech delivered without preparation", ["Extempore", "Soliloquy", "Monologue", "Oration"], 0, "Extempore = spoken without preparation."),
  q("English", "One Word Substitution", "One who can use both hands equally well", ["Ambivalent", "Ambidextrous", "Amphibian", "Ambiguous"], 1, "Ambidextrous."),
  q("English", "Sentence Improvement", "Improve: 'He told to me that he was tired.'", ["He told me that he was tired.", "He told to me he was tired.", "He said to me he tired.", "No improvement"], 0, "'Tell' is not followed by 'to'."),
  q("English", "Sentence Improvement", "Improve: 'I have seen him yesterday.'", ["I saw him yesterday.", "I had seen him yesterday.", "I have been seeing him yesterday.", "No improvement"], 0, "Definite past time uses simple past."),
  q("English", "Ordering of Sentences", "Arrange: P: and became a hero. Q: The young soldier R: saved his platoon S: fought bravely", ["QSRP", "QRSP", "SQRP", "RQSP"], 0, "The young soldier fought bravely, saved his platoon and became a hero."),
  q("English", "Active/Passive", "Passive of 'The commander gave the order.'", ["The order was given by the commander.", "The order is given by the commander.", "The order has been given by the commander.", "The order gave by the commander."], 0, "Simple past passive: was + V3."),
  q("English", "Active/Passive", "Active of 'The bridge was destroyed by the enemy.'", ["The enemy destroys the bridge.", "The enemy destroyed the bridge.", "The enemy has destroyed the bridge.", "The enemy was destroying the bridge."], 1, "Simple past active."),
  q("English", "Direct/Indirect", "Indirect: He said, 'I am going to the parade.'", ["He said that he was going to the parade.", "He said that he is going to the parade.", "He said that I am going to the parade.", "He told he was going to the parade."], 0, "Present continuous → past continuous; I → he."),
  q("English", "Spelling", "Choose the correctly spelt word", ["Occassion", "Ocasion", "Occasion", "Occasionn"], 2, "Occasion has double c, single s."),
  q("English", "Spelling", "Choose the correctly spelt word", ["Lieutenant", "Leiutenant", "Lieutenent", "Luietenant"], 0, "Lieutenant."),
  q("English", "Spelling", "Choose the correctly spelt word", ["Reconnaisance", "Reconnaissance", "Reconaissance", "Reconnaisence"], 1, "Reconnaissance."),
  q("English", "Cloze/Vocabulary", "The word 'Camouflage' means", ["Attack", "Disguise to blend with surroundings", "A type of weapon", "A military rank"], 1, "Camouflage is concealment by blending."),
  q("English", "Comprehension", "Read: 'Discipline is the bridge between goals and accomplishment.' The main idea is", ["Goals are unnecessary", "Discipline connects aims to achievement", "Bridges are important", "Accomplishment is easy"], 1, "Discipline is the link that helps reach goals."),
  q("English", "Comprehension", "Read: 'Courage is not the absence of fear, but the triumph over it.' According to the passage, a brave man", ["Never feels fear", "Overcomes his fear", "Avoids fear", "Ignores danger"], 1, "Courage = conquering fear."),
  q("English", "Parts of Speech", "In 'The soldier marched briskly', the word 'briskly' is a/an", ["Adjective", "Adverb", "Noun", "Verb"], 1, "It modifies the verb 'marched'."),
  q("English", "Articles", "______ Himalayas are ______ highest mountain range.", ["The, the", "A, the", "The, a", "No article, the"], 0, "Mountain ranges and superlatives take 'the'."),
  q("English", "Prepositions", "The army is fighting ______ terrorism.", ["with", "against", "for", "to"], 1, "Fight against something."),
];

/* ------------------------------------------------------------------ */
/* GENERAL KNOWLEDGE                                                   */
/* ------------------------------------------------------------------ */
export const gkBank: QSeed[] = [
  q("General Knowledge", "Polity", "Who is the Supreme Commander of the Indian Armed Forces?", ["Prime Minister", "Defence Minister", "President of India", "Chief of Defence Staff"], 2, "Article 53 vests supreme command in the President."),
  q("General Knowledge", "Polity", "Which Article of the Constitution deals with the Right to Equality?", ["Article 14", "Article 19", "Article 21", "Article 32"], 0, "Articles 14–18 cover equality; Article 14 is equality before law."),
  q("General Knowledge", "Polity", "The Fundamental Duties were added by which Constitutional Amendment?", ["42nd", "44th", "52nd", "73rd"], 0, "42nd Amendment, 1976 on Swaran Singh Committee recommendations."),
  q("General Knowledge", "Polity", "Who administers the oath of office to the President of India?", ["Prime Minister", "Chief Justice of India", "Vice President", "Speaker of Lok Sabha"], 1, "Article 60."),
  q("General Knowledge", "Polity", "Rajya Sabha members are elected for a term of", ["4 years", "5 years", "6 years", "Life"], 2, "One-third retire every two years."),
  q("General Knowledge", "Polity", "The concept of 'Directive Principles of State Policy' was borrowed from", ["USA", "Ireland", "UK", "Canada"], 1, "Borrowed from the Irish Constitution."),
  q("General Knowledge", "History", "The Battle of Plassey was fought in the year", ["1757", "1764", "1761", "1857"], 0, "Robert Clive defeated Siraj-ud-Daulah in 1757."),
  q("General Knowledge", "History", "Who founded the Indian National Army (Azad Hind Fauj) originally?", ["Subhas Chandra Bose", "Rash Behari Bose", "Mohan Singh", "Bhagat Singh"], 2, "Captain Mohan Singh founded it in 1942; Netaji revived it in 1943."),
  q("General Knowledge", "History", "The Quit India Movement was launched in", ["1940", "1942", "1945", "1930"], 1, "8 August 1942 at Bombay."),
  q("General Knowledge", "History", "Who was the first Governor-General of independent India?", ["C. Rajagopalachari", "Lord Mountbatten", "Lord Wavell", "Rajendra Prasad"], 1, "Mountbatten (1947–48), followed by Rajagopalachari."),
  q("General Knowledge", "History", "The Harappan site of Lothal is famous for", ["Great Bath", "Dockyard", "Granary", "Citadel"], 1, "Lothal in Gujarat had a tidal dockyard."),
  q("General Knowledge", "History", "Third Battle of Panipat (1761) was fought between Marathas and", ["Mughals", "Ahmad Shah Abdali", "Nadir Shah", "British"], 1, "Ahmad Shah Abdali defeated the Marathas."),
  q("General Knowledge", "History", "Jallianwala Bagh massacre took place in", ["1917", "1919", "1921", "1929"], 1, "13 April 1919, Amritsar."),
  q("General Knowledge", "History", "Who gave the slogan 'Jai Jawan Jai Kisan'?", ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Atal Bihari Vajpayee"], 1, "During the 1965 war."),
  q("General Knowledge", "Geography", "The Tropic of Cancer does NOT pass through", ["Gujarat", "Rajasthan", "Odisha", "Mizoram"], 2, "It passes through 8 states; Odisha is not one."),
  q("General Knowledge", "Geography", "Which is the longest river of India flowing entirely within the country?", ["Ganga", "Godavari", "Narmada", "Krishna"], 1, "Godavari (~1465 km), the 'Dakshin Ganga'."),
  q("General Knowledge", "Geography", "Siachen Glacier lies in which mountain range?", ["Pir Panjal", "Karakoram", "Zanskar", "Ladakh"], 1, "Eastern Karakoram range."),
  q("General Knowledge", "Geography", "The highest peak in India is", ["Mount Everest", "Kangchenjunga", "Nanda Devi", "K2"], 1, "Kangchenjunga (8586 m) in Sikkim."),
  q("General Knowledge", "Geography", "Which strait separates India from Sri Lanka?", ["Palk Strait", "Malacca Strait", "Ten Degree Channel", "Hormuz Strait"], 0, "Palk Strait."),
  q("General Knowledge", "Geography", "Ten Degree Channel separates", ["Andaman and Nicobar Islands", "Lakshadweep and Maldives", "India and Sri Lanka", "Minicoy and Lakshadweep"], 0, "Andaman (north) and Nicobar (south)."),
  q("General Knowledge", "Geography", "The Western Ghats are also known as", ["Nilgiris", "Sahyadri", "Aravalli", "Satpura"], 1, "Sahyadri hills."),
  q("General Knowledge", "Geography", "Which soil is best suited for cotton cultivation?", ["Alluvial", "Black (Regur)", "Laterite", "Red"], 1, "Black soil retains moisture."),
  q("General Knowledge", "Geography", "The Andaman & Nicobar Islands are located in", ["Arabian Sea", "Bay of Bengal", "Indian Ocean", "Lakshadweep Sea"], 1, "Bay of Bengal."),
  q("General Knowledge", "Economy", "The Reserve Bank of India was nationalised in", ["1935", "1947", "1949", "1969"], 2, "RBI established 1935, nationalised 1 Jan 1949."),
  q("General Knowledge", "Economy", "Which body prepares the Economic Survey of India?", ["RBI", "NITI Aayog", "Department of Economic Affairs", "Finance Commission"], 2, "Under Chief Economic Adviser."),
  q("General Knowledge", "Economy", "GST was introduced in India on", ["1 April 2017", "1 July 2017", "1 January 2017", "15 August 2016"], 1, "Rolled out 1 July 2017 via 101st Amendment."),
  q("General Knowledge", "Current Affairs", "India's first indigenous aircraft carrier commissioned in 2022 is", ["INS Vikramaditya", "INS Vikrant", "INS Viraat", "INS Arihant"], 1, "INS Vikrant, built at Cochin Shipyard."),
  q("General Knowledge", "Current Affairs", "Chandrayaan-3 landed near the lunar south pole in", ["July 2023", "August 2023", "September 2023", "October 2023"], 1, "23 August 2023 – now National Space Day."),
  q("General Knowledge", "Current Affairs", "Who was appointed the first Chief of Defence Staff (CDS) of India?", ["Gen. M.M. Naravane", "Gen. Bipin Rawat", "Gen. Anil Chauhan", "Adm. Karambir Singh"], 1, "Gen. Bipin Rawat, 1 Jan 2020."),
  q("General Knowledge", "Current Affairs", "The Agnipath Scheme was launched in", ["2020", "2021", "2022", "2023"], 2, "14 June 2022."),
  q("General Knowledge", "Current Affairs", "India's first solar observation mission is", ["Aditya-L1", "Surya-1", "Gaganyaan", "Astrosat"], 0, "Launched 2 September 2023 to Lagrange point L1."),
  q("General Knowledge", "Awards", "The highest peacetime gallantry award in India is", ["Param Vir Chakra", "Ashoka Chakra", "Kirti Chakra", "Shaurya Chakra"], 1, "Ashoka Chakra; PVC is wartime."),
  q("General Knowledge", "Awards", "The Bharat Ratna was first awarded in", ["1950", "1954", "1955", "1947"], 1, "1954 to C. Rajagopalachari, S. Radhakrishnan and C.V. Raman."),
  q("General Knowledge", "Sports", "The Olympic Games 2024 were held in", ["Tokyo", "Paris", "Los Angeles", "London"], 1, "Paris 2024."),
  q("General Knowledge", "Sports", "Neeraj Chopra won the Olympic gold (Tokyo 2020) in", ["Shot put", "Javelin throw", "Discus throw", "Hammer throw"], 1, "87.58 m throw."),
  q("General Knowledge", "Sports", "Rajiv Gandhi Khel Ratna award was renamed as", ["Dhyan Chand Khel Ratna", "Arjuna Award", "Dronacharya Award", "Tenzing Norgay Award"], 0, "Major Dhyan Chand Khel Ratna, 2021."),
  q("General Knowledge", "International", "The headquarters of the United Nations is located in", ["Geneva", "New York", "Paris", "Vienna"], 1, "New York City."),
  q("General Knowledge", "International", "How many permanent members are there in the UN Security Council?", ["5", "10", "15", "7"], 0, "USA, UK, France, Russia, China."),
  q("General Knowledge", "International", "QUAD grouping consists of India, USA, Japan and", ["UK", "Australia", "France", "South Korea"], 1, "Quadrilateral Security Dialogue."),
  q("General Knowledge", "International", "BRICS expanded in 2024 to include", ["Egypt, Ethiopia, Iran, UAE", "Japan, Korea", "Mexico, Canada", "Turkey, Nigeria"], 0, "Along with Saudi Arabia's invitation."),
  q("General Knowledge", "Culture", "The classical dance form Kathakali belongs to", ["Tamil Nadu", "Kerala", "Andhra Pradesh", "Odisha"], 1, "Kerala."),
  q("General Knowledge", "Culture", "The National Song of India 'Vande Mataram' was composed by", ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Iqbal"], 1, "From the novel Anandamath."),
  q("General Knowledge", "Miscellaneous", "Which is the first state of India to be formed on linguistic basis?", ["Tamil Nadu", "Andhra Pradesh", "Maharashtra", "Kerala"], 1, "Andhra Pradesh in 1953."),
  q("General Knowledge", "Miscellaneous", "The Indian Institute of Science is located in", ["Mumbai", "Bengaluru", "Pune", "Chennai"], 1, "Bengaluru, founded 1909."),
  q("General Knowledge", "Miscellaneous", "Army Day is celebrated on", ["26 January", "15 January", "8 October", "4 December"], 1, "15 January – Gen. K.M. Cariappa took over as C-in-C in 1949."),
  q("General Knowledge", "Miscellaneous", "Navy Day is celebrated on 4 December to commemorate", ["Operation Vijay", "Operation Trident", "Operation Meghdoot", "Operation Cactus"], 1, "Attack on Karachi harbour in 1971."),
  q("General Knowledge", "Miscellaneous", "Air Force Day is celebrated on", ["8 October", "1 April", "15 January", "26 November"], 0, "IAF was established on 8 Oct 1932."),
  q("General Knowledge", "Polity", "The National Emergency in India can be declared under", ["Article 352", "Article 356", "Article 360", "Article 370"], 0, "352 – National, 356 – State, 360 – Financial."),
  q("General Knowledge", "Geography", "India's longest coastline is in the state of", ["Andhra Pradesh", "Tamil Nadu", "Gujarat", "Maharashtra"], 2, "Gujarat (~1600 km)."),
  q("General Knowledge", "History", "The 1971 Indo-Pak war ended with the surrender of Pakistani forces on", ["3 December", "16 December", "26 January", "15 August"], 1, "16 Dec 1971 – Vijay Diwas."),
];

/* ------------------------------------------------------------------ */
/* SCIENCE                                                             */
/* ------------------------------------------------------------------ */
export const scienceBank: QSeed[] = [
  q("Science", "Physics", "The SI unit of force is", ["Joule", "Newton", "Watt", "Pascal"], 1, "1 N = 1 kg·m/s²."),
  q("Science", "Physics", "Which law states that every action has an equal and opposite reaction?", ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"], 2, "Third law of motion."),
  q("Science", "Physics", "The speed of light in vacuum is approximately", ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁵ m/s"], 0, "≈ 299,792 km/s."),
  q("Science", "Physics", "A body is in free fall. Its acceleration is", ["Zero", "9.8 m/s² upward", "9.8 m/s² downward", "Variable"], 2, "Acceleration due to gravity g."),
  q("Science", "Physics", "Which of the following is a vector quantity?", ["Speed", "Mass", "Velocity", "Energy"], 2, "Velocity has magnitude and direction."),
  q("Science", "Physics", "The phenomenon of light bending around obstacles is called", ["Reflection", "Refraction", "Diffraction", "Dispersion"], 2, "Diffraction."),
  q("Science", "Physics", "Which mirror is used as a rear-view mirror in vehicles?", ["Concave", "Convex", "Plane", "Parabolic"], 1, "Convex gives wider field of view."),
  q("Science", "Physics", "Sound cannot travel through", ["Air", "Water", "Steel", "Vacuum"], 3, "Sound needs a medium."),
  q("Science", "Physics", "The unit of electrical resistance is", ["Ampere", "Volt", "Ohm", "Coulomb"], 2, "Ohm (Ω)."),
  q("Science", "Physics", "Kilowatt-hour is a unit of", ["Power", "Energy", "Current", "Voltage"], 1, "1 kWh = 3.6 × 10⁶ J."),
  q("Science", "Physics", "RADAR works on the principle of", ["Reflection of radio waves", "Refraction of light", "Doppler effect only", "Diffraction"], 0, "Radio Detection And Ranging."),
  q("Science", "Physics", "Escape velocity from Earth is about", ["7.9 km/s", "11.2 km/s", "9.8 km/s", "15 km/s"], 1, "11.2 km/s."),
  q("Science", "Physics", "The working of a rocket is based on", ["Conservation of energy", "Conservation of momentum", "Bernoulli's principle", "Archimedes' principle"], 1, "Newton's third law / momentum conservation."),
  q("Science", "Chemistry", "The chemical symbol of Tungsten is", ["Tu", "Tg", "W", "Ta"], 2, "From 'Wolfram'."),
  q("Science", "Chemistry", "The pH of pure water at 25°C is", ["0", "7", "14", "1"], 1, "Neutral pH 7."),
  q("Science", "Chemistry", "Which gas is used in fire extinguishers?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], 2, "CO₂ cuts off oxygen supply."),
  q("Science", "Chemistry", "Brass is an alloy of", ["Copper and Tin", "Copper and Zinc", "Iron and Carbon", "Aluminium and Copper"], 1, "Bronze is Cu + Sn; Brass is Cu + Zn."),
  q("Science", "Chemistry", "The hardest natural substance is", ["Graphite", "Diamond", "Quartz", "Iron"], 1, "Diamond, an allotrope of carbon."),
  q("Science", "Chemistry", "Rusting of iron requires", ["Only oxygen", "Only water", "Oxygen and water", "Carbon dioxide"], 2, "Fe + O₂ + H₂O → hydrated iron oxide."),
  q("Science", "Chemistry", "Which element has atomic number 1?", ["Helium", "Hydrogen", "Lithium", "Oxygen"], 1, "Hydrogen."),
  q("Science", "Chemistry", "Heavy water is", ["H₂O₂", "D₂O", "H₂SO₄", "Distilled water"], 1, "Deuterium oxide, used as moderator in reactors."),
  q("Science", "Chemistry", "The main constituent of LPG is", ["Methane", "Butane", "Ethane", "Hydrogen"], 1, "Butane and propane."),
  q("Science", "Chemistry", "Which gas is known as laughing gas?", ["NO", "NO₂", "N₂O", "N₂"], 2, "Nitrous oxide."),
  q("Science", "Chemistry", "The fuel used in nuclear reactors is", ["Uranium-235", "Uranium-238", "Thorium", "Plutonium-240"], 0, "Fissile U-235."),
  q("Science", "Biology", "The powerhouse of the cell is", ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], 2, "Site of ATP production."),
  q("Science", "Biology", "Which blood group is called the universal donor?", ["A", "B", "AB", "O negative"], 3, "O⁻ lacks A, B and Rh antigens."),
  q("Science", "Biology", "Deficiency of Vitamin C causes", ["Rickets", "Scurvy", "Beriberi", "Night blindness"], 1, "Scurvy."),
  q("Science", "Biology", "Vitamin D is synthesised in the body with the help of", ["Water", "Sunlight", "Iron", "Protein"], 1, "UV light converts cholesterol derivatives."),
  q("Science", "Biology", "The largest organ of the human body is", ["Liver", "Brain", "Skin", "Lungs"], 2, "Skin."),
  q("Science", "Biology", "Insulin is secreted by", ["Liver", "Pancreas", "Kidney", "Thyroid"], 1, "Beta cells of islets of Langerhans."),
  q("Science", "Biology", "Malaria is caused by", ["Virus", "Bacteria", "Protozoa", "Fungus"], 2, "Plasmodium, spread by female Anopheles."),
  q("Science", "Biology", "The normal human body temperature is", ["35°C", "37°C", "39°C", "40°C"], 1, "≈ 98.6°F."),
  q("Science", "Biology", "Photosynthesis takes place in", ["Mitochondria", "Chloroplast", "Nucleus", "Vacuole"], 1, "Chlorophyll in chloroplasts."),
  q("Science", "Biology", "Number of chromosomes in a normal human cell is", ["23", "44", "46", "48"], 2, "23 pairs."),
  q("Science", "Biology", "The study of birds is called", ["Entomology", "Ornithology", "Ichthyology", "Herpetology"], 1, "Ornithology."),
  q("Science", "Biology", "Which part of the brain controls balance and coordination?", ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], 1, "Cerebellum."),
  q("Science", "Physics", "The instrument used to measure atmospheric pressure is", ["Hygrometer", "Barometer", "Anemometer", "Thermometer"], 1, "Barometer."),
  q("Science", "Physics", "Which colour of light has the longest wavelength?", ["Violet", "Blue", "Green", "Red"], 3, "Red ≈ 700 nm."),
  q("Science", "Physics", "Optical fibres work on the principle of", ["Refraction", "Total internal reflection", "Diffraction", "Polarisation"], 1, "TIR."),
  q("Science", "Chemistry", "Which acid is present in the stomach?", ["Sulphuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"], 1, "HCl aids digestion."),
];

/* ------------------------------------------------------------------ */
/* REASONING                                                           */
/* ------------------------------------------------------------------ */
export const reasoningBank: QSeed[] = [
  q("Reasoning", "Number Series", "Find the next term: 2, 6, 12, 20, 30, ?", ["40", "42", "44", "36"], 1, "Differences 4,6,8,10,12 → 42."),
  q("Reasoning", "Number Series", "Find the next term: 1, 4, 9, 16, 25, ?", ["30", "35", "36", "49"], 2, "Perfect squares → 6² = 36."),
  q("Reasoning", "Number Series", "Find the missing term: 3, 7, 15, 31, ?", ["47", "63", "62", "55"], 1, "×2 + 1 → 63."),
  q("Reasoning", "Letter Series", "Find the next term: A, C, F, J, O, ?", ["T", "U", "V", "S"], 1, "+2, +3, +4, +5, +6 → U."),
  q("Reasoning", "Letter Series", "Find the next term: Z, X, V, T, ?", ["S", "R", "Q", "P"], 1, "−2 each time → R."),
  q("Reasoning", "Coding-Decoding", "If ARMY is coded as BSNZ, then NAVY is coded as", ["OBWZ", "OBXZ", "MZUX", "OBWY"], 0, "Each letter +1."),
  q("Reasoning", "Coding-Decoding", "In a code, DELHI is written as EDMGJ. How is INDIA written?", ["JMEHB", "HOCJB", "JMEHZ", "HMCHB"], 0, "Pattern: +1, −1, +1, −1, +1."),
  q("Reasoning", "Coding-Decoding", "If each letter is given its position in the alphabet (A=1, B=2, ...), the code for 'PILOT' as the sum of positions is", ["70", "75", "72", "68"], 2, "P(16)+I(9)+L(12)+O(15)+T(20) = 72."),
  q("Reasoning", "Blood Relations", "Pointing to a man, Ravi said, 'His mother is the only daughter of my mother.' How is Ravi related to the man?", ["Father", "Uncle", "Brother", "Grandfather"], 1, "Man's mother is Ravi's sister → Ravi is maternal uncle."),
  q("Reasoning", "Blood Relations", "A is B's sister. C is B's mother. D is C's father. How is A related to D?", ["Granddaughter", "Daughter", "Mother", "Sister"], 0, "A is C's daughter, C is D's daughter → A is D's granddaughter."),
  q("Reasoning", "Direction Sense", "A man walks 5 km north, turns right and walks 3 km, turns right again and walks 5 km. How far is he from start?", ["3 km", "5 km", "8 km", "13 km"], 0, "Ends 3 km east of start."),
  q("Reasoning", "Direction Sense", "If you are facing North and turn 135° clockwise, which direction do you face?", ["South-East", "South-West", "North-East", "East"], 0, "North → 135° clockwise = South-East."),
  q("Reasoning", "Analogy", "Doctor : Hospital :: Soldier : ?", ["Gun", "Barracks", "War", "Uniform"], 1, "Place of work."),
  q("Reasoning", "Analogy", "Pilot : Aircraft :: Captain : ?", ["Ship", "Army", "Sea", "Anchor"], 0, "Person who commands the vehicle."),
  q("Reasoning", "Analogy", "5 : 26 :: 7 : ?", ["48", "49", "50", "51"], 2, "n² + 1 → 50."),
  q("Reasoning", "Odd One Out", "Find the odd one: Tank, Rifle, Grenade, Submarine", ["Tank", "Rifle", "Grenade", "Submarine"], 3, "Submarine is naval; others are land weapons."),
  q("Reasoning", "Odd One Out", "Find the odd one: 8, 27, 64, 100", ["8", "27", "64", "100"], 3, "Others are perfect cubes."),
  q("Reasoning", "Odd One Out", "Find the odd one: Ganga, Yamuna, Godavari, Kaveri, Sahyadri", ["Ganga", "Godavari", "Kaveri", "Sahyadri"], 3, "Sahyadri is a mountain range."),
  q("Reasoning", "Syllogism", "All soldiers are brave. Some brave people are officers. Conclusion: (I) Some soldiers are officers. (II) All brave people are soldiers.", ["Only I follows", "Only II follows", "Both follow", "Neither follows"], 3, "Neither can be definitely concluded."),
  q("Reasoning", "Syllogism", "All pens are books. All books are papers. Conclusion: All pens are papers.", ["Follows", "Does not follow", "Cannot be determined", "Partially follows"], 0, "Transitive: All A are C."),
  q("Reasoning", "Venn Diagram", "Which diagram best represents: Officers, Army, Doctors?", ["Three separate circles", "Three intersecting circles", "Concentric circles", "Two intersecting, one separate"], 1, "There are Army doctors, Army officers, doctor officers."),
  q("Reasoning", "Clock", "The angle between the hands of a clock at 3:30 is", ["75°", "90°", "105°", "60°"], 0, "|30×3 − 5.5×30| = |90 − 165| = 75°."),
  q("Reasoning", "Calendar", "If 15 August 1947 was a Friday, what day was 26 January 1950?", ["Thursday", "Friday", "Saturday", "Sunday"], 0, "Odd days = 6 → Thursday."),
  q("Reasoning", "Ranking", "In a row of 40 soldiers, Ram is 15th from the left. What is his position from the right?", ["25", "26", "24", "27"], 1, "40 − 15 + 1 = 26."),
  q("Reasoning", "Mathematical Operations", "If '+' means '×', '×' means '−', '−' means '÷', '÷' means '+', then 8 + 4 × 6 − 2 ÷ 3 = ?", ["32", "29", "35", "26"], 0, "8×4 − 6÷2 + 3 = 32 − 3 + 3 = 32."),
  q("Reasoning", "Non-verbal", "How many triangles are there in a square divided by both diagonals?", ["4", "6", "8", "10"], 2, "4 small + 4 larger = 8."),
  q("Reasoning", "Cube & Dice", "A cube is painted red on all faces and cut into 27 small cubes. How many have exactly two faces painted?", ["8", "12", "6", "1"], 1, "Edge cubes (non-corner) = 12."),
  q("Reasoning", "Cube & Dice", "Two positions of a dice show 1,2,3 and 2,3,5 on adjacent faces. Which number is opposite to 2?", ["1", "3", "5", "Cannot be determined"], 3, "From the two views, 1 is opposite 5 (the faces not common), but the face opposite 2 cannot be fixed with this data."),
  q("Reasoning", "Statement & Assumption", "Statement: 'Join the Army and see the world.' Assumption: (I) Army offers travel opportunities. (II) Everyone wants to see the world.", ["Only I implicit", "Only II implicit", "Both implicit", "Neither"], 0, "Only the travel opportunity is assumed."),
  q("Reasoning", "Word Formation", "Which word cannot be formed from the letters of 'COMMANDER'?", ["COMMAND", "DREAM", "MANNER", "MODERN"], 2, "MANNER needs two N's; COMMANDER has one."),
  q("Reasoning", "Alphabet Test", "How many letters in the word 'DEFENCE' remain in the same position when arranged alphabetically?", ["0", "1", "2", "3"], 1, "Alphabetical order: C D E E E F N. Compare with D E F E N C E position-wise: only the 4th letter (E) stays in place."),
  q("Reasoning", "Spatial", "A paper is folded twice and a hole is punched in the centre. When unfolded, how many holes appear?", ["1", "2", "4", "8"], 2, "2 folds → 4 layers → 4 holes."),
  q("Reasoning", "Military Aptitude", "Which figure completes the pattern: rotating an arrow 90° clockwise each step starting from North: N, E, S, ?", ["N", "W", "E", "S"], 1, "Next is West."),
  q("Reasoning", "Number Series", "Find the wrong term: 4, 9, 19, 39, 79, 160", ["9", "39", "79", "160"], 3, "×2+1 → should be 159."),
  q("Reasoning", "Puzzle", "Five soldiers A,B,C,D,E stand in a line. A is left of B but right of C. D is right of B. E is at extreme left. Who is in the middle?", ["A", "B", "C", "D"], 0, "Order: E, C, A, B, D."),
];

/* ------------------------------------------------------------------ */
/* DEFENCE AWARENESS                                                   */
/* ------------------------------------------------------------------ */
export const defenceBank: QSeed[] = [
  q("Defence", "Indian Army", "The Indian Military Academy is located at", ["Pune", "Dehradun", "Chennai", "Khadakwasla"], 1, "IMA, Dehradun (est. 1932)."),
  q("Defence", "Indian Army", "The motto of the Indian Army is", ["Touch the Sky with Glory", "Service Before Self", "Sham No Varunah", "Vayam Rakshamah"], 1, "Seva Paramo Dharma – Service Before Self."),
  q("Defence", "Indian Army", "The National Defence Academy is located at", ["Dehradun", "Khadakwasla, Pune", "Ezhimala", "Hyderabad"], 1, "NDA, Khadakwasla."),
  q("Defence", "Indian Army", "Officers Training Academy for Short Service Commission is at", ["Chennai", "Gaya", "Both Chennai and Gaya", "Dehradun"], 2, "OTA Chennai and OTA Gaya."),
  q("Defence", "Indian Army", "Field Marshal Sam Manekshaw led the Indian Army in which war?", ["1962", "1965", "1971", "1999"], 2, "1971 Bangladesh Liberation War."),
  q("Defence", "Indian Army", "Operation Vijay (1999) is associated with", ["Goa Liberation", "Kargil War", "Siachen", "Sri Lanka"], 1, "Kargil War, though 1961 Goa was also 'Operation Vijay'."),
  q("Defence", "Indian Army", "Captain Vikram Batra was awarded the Param Vir Chakra for action in", ["Siachen", "Kargil", "Nathu La", "Longewala"], 1, "Point 4875 & 5140, Kargil 1999."),
  q("Defence", "Indian Army", "The main battle tank developed indigenously by DRDO is", ["T-90 Bhishma", "Arjun", "T-72 Ajeya", "Zorawar"], 1, "Arjun MBT."),
  q("Defence", "Indian Navy", "Motto of the Indian Navy 'Sham No Varunah' means", ["Victory at sea", "May the Lord of Water be auspicious unto us", "Service before self", "Touch the sky with glory"], 1, "Invocation to Varuna."),
  q("Defence", "Indian Navy", "The Indian Naval Academy is located at", ["Kochi", "Ezhimala", "Visakhapatnam", "Mumbai"], 1, "Ezhimala, Kerala."),
  q("Defence", "Indian Navy", "INS Arihant is India's first indigenous", ["Aircraft carrier", "Nuclear-powered ballistic missile submarine", "Destroyer", "Frigate"], 1, "SSBN commissioned 2016."),
  q("Defence", "Indian Navy", "Headquarters of the Eastern Naval Command is at", ["Kochi", "Mumbai", "Visakhapatnam", "Port Blair"], 2, "Visakhapatnam."),
  q("Defence", "Indian Navy", "BrahMos is a joint venture between India and", ["USA", "Israel", "Russia", "France"], 2, "Brahmaputra + Moskva."),
  q("Defence", "Indian Air Force", "Motto of the Indian Air Force 'Nabha Sparsham Deeptam' means", ["Touch the Sky with Glory", "Guardians of the sky", "Fly high", "Strength in the skies"], 0, "From Bhagavad Gita."),
  q("Defence", "Indian Air Force", "Air Force Academy is located at", ["Bengaluru", "Dundigal, Hyderabad", "Pune", "Jodhpur"], 1, "AFA Dundigal."),
  q("Defence", "Indian Air Force", "Rafale fighter jets were purchased from", ["USA", "Russia", "France", "UK"], 2, "Dassault Aviation, France."),
  q("Defence", "Indian Air Force", "HAL Tejas is a", ["Transport aircraft", "Light Combat Aircraft", "Helicopter", "Trainer"], 1, "LCA Tejas."),
  q("Defence", "Indian Air Force", "The only Param Vir Chakra awardee from the IAF is", ["Nirmal Jit Singh Sekhon", "Abhinandan Varthaman", "Arjan Singh", "Rakesh Sharma"], 0, "Flying Officer Sekhon, 1971."),
  q("Defence", "Indian Air Force", "Which is the indigenous light combat helicopter inducted in 2022?", ["Dhruv", "Rudra", "Prachand", "Apache"], 2, "LCH Prachand."),
  q("Defence", "Missiles", "Agni-V is a/an", ["Short range missile", "Intercontinental ballistic missile", "Cruise missile", "Anti-tank missile"], 1, "Range > 5000 km."),
  q("Defence", "Missiles", "Akash missile is a", ["Surface-to-air missile", "Air-to-air missile", "Anti-ship missile", "Ballistic missile"], 0, "Medium-range SAM."),
  q("Defence", "Missiles", "Nag is a/an", ["Anti-tank guided missile", "Anti-ship missile", "SAM", "ICBM"], 0, "Fire-and-forget ATGM."),
  q("Defence", "Missiles", "Prithvi missile belongs to which programme?", ["IGMDP", "Mission Shakti", "Gaganyaan", "Project 75"], 0, "Integrated Guided Missile Development Programme by Dr. Kalam."),
  q("Defence", "Organisations", "DRDO was established in", ["1947", "1958", "1962", "1971"], 1, "1958."),
  q("Defence", "Organisations", "Headquarters of the Indian Coast Guard is in", ["Mumbai", "Kochi", "New Delhi", "Chennai"], 2, "New Delhi."),
  q("Defence", "Organisations", "Which CAPF guards the Indo-China border?", ["BSF", "ITBP", "SSB", "CRPF"], 1, "Indo-Tibetan Border Police."),
  q("Defence", "Organisations", "Sashastra Seema Bal guards the border with", ["Pakistan", "Nepal and Bhutan", "Bangladesh", "Myanmar"], 1, "SSB guards Nepal & Bhutan borders."),
  q("Defence", "Organisations", "Assam Rifles is known as", ["Friends of the Hill People", "Sentinels of the North-East", "Both A and B", "Guardians of the East"], 2, "Both nicknames apply."),
  q("Defence", "Exercises", "Exercise 'Yudh Abhyas' is conducted between India and", ["Russia", "USA", "France", "Japan"], 1, "Indo-US Army exercise."),
  q("Defence", "Exercises", "Exercise 'Malabar' is a naval exercise among", ["India, USA, Japan, Australia", "India, Russia", "India, France", "India, UK"], 0, "QUAD navies."),
  q("Defence", "Exercises", "Exercise 'Garuda' is between the air forces of India and", ["USA", "France", "UK", "Singapore"], 1, "Indo-French air exercise."),
  q("Defence", "Ranks", "The equivalent of an Army 'Colonel' in the Indian Air Force is", ["Wing Commander", "Group Captain", "Air Commodore", "Squadron Leader"], 1, "Colonel = Group Captain = Captain (Navy)."),
  q("Defence", "Ranks", "The highest rank in the Indian Navy (ceremonial) is", ["Admiral", "Vice Admiral", "Admiral of the Fleet", "Commodore"], 2, "Five-star rank; never conferred yet."),
  q("Defence", "Ranks", "Field Marshal rank has been conferred on how many officers in India?", ["1", "2", "3", "4"], 1, "Manekshaw (1973) and Cariappa (1986)."),
  q("Defence", "Awards", "Param Vir Chakra was instituted on", ["15 Aug 1947", "26 Jan 1950", "15 Jan 1949", "2 Oct 1951"], 1, "26 January 1950 with retrospective effect from 15 Aug 1947."),
  q("Defence", "Awards", "The first recipient of Param Vir Chakra was", ["Major Somnath Sharma", "Capt. Vikram Batra", "Lt. Manoj Pandey", "Naik Jadunath Singh"], 0, "Battle of Badgam, 1947."),
  q("Defence", "History", "The Battle of Longewala (1971) was fought in", ["Punjab", "Rajasthan", "Jammu & Kashmir", "Gujarat"], 1, "Thar desert; 120 soldiers held off a Pakistani brigade."),
  q("Defence", "History", "Operation Meghdoot (1984) secured", ["Kargil", "Siachen Glacier", "Sir Creek", "Tawang"], 1, "Siachen Glacier."),
  q("Defence", "History", "The Battle of Rezang La (1962) was fought by which battalion?", ["13 Kumaon", "4 Sikh", "1 Gorkha", "2 Rajput"], 0, "Major Shaitan Singh, PVC."),
  q("Defence", "Current", "Theatre Command reforms are led by the", ["Army Chief", "Chief of Defence Staff", "Defence Secretary", "NSA"], 1, "CDS heads Department of Military Affairs."),
];

/* ------------------------------------------------------------------ */
/* GENERATORS – deterministic pseudo-random for volume                */
/* ------------------------------------------------------------------ */
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
const ri = (r: () => number, a: number, b: number) => a + Math.floor(r() * (b - a + 1));

function shuffleWithAnswer(r: () => number, correct: string, wrongs: string[]) {
  const opts = [correct, ...wrongs];
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  return { options: opts, correctIndex: opts.indexOf(correct) };
}

export function generateMath(seed: number, count: number): QSeed[] {
  const r = rng(seed);
  const out: QSeed[] = [];
  const kinds = ["percent", "si", "speed", "avg", "ratio", "ap", "quad", "hcf", "area", "work"];
  for (let i = 0; i < count; i++) {
    const kind = kinds[i % kinds.length];
    let question = "", topic = "", correct = "", wrongs: string[] = [], explanation = "";
    if (kind === "percent") {
      const p = [10, 15, 20, 25, 30, 40][ri(r, 0, 5)], n = ri(r, 2, 20) * 50;
      const ans = (p * n) / 100;
      topic = "Percentage"; question = `What is ${p}% of ${n}?`; correct = `${ans}`;
      wrongs = [`${ans + 10}`, `${ans - 5}`, `${ans * 2}`]; explanation = `${p}/100 × ${n} = ${ans}.`;
    } else if (kind === "si") {
      const P = ri(r, 2, 12) * 1000, R = ri(r, 4, 12), T = ri(r, 2, 5);
      const ans = (P * R * T) / 100;
      topic = "Simple Interest"; question = `Simple interest on ₹${P} at ${R}% per annum for ${T} years is`; correct = `₹${ans}`;
      wrongs = [`₹${ans + P * 0.1}`, `₹${ans / 2}`, `₹${ans + 100}`]; explanation = `SI = PRT/100 = ${P}×${R}×${T}/100 = ${ans}.`;
    } else if (kind === "speed") {
      const v = ri(r, 4, 12) * 10, t = ri(r, 2, 6);
      const ans = v * t;
      topic = "Speed & Distance"; question = `A vehicle travels at ${v} km/h for ${t} hours. Distance covered is`; correct = `${ans} km`;
      wrongs = [`${ans + v} km`, `${ans - t * 5} km`, `${v + t} km`]; explanation = `Distance = speed × time = ${v} × ${t} = ${ans} km.`;
    } else if (kind === "avg") {
      const a = ri(r, 10, 40), b = a + ri(r, 2, 10), c = b + ri(r, 2, 10), d = c + ri(r, 2, 10);
      const sum = a + b + c + d; const ans = sum / 4;
      topic = "Average"; question = `The average of ${a}, ${b}, ${c} and ${d} is`; correct = `${ans}`;
      wrongs = [`${ans + 2}`, `${ans - 1.5}`, `${ans + 5}`]; explanation = `Sum = ${sum}; ${sum}/4 = ${ans}.`;
    } else if (kind === "ratio") {
      const x = ri(r, 2, 5), y = ri(r, 6, 9), total = (x + y) * ri(r, 20, 100);
      const ans = (total * x) / (x + y);
      topic = "Ratio & Proportion"; question = `₹${total} is divided between A and B in the ratio ${x}:${y}. A's share is`; correct = `₹${ans}`;
      wrongs = [`₹${total - ans}`, `₹${ans + 50}`, `₹${total / 2}`]; explanation = `A = ${x}/(${x}+${y}) × ${total} = ${ans}.`;
    } else if (kind === "ap") {
      const a1 = ri(r, 1, 9), d = ri(r, 2, 7), n = ri(r, 8, 25);
      const ans = a1 + (n - 1) * d;
      topic = "Arithmetic Progression"; question = `The ${n}th term of the A.P. ${a1}, ${a1 + d}, ${a1 + 2 * d}, ... is`; correct = `${ans}`;
      wrongs = [`${ans + d}`, `${ans - d}`, `${ans + 1}`]; explanation = `aₙ = a + (n−1)d = ${a1} + ${n - 1}×${d} = ${ans}.`;
    } else if (kind === "quad") {
      const p = ri(r, 1, 7), s = ri(r, 1, 7);
      const sum = p + s, prod = p * s;
      topic = "Quadratic Equations"; question = `The roots of x² − ${sum}x + ${prod} = 0 are`; correct = `${p}, ${s}`;
      wrongs = [`−${p}, −${s}`, `${p + 1}, ${s - 1}`, `${sum}, ${prod}`]; explanation = `(x−${p})(x−${s}) = 0.`;
    } else if (kind === "hcf") {
      const g = [6, 8, 12, 15][ri(r, 0, 3)], a = g * ri(r, 2, 5), b = g * (ri(r, 6, 9));
      const gcd = (x: number, y: number): number => (y ? gcd(y, x % y) : x);
      const h = gcd(a, b); const l = (a * b) / h;
      topic = "HCF & LCM"; question = `The LCM of ${a} and ${b} is`; correct = `${l}`;
      wrongs = [`${h}`, `${l * 2}`, `${a + b}`]; explanation = `HCF = ${h}; LCM = ${a}×${b}/${h} = ${l}.`;
    } else if (kind === "area") {
      const l = ri(r, 5, 20), w = ri(r, 3, 15);
      const ans = l * w;
      topic = "Mensuration"; question = `The area of a rectangle with length ${l} m and breadth ${w} m is`; correct = `${ans} m²`;
      wrongs = [`${2 * (l + w)} m²`, `${ans + l} m²`, `${l + w} m²`]; explanation = `Area = l × b = ${ans} m².`;
    } else {
      const a = [6, 8, 10, 12][ri(r, 0, 3)], b = a + [4, 6, 8, 12][ri(r, 0, 3)];
      const ans = (a * b) / (a + b);
      topic = "Time & Work"; question = `A does a work in ${a} days and B in ${b} days. Working together they finish it in`;
      correct = `${Number(ans.toFixed(2))} days`; wrongs = [`${a + b} days`, `${Number((ans + 1).toFixed(2))} days`, `${(a + b) / 2} days`];
      explanation = `1/${a} + 1/${b} = ${a + b}/${a * b} → ${Number(ans.toFixed(2))} days.`;
    }
    const sh = shuffleWithAnswer(r, correct, wrongs);
    out.push(q("Mathematics", topic, question, sh.options, sh.correctIndex, explanation, "Easy"));
  }
  return out;
}

export function generateReasoning(seed: number, count: number): QSeed[] {
  const r = rng(seed);
  const out: QSeed[] = [];
  const words = ["ARMY", "NAVY", "PILOT", "TANK", "RADAR", "CADET", "MAJOR", "FLEET", "GUARD", "SCOUT"];
  for (let i = 0; i < count; i++) {
    const kind = i % 4;
    let question = "", topic = "", correct = "", wrongs: string[] = [], explanation = "";
    if (kind === 0) {
      const a = ri(r, 1, 9), d = ri(r, 2, 9);
      const terms = [0, 1, 2, 3, 4].map((k) => a + k * d);
      const ans = a + 5 * d;
      topic = "Number Series"; question = `Find the next term: ${terms.join(", ")}, ?`; correct = `${ans}`;
      wrongs = [`${ans + 1}`, `${ans - d + 1}`, `${ans + d}`]; explanation = `Common difference ${d} → ${ans}.`;
    } else if (kind === 1) {
      const a = ri(r, 2, 6), m = ri(r, 2, 3);
      const terms = [a, a * m, a * m * m, a * m ** 3];
      const ans = a * m ** 4;
      topic = "Number Series"; question = `Find the next term: ${terms.join(", ")}, ?`; correct = `${ans}`;
      wrongs = [`${ans + m}`, `${ans - a}`, `${ans * 2}`]; explanation = `Each term multiplied by ${m}.`;
    } else if (kind === 2) {
      const w = words[ri(r, 0, words.length - 1)], k = ri(r, 1, 5);
      const enc = (s: string, sh: number) => s.split("").map((c) => String.fromCharCode(((c.charCodeAt(0) - 65 + sh) % 26) + 65)).join("");
      const w2 = words[(words.indexOf(w) + 1) % words.length];
      topic = "Coding-Decoding"; question = `In a certain code, ${w} is written as ${enc(w, k)}. How is ${w2} written in that code?`;
      correct = enc(w2, k); wrongs = [enc(w2, k + 1), enc(w2, k - 1 || 6), enc(w2, k + 2)];
      explanation = `Each letter is shifted forward by ${k} positions.`;
    } else {
      const total = ri(r, 20, 60), left = ri(r, 3, total - 3);
      const ans = total - left + 1;
      topic = "Ranking"; question = `In a row of ${total} cadets, Arjun is ${left}th from the left end. What is his position from the right end?`;
      correct = `${ans}`; wrongs = [`${ans - 1}`, `${ans + 1}`, `${total - left}`]; explanation = `${total} − ${left} + 1 = ${ans}.`;
    }
    const sh = shuffleWithAnswer(r, correct, wrongs);
    out.push(q("Reasoning", topic, question, sh.options, sh.correctIndex, explanation, "Easy"));
  }
  return out;
}

export const banks: Record<string, QSeed[]> = {
  Mathematics: mathBank,
  English: englishBank,
  "General Knowledge": gkBank,
  Science: scienceBank,
  Reasoning: reasoningBank,
  Defence: defenceBank,
};
