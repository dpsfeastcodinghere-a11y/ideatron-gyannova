var class10_math_problems = [
  {
    id: "class10_math_real_numbers_1",
    topic: "Real Numbers",
    difficulty: "Medium",
    question: "The sum of the exponents of the prime factors in the prime factorization of 196 is:",
    options: ["a) 1", "b) 2", "c) 4", "d) 6"],
    answer: "c) 4",
    solution: "The prime factorization of 196 is 2^2 * 7^2. The sum of the exponents is 2 + 2 = 4.",
    hint: ""
  },
  {
    id: "class10_math_real_numbers_2",
    topic: "Real Numbers",
    difficulty: "Easy",
    question: "Find the HCF and LCM of 6 and 20 by the prime factorization method.",
    options: [],
    answer: "HCF = 2, LCM = 60",
    solution: "Prime factorization of 6 = 2 × 3. Prime factorization of 20 = 2^2 × 5.\nHCF = 2. LCM = 2^2 × 3 × 5 = 60.",
    hint: ""
  },
  {
    id: "class10_math_real_numbers_3",
    topic: "Real Numbers",
    difficulty: "Medium",
    question: "Show that 5 - √3 is irrational.",
    options: [],
    answer: "Proof by contradiction",
    solution: "Assume 5 - √3 is rational. Then 5 - √3 = a/b, where a, b are integers and b ≠ 0. This implies √3 = 5 - a/b = (5b - a)/b. Since a, b are integers, (5b - a)/b is rational. This means √3 is rational, which contradicts the fact that √3 is irrational. Therefore, our assumption is false, and 5 - √3 is irrational.",
    hint: "Use proof by contradiction."
  },
  {
    id: "class10_math_real_numbers_4",
    topic: "Real Numbers",
    difficulty: "Hard",
    question: "Prove that √2 is irrational.",
    options: [],
    answer: "Proof by contradiction",
    solution: "Assume √2 is rational. Then √2 = a/b, where a, b are coprime integers and b ≠ 0. Squaring both sides, 2 = a^2/b^2, so a^2 = 2b^2. This means a^2 is even, so a must be even. Let a = 2k for some integer k. Substituting into the equation, (2k)^2 = 2b^2, which gives 4k^2 = 2b^2, or 2k^2 = b^2. This means b^2 is even, so b must be even. This contradicts our assumption that a and b are coprime. Therefore, √2 is irrational.",
    hint: "Use proof by contradiction and the property that if a^2 is even, then a is even."
  },
  {
    id: "class10_math_real_numbers_5",
    topic: "Real Numbers",
    difficulty: "Medium",
    question: "The decimal expansion of the rational number 14587/1250 will terminate after how many decimal places?",
    options: ["a) 1", "b) 2", "c) 3", "d) 4"],
    answer: "d) 4",
    solution: "1250 = 2 × 5^4. For the decimal expansion to terminate, the denominator must be of the form 2^m × 5^n. The highest power of 5 is 4, so it will terminate after 4 decimal places.",
    hint: "Analyze the prime factorization of the denominator."
  }
];