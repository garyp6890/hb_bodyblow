export type BlogCategory = 
  | 'Success Stories'
  | 'Program Updates'
  | 'Community Impact'
  | 'Special Olympics'
  | 'Volunteer Stories'
  | 'Giving Guides'
  | 'Legacy Giving'
  | 'Corporate Giving'
  | 'Gifts in Kind';

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: BlogCategory;
  image: string;
  slug: string;
  content?: string;
  pdfLink?: string;
};

export const featuredPosts: BlogPost[] = [
  {
    id: 'expansion-groundbreaking',
    title: "Expansion Project Breaks Ground",
    excerpt: "A milestone moment as we begin construction on our new 12,000 sq. ft. facility expansion.",
    date: "March 15, 2024",
    category: 'Program Updates',
    image: "https://bloximages.newyork1.vip.townnews.com/wthitv.com/content/tncms/assets/v3/editorial/3/f0/3f0c6d96-867f-11ef-ac5d-772a98c2265f/6706eb2d3e572.image.png",
    slug: "expansion-groundbreaking"
  },
  {
    id: 'special-olympics-success',
    title: "Special Olympics Success",
    excerpt: "Our athletes bring home gold from the State Summer Games at Indiana State University.",
    date: "March 10, 2024",
    category: 'Special Olympics',
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
    slug: "special-olympics-success"
  },
  {
    id: 'community-impact-report',
    title: "Community Impact Report",
    excerpt: "How our programs are making a difference in the Wabash Valley, by the numbers.",
    date: "March 5, 2024",
    category: 'Community Impact',
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80",
    slug: "community-impact-report"
  }
];

export const regularPosts: BlogPost[] = [
  {
    id: 'volunteer-spotlight-sarah',
    title: "Volunteer Spotlight: Meet Sarah",
    excerpt: "Sarah has been volunteering with us for 5 years, making a difference in our friends' lives every day.",
    date: "March 1, 2024",
    category: 'Volunteer Stories',
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    slug: "volunteer-spotlight-sarah"
  },
  {
    id: 'new-life-skills-program',
    title: "New Life Skills Program Launch",
    excerpt: "Introducing our expanded life skills curriculum focused on independence and personal growth.",
    date: "February 28, 2024",
    category: 'Program Updates',
    image: "https://images.unsplash.com/photo-1560523159-6b681a1e1852?auto=format&fit=crop&q=80",
    slug: "new-life-skills-program"
  },
  {
    id: 'fundraising-success',
    title: "Annual Fundraising Success",
    excerpt: "Thanks to our generous community, we exceeded our fundraising goals for 2024.",
    date: "February 25, 2024",
    category: 'Community Impact',
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80",
    slug: "fundraising-success"
  },
  {
    id: 'summer-program-registration',
    title: "Summer Program Registration Open",
    excerpt: "Register now for our popular summer programs and activities.",
    date: "February 20, 2024",
    category: 'Program Updates',
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80",
    slug: "summer-program-registration"
  },
  {
    id: 'james-independent-living',
    title: "James Achieves Independent Living",
    excerpt: "After years of support through our Residential Program, James is now thriving in his own apartment.",
    date: "February 15, 2024",
    category: 'Success Stories',
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    slug: "james-independent-living"
  },
  {
    id: 'emily-job-placement',
    title: "Emily Secures Dream Job",
    excerpt: "Through our vocational training program, Emily found meaningful employment at a local business.",
    date: "February 10, 2024",
    category: 'Success Stories',
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    slug: "emily-job-placement"
  },
  {
    id: 'michael-swimming-champion',
    title: "Michael: From Beginner to Swimming Champion",
    excerpt: "Michael overcame his fear of water to become one of our top Special Olympics swimmers.",
    date: "February 5, 2024",
    category: 'Success Stories',
    image: "https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&q=80",
    slug: "michael-swimming-champion"
  }
];

export const givingGuidesPosts: BlogPost[] = [
  {
    id: 'reasons-to-update-will',
    title: "17 Reasons to Update Your Will",
    excerpt: "Discover smart, emotional, and practical reasons to revisit your will—and why now is the best time.",
    date: "April 15, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
    slug: "reasons-to-update-will",
    pdfLink: "/pdfs/17-reasons-update-will.pdf"
  },
  {
    id: 'guide-making-will',
    title: "A Guide to Making Your Will",
    excerpt: "Get started with confidence: simple steps, key considerations, and how to protect those you love.",
    date: "April 12, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?auto=format&fit=crop&q=80",
    slug: "guide-making-will",
    pdfLink: "/pdfs/guide-making-will.pdf"
  },
  {
    id: 'beneficiary-designations-explained',
    title: "Beneficiary Designations Explained",
    excerpt: "Learn how beneficiary designations affect your legacy—and how to get them right.",
    date: "April 10, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
    slug: "beneficiary-designations-explained",
    pdfLink: "/pdfs/beneficiary-designations.pdf"
  },
  {
    id: 'charitable-gift-annuities',
    title: "Charitable Gift Annuities 101",
    excerpt: "Turn your generosity into lifetime income with this powerful, underused giving tool.",
    date: "April 8, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80",
    slug: "charitable-gift-annuities",
    pdfLink: "/pdfs/charitable-gift-annuities.pdf"
  },
  {
    id: 'deferred-gift-annuities',
    title: "Deferred Gift Annuities",
    excerpt: "Lock in future gifts while securing income later. A flexible solution for long-term givers.",
    date: "April 5, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80",
    slug: "deferred-gift-annuities",
    pdfLink: "/pdfs/deferred-gift-annuities.pdf"
  },
  {
    id: 'donor-advised-funds',
    title: "Donor Advised Funds Simplified",
    excerpt: "Centralize your giving, save on taxes, and create a family legacy of generosity.",
    date: "April 3, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80",
    slug: "donor-advised-funds",
    pdfLink: "/pdfs/donor-advised-funds.pdf"
  },
  {
    id: 'maximize-donor-advised-funds',
    title: "Maximize the Impact of Donor Advised Funds",
    excerpt: "Learn how to stretch your generosity further using DAFs—combine tax savings, long-term planning, and smart impact in one powerful tool.",
    date: "April 2, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80",
    slug: "maximize-donor-advised-funds",
    pdfLink: "/pdfs/maximize-donor-advised-funds.pdf"
  },
  {
    id: 'endowments-impact',
    title: "Endowments & Everlasting Impact",
    excerpt: "Learn how to set up a fund that supports causes forever—one of the most powerful giving tools.",
    date: "April 1, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1554672408-730436b60dde?auto=format&fit=crop&q=80",
    slug: "endowments-impact",
    pdfLink: "/pdfs/endowments-impact.pdf"
  },
  {
    id: 'estate-planning-starters',
    title: "Estate Planning Starters",
    excerpt: "A no-pressure guide to planning your estate—whether you're 25 or 75.",
    date: "March 29, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
    slug: "estate-planning-starters",
    pdfLink: "/pdfs/estate-planning-starters.pdf"
  },
  {
    id: 'estate-planning-at-home',
    title: "Estate Planning at Home",
    excerpt: "You don't need a lawyer to get started. Use these simple at-home tools to prepare.",
    date: "March 27, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
    slug: "estate-planning-at-home",
    pdfLink: "/pdfs/estate-planning-at-home.pdf"
  },
  {
    id: 'maximize-retirement-assets',
    title: "Maximize Retirement Assets",
    excerpt: "Use your IRA, 401(k), or pension to make a tax-efficient impact.",
    date: "March 25, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80",
    slug: "maximize-retirement-assets",
    pdfLink: "/pdfs/maximize-retirement-assets.pdf"
  },
  {
    id: 'blended-family-planning',
    title: "Navigating Blended Family Planning",
    excerpt: "Plan for a family with stepkids, second marriages, and complex love.",
    date: "March 23, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
    slug: "blended-family-planning",
    pdfLink: "/pdfs/blended-family-planning.pdf"
  },
  {
    id: 'protect-pets',
    title: "Protect Your Pets After You're Gone",
    excerpt: "Make sure your furry friends are cared for through estate and trust options.",
    date: "March 21, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&q=80",
    slug: "protect-pets",
    pdfLink: "/pdfs/protect-pets.pdf"
  },
  {
    id: 'life-insurance-legacy',
    title: "Life Insurance & Legacy Giving",
    excerpt: "Use life insurance to give more than you thought possible—with zero impact on your day-to-day.",
    date: "March 19, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
    slug: "life-insurance-legacy",
    pdfLink: "/pdfs/life-insurance-legacy.pdf"
  },
  {
    id: 'real-estate-gifts',
    title: "Real Estate Gifts Explained",
    excerpt: "Donate property without selling it yourself. Avoid capital gains and maximize impact.",
    date: "March 17, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    slug: "real-estate-gifts",
    pdfLink: "/pdfs/real-estate-gifts.pdf"
  },
  {
    id: 'trusts-options',
    title: "Trusts: 2 Powerful Options",
    excerpt: "Learn the difference between charitable remainder trusts and lead trusts—plus when to use them.",
    date: "March 15, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?auto=format&fit=crop&q=80",
    slug: "trusts-options",
    pdfLink: "/pdfs/trusts-options.pdf"
  },
  {
    id: 'first-48-hours',
    title: "What to Do in the First 48 Hours",
    excerpt: "A heartfelt checklist for handling the first days after losing someone.",
    date: "March 13, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80",
    slug: "first-48-hours",
    pdfLink: "/pdfs/first-48-hours.pdf"
  },
  {
    id: 'loved-one-passes',
    title: "When a Loved One Passes Away",
    excerpt: "A guide for honoring, organizing, and moving forward with purpose.",
    date: "March 11, 2024",
    category: 'Legacy Giving',
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    slug: "loved-one-passes",
    pdfLink: "/pdfs/loved-one-passes.pdf"
  },
];

export const corporateGivingPosts: BlogPost[] = [
  {
    id: 'matching-gifts',
    title: "Matching Gifts: Doubling Your Impact Through Employee Contributions",
    excerpt: "Explore how matching gift programs can amplify employee donations and benefit both your company and Happiness Bag.",
    date: "April 20, 2024",
    category: 'Corporate Giving',
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80",
    slug: "matching-gifts",
    pdfLink: "/pdfs/corporate/matching-gifts.pdf"
  },
  {
    id: 'volunteer-grants',
    title: "Volunteer Grants: Turning Employee Time into Tangible Support",
    excerpt: "Learn how your company's volunteer efforts can translate into financial contributions through volunteer grant programs.",
    date: "April 18, 2024",
    category: 'Corporate Giving',
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80",
    slug: "volunteer-grants",
    pdfLink: "/pdfs/corporate/volunteer-grants.pdf"
  },
  {
    id: 'corporate-sponsorships',
    title: "Corporate Sponsorships: Partnering for Community Events and Programs",
    excerpt: "Discover opportunities to sponsor events and programs, enhancing your brand visibility while supporting our cause.",
    date: "April 16, 2024",
    category: 'Corporate Giving',
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80",
    slug: "corporate-sponsorships",
    pdfLink: "/pdfs/corporate/corporate-sponsorships.pdf"
  },
  {
    id: 'in-kind-donations',
    title: "In-Kind Donations: Providing Goods and Services to Meet Immediate Needs",
    excerpt: "Understand how donating products or services can fulfill critical needs and support our daily operations.",
    date: "April 14, 2024",
    category: 'Corporate Giving',
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80",
    slug: "in-kind-donations",
    pdfLink: "/pdfs/corporate/in-kind-donations.pdf"
  },
  {
    id: 'payroll-giving-programs',
    title: "Payroll Giving Programs: Simplifying Employee Contributions",
    excerpt: "Implement payroll deduction programs to facilitate regular employee donations to Happiness Bag.",
    date: "April 12, 2024",
    category: 'Corporate Giving',
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
    slug: "payroll-giving-programs",
    pdfLink: "/pdfs/corporate/payroll-giving-programs.pdf"
  },
  {
    id: 'employee-grant-stipends',
    title: "Employee Grant Stipends: Empowering Staff to Support Their Causes",
    excerpt: "Offer employees stipends to donate to nonprofits of their choice, fostering a culture of giving.",
    date: "April 10, 2024",
    category: 'Corporate Giving',
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
    slug: "employee-grant-stipends",
    pdfLink: "/pdfs/corporate/employee-grant-stipends.pdf"
  },
  {
    id: 'team-volunteer-grants',
    title: "Team Volunteer Grants: Encouraging Group Engagement for Greater Impact",
    excerpt: "Promote team-based volunteering and provide grants to organizations where your teams contribute their time.",
    date: "April 8, 2024",
    category: 'Corporate Giving',
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
    slug: "team-volunteer-grants",
    pdfLink: "/pdfs/corporate/team-volunteer-grants.pdf"
  },
  {
    id: 'fundraising-matches',
    title: "Fundraising Matches: Amplifying Employee-Led Fundraising Efforts",
    excerpt: "Match funds raised by employees during fundraising events to double the impact of their efforts.",
    date: "April 6, 2024",
    category: 'Corporate Giving',
    image: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?auto=format&fit=crop&q=80",
    slug: "fundraising-matches",
    pdfLink: "/pdfs/corporate/fundraising-matches.pdf"
  },
  {
    id: 'annual-giving-campaigns',
    title: "Annual Giving Campaigns: Structuring Yearly Corporate Giving Initiatives",
    excerpt: "Plan and execute annual giving campaigns to systematically support charitable causes.",
    date: "April 4, 2024",
    category: 'Corporate Giving',
    image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80",
    slug: "annual-giving-campaigns",
    pdfLink: "/pdfs/corporate/annual-giving-campaigns.pdf"
  },
  {
    id: 'corporate-donor-advised-funds',
    title: "Donor-Advised Funds: Strategic Philanthropy for Long-Term Impact",
    excerpt: "Utilize donor-advised funds to manage charitable donations and support nonprofits like Happiness Bag.",
    date: "April 2, 2024",
    category: 'Corporate Giving',
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80",
    slug: "corporate-donor-advised-funds",
    pdfLink: "/pdfs/corporate/corporate-donor-advised-funds.pdf"
  },
  {
    id: 'corporate-foundations',
    title: "Corporate Foundations: Establishing a Dedicated Entity for Philanthropy",
    excerpt: "Learn how creating a corporate foundation can centralize and streamline your company's philanthropic efforts.",
    date: "March 31, 2024",
    category: 'Corporate Giving',
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    slug: "corporate-foundations",
    pdfLink: "/pdfs/corporate/corporate-foundations.pdf"
  },
  {
    id: 'cause-related-marketing',
    title: "Cause-Related Marketing: Aligning Brand Promotion with Social Good",
    excerpt: "Combine marketing efforts with charitable initiatives to promote your brand while supporting our mission.",
    date: "March 29, 2024",
    category: 'Corporate Giving',
    image: "https://images.unsplash.com/photo-1529119513315-d7c97b4bed8e?auto=format&fit=crop&q=80",
    slug: "cause-related-marketing",
    pdfLink: "/pdfs/corporate/cause-related-marketing.pdf"
  }
];

export const giftsInKindPosts: BlogPost[] = [
  {
    id: 'art-supplies-impact',
    title: "The Transformative Impact of Art Supplies",
    excerpt: "Discover how donated art materials empower expression and creativity in our day programs.",
    date: "April 20, 2024",
    category: 'Gifts in Kind',
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80",
    slug: "art-supplies-impact",
    pdfLink: "/pdfs/gifts-in-kind/art-supplies-impact.pdf"
  },
  {
    id: 'technology-donations',
    title: "Technology Donations: Bridging the Digital Divide",
    excerpt: "Learn how computer and technology donations create opportunities for learning and connection.",
    date: "April 18, 2024",
    category: 'Gifts in Kind',
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    slug: "technology-donations",
    pdfLink: "/pdfs/gifts-in-kind/technology-donations.pdf"
  },
  {
    id: 'sports-equipment-access',
    title: "Sports Equipment: Creating Access to Recreation and Fitness",
    excerpt: "See how donations of sports and recreational equipment promote physical health and teamwork.",
    date: "April 16, 2024",
    category: 'Gifts in Kind',
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
    slug: "sports-equipment-access",
    pdfLink: "/pdfs/gifts-in-kind/sports-equipment-access.pdf"
  },
  {
    id: 'sensory-items-donations',
    title: "Sensory Items: Supporting Sensory Processing Needs",
    excerpt: "Understand how specialized sensory tools help individuals with different sensory needs thrive.",
    date: "April 14, 2024",
    category: 'Gifts in Kind',
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80",
    slug: "sensory-items-donations",
    pdfLink: "/pdfs/gifts-in-kind/sensory-items-donations.pdf"
  },
  {
    id: 'furniture-equipment-donations',
    title: "Furniture and Equipment: Building Functional Spaces",
    excerpt: "Learn how furniture and equipment donations help create welcoming, functional environments.",
    date: "April 12, 2024",
    category: 'Gifts in Kind',
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80",
    slug: "furniture-equipment-donations",
    pdfLink: "/pdfs/gifts-in-kind/furniture-equipment-donations.pdf"
  },
  {
    id: 'professional-services-impact',
    title: "Professional Services: Expertise That Makes a Difference",
    excerpt: "Discover how donated professional services like accounting and legal work support our mission.",
    date: "April 10, 2024",
    category: 'Gifts in Kind',
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    slug: "professional-services-impact",
    pdfLink: "/pdfs/gifts-in-kind/professional-services-impact.pdf"
  },
  {
    id: 'educational-materials-learning',
    title: "Educational Materials: Fostering Lifelong Learning",
    excerpt: "See how books, learning tools, and educational resources enhance our programs.",
    date: "April 8, 2024",
    category: 'Gifts in Kind',
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
    slug: "educational-materials-learning",
    pdfLink: "/pdfs/gifts-in-kind/educational-materials-learning.pdf"
  },
  {
    id: 'hygiene-products-dignity',
    title: "Hygiene Products: Promoting Dignity and Wellness",
    excerpt: "Understand how essential hygiene items support health, dignity, and independence.",
    date: "April 6, 2024",
    category: 'Gifts in Kind',
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80",
    slug: "hygiene-products-dignity",
    pdfLink: "/pdfs/gifts-in-kind/hygiene-products-dignity.pdf"
  }
];

export const getAllPosts = (): BlogPost[] => {
  return [...featuredPosts, ...regularPosts, ...givingGuidesPosts, ...corporateGivingPosts, ...giftsInKindPosts];
};

export const getPostsByCategory = (category: BlogCategory): BlogPost[] => {
  return getAllPosts().filter(post => post.category === category);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return getAllPosts().find(post => post.slug === slug);
};

export const getCategories = (): { name: BlogCategory; count: number }[] => {
  const categories = getAllPosts().reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = 0;
    }
    acc[post.category]++;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(categories).map(([name, count]) => ({
    name: name as BlogCategory,
    count
  })).sort((a, b) => b.count - a.count);
};