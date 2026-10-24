export interface WorkProjectItem {
  slug: string;
  title: string;
  pitch: string;
  highlights: string[];
  href?: string;
  /** Headline figure for the home page's selected work; taken from the highlights. */
  figure?: { value: string; label: string };
}

// Figures as of October 2026, rounded for public use.
export const workProjects: WorkProjectItem[] = [
  {
    slug: 'agent-builder',
    title: 'Agent Builder',
    pitch: 'Describe a task in plain English, get a tested AI workflow.',
    highlights: [
      'Picks the tools, designs the steps and test-runs the draft. No code or prompts needed. The median build reaches a tested workflow in about 6 minutes.',
      'Over 2,000 workflows saved for tasks like document extraction, reconciliation, invoice checks and FX rate tables. Most runs come from workflows staff reuse.',
      'Tests workflows during the build: 94% of test runs pass, and 95–99% of production runs succeed each month.',
    ],
    figure: { value: '2,000+', label: 'workflows saved' },
  },
  {
    slug: 'commercial-insights-copilot',
    title: 'Commercial Insights Copilot',
    pitch: 'Ask commercial data a question, get an analyst’s answer.',
    highlights: [
      'Reads commercial Tableau sources and the data warehouse, runs the analysis in Python and explains the result. The median answer arrives in under a minute.',
      'Starts a daily market scan at each analyst’s login. It covers load factor, bookings, competitor data and news, and lands in about 6 minutes.',
      'Built for deep analysis, not lookups. It has run thousands of Python analyses and tens of thousands of data requests.',
    ],
  },
  {
    slug: 'action-with-data',
    title: 'Action with Data',
    pitch: 'Upload a spreadsheet, get the analysis done.',
    highlights: [
      'Writes and runs sandboxed Python over up to 15 files and 1M rows, then returns tables, charts and files. Used by staff in over 100 departments and stations.',
      'Only 0.26% of code jobs hit a system error, and the median script runs in under a second.',
      'Next version: department-owned skills go live in 30 seconds with no deployment. Prompt caching cut coding-agent input cost by 70–87% in tests.',
    ],
  },
  {
    slug: 'agent360-smart-search',
    title: 'Agent360 Smart Search',
    pitch: 'Ask the manuals, get a cited answer in seconds.',
    highlights: [
      'Answers travel agents’ questions from over 500 pages of manuals with page citations. The median answer takes about 18 seconds, against about 2 days for a sales-support enquiry.',
      'Hybrid retrieval, reranking and an AI reviewer that falls back to the public knowledge base. 99.8% of searches return an answer.',
      'About 13,000 searches, used every day since launch. It runs serverless with a 0.18% system error rate.',
    ],
    href: 'https://agent360.singaporeair.com/en_UK/us/index',
    figure: { value: '18 s', label: 'median cited answer, vs ~2 days' },
  },
  {
    slug: 'llm-gateway',
    title: 'Enterprise LLM Gateway',
    pitch: 'One governed front door to many AI models.',
    highlights: [
      'Routes tens of millions of model requests to 40+ models across 4 providers. Key models run on two clouds for resilience.',
      'Teams get a key and a route in a median of 6 days. Active teams grew from 5 to over 50 between Nov 2025 and Mar 2026.',
      'Tenant-isolated across group companies, with per-call cost logging and caching. 99.55% of calls succeed, with a median response of 2.3 s.',
    ],
    figure: { value: '50+', label: 'teams on 40+ models' },
  },
  {
    slug: 'flight-recommender',
    title: 'Flight Recommender',
    pitch: 'Type one sentence, get priced flights.',
    highlights: [
      'An LLM pipeline reads intent, airports, dates, cabin and budget, then ranks live cash and miles fares. One search covers up to 5 destinations and a 2-month window.',
      'Served millions of searches a year on SIA’s website, app and chatbot, and turns off-topic queries into guided replies, not errors.',
      'Serverless by design: response time fell from about 6 to 4 seconds, and infrastructure cost fell about 90%.',
    ],
    figure: { value: '~90%', label: 'lower infrastructure cost' },
  },
];
