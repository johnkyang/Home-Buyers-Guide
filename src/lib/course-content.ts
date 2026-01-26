export interface Lesson {
  id: string;
  title: string;
  content: string;
  worksheetPlaceholder?: boolean;
}

export interface ModuleContent {
  id: string;
  number: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export const courseContent: ModuleContent[] = [
  {
    id: 'start-here',
    number: 0,
    title: 'Start Here',
    description: 'Your 7-day action plan to get started',
    lessons: [
      {
        id: 'start-here-1',
        title: 'What to Do First',
        content: `# What to Do First

Welcome to your California homebuying journey! This lesson will help you understand the very first steps you should take.

## Your Starting Checklist

Before diving into the details of mortgages and home searching, you need to lay the groundwork:

1. **Check your credit score** - Get a free credit report from annualcreditreport.com
2. **Review your finances** - Understand your income, debts, and savings
3. **Start saving** - Even small amounts add up for closing costs
4. **Research neighborhoods** - Begin exploring areas where you might want to live

## Why This Matters

The homebuying process in California is competitive. Being prepared before you start house hunting gives you a significant advantage. Pre-approved buyers are taken more seriously by sellers.

## Action Items

- Pull your free credit report
- Calculate your monthly income and expenses
- Set up a dedicated savings account for your home purchase
- Make a list of 3-5 neighborhoods to research

*Remember: This is educational information only. Always consult with a licensed professional for advice specific to your situation.*`,
      },
      {
        id: 'start-here-2',
        title: 'Timeline Overview',
        content: `# Understanding the Homebuying Timeline

The California homebuying process typically takes 30-60 days from accepted offer to closing, but your preparation should start months before.

## The Full Timeline

### 3-6 Months Before
- Check and improve your credit score
- Save for down payment and closing costs
- Research loan programs and DPA options
- Get pre-approved for a mortgage

### 1-3 Months Before
- Find a real estate agent
- Define your home requirements
- Start touring homes
- Make offers

### Under Contract (30-45 Days)
- Home inspection
- Appraisal
- Loan processing and underwriting
- Final walkthrough
- Closing!

## California-Specific Considerations

California's market moves fast. In competitive areas, you may need to:
- Be ready to act quickly on new listings
- Consider waiving certain contingencies (with proper guidance)
- Have your financing fully in order

## Key Dates to Track

- Earnest money deposit deadline
- Inspection contingency period
- Appraisal deadline
- Loan approval deadline
- Closing date

*This timeline is for educational purposes. Your actual timeline may vary based on market conditions and lender requirements.*`,
      },
      {
        id: 'start-here-3',
        title: 'Homebuyer Readiness Assessment',
        content: `# Are You Ready to Buy a Home?

This self-assessment will help you understand where you stand in your homebuying readiness.

## Financial Readiness

### Credit Score
- **Excellent (740+)**: Best rates and loan options available
- **Good (700-739)**: Most loan programs accessible
- **Fair (640-699)**: FHA and some conventional options
- **Below 640**: May need to work on credit improvement

### Down Payment Savings
California down payment assistance programs may help if you have limited savings. Consider:
- How much do you currently have saved?
- Can you receive gift funds from family?
- Have you researched California DPA programs?

### Debt-to-Income Ratio
Most lenders want your total monthly debt payments (including future mortgage) to be below 43-50% of your gross monthly income.

## Lifestyle Readiness

Ask yourself:
- Am I planning to stay in this area for at least 3-5 years?
- Is my employment stable?
- Am I prepared for the responsibilities of homeownership?
- Do I have an emergency fund for unexpected repairs?

## Next Steps Based on Your Assessment

**If you're ready:** Move on to Module 1 to understand your buying power.

**If you need more time:** Focus on building your credit score, saving more, and paying down debts.

*This assessment is for self-reflection only and does not constitute financial advice.*`,
      },
    ],
  },
  {
    id: 'budget-buying-power',
    number: 1,
    title: 'Budget + Buying Power',
    description: 'Understanding your true buying capacity',
    lessons: [
      {
        id: 'budget-1',
        title: 'Understanding PITI and Monthly Payments',
        content: `# Understanding PITI and Monthly Payments

When calculating what you can afford, you need to understand all the components of a monthly mortgage payment.

## What is PITI?

PITI stands for:
- **P**rincipal - The amount that pays down your loan balance
- **I**nterest - The cost of borrowing the money
- **T**axes - Property taxes (California rates vary by county)
- **I**nsurance - Homeowners insurance

## Additional Costs

Your total housing payment may also include:
- **Mortgage Insurance** - Required if down payment is less than 20%
- **HOA Fees** - If buying in a community with an association
- **Mello-Roos** - Special California tax districts (common in newer developments)

## Example Payment Breakdown

For a $500,000 home with 10% down in California:

| Component | Monthly Amount |
|-----------|----------------|
| Principal & Interest | ~$2,700 |
| Property Taxes | ~$520 |
| Homeowners Insurance | ~$150 |
| PMI | ~$200 |
| **Total** | **~$3,570** |

*These are estimates. Actual amounts vary based on rate, location, and other factors.*

## The 28/36 Rule

A common guideline:
- Housing costs should be ≤28% of gross monthly income
- Total debt payments should be ≤36% of gross monthly income

*Always verify affordability with a licensed loan officer.*`,
      },
      {
        id: 'budget-2',
        title: 'Comfort Budget vs Maximum Approval',
        content: `# Comfort Budget vs Maximum Approval

Just because you're approved for a certain amount doesn't mean you should spend it all.

## The Approval Amount

Lenders calculate your maximum approval based on:
- Your income and employment history
- Your credit score
- Your existing debts
- Current interest rates

## Your Comfort Budget

Your comfort budget should account for:
- Lifestyle expenses (travel, dining, hobbies)
- Future goals (retirement savings, education)
- Emergency fund maintenance
- Home maintenance costs (1-3% of home value annually)
- Utility bills (may increase with larger home)

## Finding Your Number

**Step 1:** Calculate your maximum mortgage payment (gross monthly income × 0.28)

**Step 2:** Subtract other housing costs (taxes, insurance, HOA)

**Step 3:** Consider your lifestyle - what payment lets you live comfortably?

## California Cost Considerations

- Higher property taxes in some areas
- Earthquake insurance (optional but recommended)
- Higher utility costs in some regions
- Wildfire insurance in certain zones

## The Smart Approach

Leave room in your budget for:
- Interest rate changes
- Property tax increases
- Future life changes

*Work with a financial professional to determine your personal comfort budget.*`,
      },
      {
        id: 'budget-3',
        title: 'True Cost of Homeownership',
        content: `# The True Cost of Homeownership

Owning a home costs more than just your mortgage payment.

## One-Time Costs at Purchase
- Down payment (3-20%+ of purchase price)
- Closing costs (2-5% of purchase price)
- Moving expenses
- Initial repairs or updates
- New furniture/appliances

## Ongoing Monthly Costs
- Mortgage payment (PITI)
- HOA fees (if applicable)
- Utilities
- Landscaping/yard care

## Annual Maintenance Budget

Budget 1-3% of your home's value annually for maintenance.
For a $500,000 home = $5,000-$15,000/year

### Common Maintenance Items
- HVAC servicing
- Roof repairs/replacement
- Plumbing issues
- Appliance replacement
- Painting and updates

## California-Specific Costs
- Earthquake preparedness
- Pool maintenance (if applicable)
- Wildfire mitigation
- Solar panel maintenance

## Building Your Reserve Fund

Before buying, aim to have:
- Down payment
- Closing costs
- 3-6 months of housing payments
- Initial maintenance reserve

*This information is for planning purposes. Actual costs may vary.*`,
        worksheetPlaceholder: true,
      },
    ],
  },
  {
    id: 'mortgage-basics',
    number: 2,
    title: 'Mortgage Basics (CA)',
    description: 'California-specific loan options explained',
    lessons: [
      {
        id: 'mortgage-1',
        title: 'Loan Types: Conventional, FHA, and VA',
        content: `# Loan Types: Conventional, FHA, and VA

Understanding different loan types helps you choose the best option for your situation.

## Conventional Loans

**Best for:** Buyers with good credit and savings

- Minimum 3% down (5% for non-primary residence)
- Credit score typically 620+, best rates at 740+
- PMI required below 20% down (can be removed later)
- Loan limits vary by California county

## FHA Loans

**Best for:** First-time buyers, lower credit scores

- Minimum 3.5% down with 580+ credit score
- 10% down with 500-579 credit score
- Mortgage insurance for life of loan (unless refinanced)
- More flexible qualification requirements
- California loan limits apply

## VA Loans

**Best for:** Veterans and active military

- 0% down payment
- No private mortgage insurance
- Competitive interest rates
- Funding fee may apply
- Must meet service requirements

## California Conforming Loan Limits (2024)

- Standard counties: $766,550
- High-cost counties (LA, SF, etc.): Up to $1,149,825

*Loan limits change annually. Verify current limits with your lender.*

## Which Loan is Right for You?

Consider:
- Your down payment savings
- Your credit score
- Your military service status
- The home price and location

*Consult with a licensed loan officer to determine your best option.*`,
      },
      {
        id: 'mortgage-2',
        title: 'Interest Rate vs APR',
        content: `# Interest Rate vs APR: What's the Difference?

Understanding these two numbers helps you compare loan offers accurately.

## Interest Rate

The interest rate is:
- The cost of borrowing the principal
- Used to calculate your monthly payment
- Does NOT include fees and other costs

## APR (Annual Percentage Rate)

The APR includes:
- The interest rate
- Lender fees
- Points
- Mortgage insurance
- Other costs spread over the loan term

APR gives you the "true cost" of the loan.

## Why Both Numbers Matter

**Example:** Two loan offers

| | Loan A | Loan B |
|---|--------|--------|
| Interest Rate | 6.5% | 6.25% |
| Points | 0 | 2 |
| APR | 6.6% | 6.7% |

Loan B has a lower rate but higher APR due to points!

## Points Explained

**Discount Points:**
- Prepaid interest to lower your rate
- 1 point = 1% of loan amount
- May make sense if staying long-term

**Origination Points:**
- Lender fees
- Negotiable in some cases

## Making the Right Choice

Consider:
- How long will you keep this loan?
- Do you have cash for points?
- What's your break-even point?

*Always compare APR when shopping for loans.*`,
      },
      {
        id: 'mortgage-3',
        title: 'Reading a Loan Estimate',
        content: `# How to Read a Loan Estimate

The Loan Estimate is a 3-page standardized form that helps you understand and compare loan offers.

## Page 1: Loan Terms

Key information:
- **Loan Amount:** How much you're borrowing
- **Interest Rate:** Your rate (may be locked or not)
- **Monthly Principal & Interest:** Your base payment
- **Projected Payments:** Total monthly including escrow
- **Closing Costs:** Estimated costs to close

## Page 2: Closing Cost Details

### Section A: Origination Charges
- Points (if any)
- Lender fees

### Section B: Services You Cannot Shop For
- Appraisal fee
- Credit report fee
- Flood certification

### Section C: Services You CAN Shop For
- Title insurance
- Home inspection
- Survey

### Sections E-H: Taxes, Insurance, Prepaids
- Property taxes
- Homeowners insurance
- Prepaid interest
- Escrow setup

## Page 3: Comparisons

Shows you:
- Total costs over 5 years
- APR
- Total interest percentage

## Red Flags to Watch For

- Unusually high origination fees
- Rate that seems too good to be true
- Excessive "junk fees"
- Items that differ significantly from initial discussions

## Compare Multiple Estimates

Get at least 3 Loan Estimates and compare:
- APR
- Total closing costs
- Monthly payment
- Cash needed to close

*Lenders must provide a Loan Estimate within 3 business days of application.*`,
        worksheetPlaceholder: true,
      },
    ],
  },
  {
    id: 'documents-underwriting',
    number: 3,
    title: 'Documents + Underwriting',
    description: 'Getting your paperwork ready',
    lessons: [
      {
        id: 'docs-1',
        title: 'Income Documentation',
        content: `# Income Documentation Requirements

Lenders verify your income to ensure you can afford the mortgage. Here's what to prepare.

## W-2 Employees

**Required Documents:**
- 2 years of W-2s
- 30 days of pay stubs
- 2 years of tax returns (sometimes)
- Employment verification letter

**Tips:**
- Avoid job changes during the loan process
- Gaps in employment will be questioned
- Overtime/bonus income may need 2-year history

## Self-Employed Borrowers

**Required Documents:**
- 2 years of personal tax returns
- 2 years of business tax returns
- Year-to-date profit & loss statement
- Business license
- CPA letter (sometimes)

**Challenges:**
- Business deductions lower taxable income
- Need to show stable or increasing income
- May need larger down payment

## Other Income Types

**Rental Income:**
- 2 years of tax returns
- Lease agreements
- Usually counted at 75% of gross rent

**Retirement/Social Security:**
- Award letters
- 2 months of statements

**Alimony/Child Support:**
- Court order or divorce decree
- 3 months of payment history

## What Underwriters Look For

- Stable, consistent income
- Likelihood of continued employment
- Income sufficient for the debt-to-income ratio

*Gather your documents early to avoid delays in the loan process.*`,
      },
      {
        id: 'docs-2',
        title: 'Asset Sourcing and Verification',
        content: `# Asset Sourcing and Verification

Lenders need to verify where your down payment and closing costs are coming from.

## What Needs to Be Sourced

- Down payment funds
- Closing cost funds
- Required reserves (if any)

## Bank Statements

**Requirements:**
- 2 months of statements (all pages)
- All accounts holding funds for closing
- Statements must show your name and account number

## Large Deposits

Any deposit over 50% of your monthly income must be explained:
- Pay stub showing bonus
- Tax refund documentation
- Sale of asset documentation
- Gift letter (if applicable)

**Red Flags:**
- Cash deposits (very hard to source)
- Transfers from unknown sources
- Cryptocurrency conversions

## Gift Funds

**Requirements:**
- Gift letter stating no repayment expected
- Donor's bank statements showing ability to give
- Paper trail of transfer

**California Specifics:**
- FHA: Gift can be 100% of down payment
- Conventional: May need some own funds

## Retirement Account Funds

**Using 401k/IRA:**
- Can sometimes use for down payment
- May need to document withdrawal terms
- Consider tax implications

## Tips for a Smooth Process

1. Avoid large deposits before applying
2. Keep clear paper trails
3. Don't move money between accounts unnecessarily
4. Save all documentation of asset sources

*Work with your loan officer to understand specific requirements for your situation.*`,
        worksheetPlaceholder: true,
      },
      {
        id: 'docs-3',
        title: 'Gift Funds Guide',
        content: `# Using Gift Funds for Your Home Purchase

Gift funds can help you reach your down payment goal, but there are specific rules to follow.

## What Qualifies as a Gift

A gift must be:
- Truly a gift (no repayment expected)
- From an acceptable donor
- Properly documented

## Acceptable Donors

**Typically Acceptable:**
- Parents and grandparents
- Siblings
- Spouse or domestic partner
- Aunts, uncles, cousins

**Sometimes Acceptable:**
- Close friends (may need additional documentation)
- Employers (may need specific documentation)

**Usually NOT Acceptable:**
- Interested parties (seller, real estate agent, lender)
- Anonymous donors

## Required Documentation

### Gift Letter Must Include:
- Donor's name, address, phone
- Relationship to borrower
- Dollar amount of gift
- Address of property being purchased
- Statement that no repayment is expected
- Donor's signature
- Date

### Additional Requirements:
- Donor's bank statement showing withdrawal
- Your bank statement showing deposit
- Wire transfer confirmation (if wired)

## Timing Considerations

**Best Practice:**
- Receive gift after you're in contract
- Keep funds separate until needed
- Don't co-mingle with other funds

**If Gift Already Received:**
- You'll need to source it
- May need donor statements from that time

## Loan Program Rules

**FHA:**
- 100% of down payment can be gift
- Family members only

**Conventional:**
- May need some of your own funds
- Rules vary by down payment amount

**VA:**
- Gifts allowed with no down payment required anyway

*Always confirm gift fund requirements with your lender before accepting gifts.*`,
        worksheetPlaceholder: true,
      },
    ],
  },
  {
    id: 'down-payment-assistance',
    number: 4,
    title: 'Down Payment Assistance',
    description: 'California DPA programs and eligibility',
    lessons: [
      {
        id: 'dpa-1',
        title: 'Types of DPA Programs',
        content: `# Types of Down Payment Assistance Programs

California offers numerous programs to help homebuyers with down payments and closing costs.

## Silent Second Mortgages

**How It Works:**
- Second loan for down payment
- No monthly payments
- Deferred until sale, refinance, or payoff

**Pros:**
- No immediate payment burden
- Can make homeownership possible sooner

**Cons:**
- Increases total debt
- Must be repaid eventually

## Forgivable Loans

**How It Works:**
- Loan forgiven after certain period (often 5-10 years)
- Must stay in home and keep it as primary residence

**Pros:**
- May become "free money" if you stay
- No monthly payments

**Cons:**
- Must meet residency requirements
- Forgiveness is often prorated

## Grants

**How It Works:**
- True gift that doesn't need to be repaid
- Often for first-time buyers or specific groups

**Pros:**
- No repayment required
- Truly reduces cost of buying

**Cons:**
- Often limited funds available
- May have strict eligibility requirements

## Repayable Second Mortgages

**How It Works:**
- Traditional second mortgage with payments
- Often at below-market rates

**Pros:**
- Can help you buy sooner
- May have favorable terms

**Cons:**
- Increases monthly payment
- Adds to overall debt

## CalHFA Programs

California Housing Finance Agency offers:
- MyHome Assistance Program
- CalHFA ZIP (Zero Interest Program)
- Various first mortgage options

*Availability and terms change frequently. Research current programs with your lender.*`,
      },
      {
        id: 'dpa-2',
        title: 'Eligibility Requirements',
        content: `# DPA Eligibility Requirements

Each program has specific requirements. Here are common eligibility factors.

## Income Limits

Most programs have maximum income limits:
- Often based on Area Median Income (AMI)
- May range from 80% to 150% of AMI
- Calculated for entire household

**Example:**
- AMI for LA County: ~$90,000 for a family of 4
- Program limit at 120% AMI: ~$108,000

## First-Time Homebuyer Status

Many programs require first-time buyer status:
- Haven't owned a home in past 3 years
- Some exceptions for displaced homemakers
- Some programs available to repeat buyers

## Property Requirements

- Must be primary residence
- Property type (single-family, condo, etc.)
- Maximum purchase price limits
- May require property to be in specific areas

## Credit Score Requirements

Minimum scores vary by program:
- Many require 640-680 minimum
- Better scores may qualify for better terms
- Some programs designed for lower scores

## Homebuyer Education

Many programs require:
- HUD-approved homebuyer education course
- In-person or online options
- Certificate of completion

## Occupancy Requirements

- Must occupy as primary residence
- Often for a minimum period (3-5 years)
- May not rent out the property

## How to Check Your Eligibility

1. Research programs available in your county
2. Check income limits for your household size
3. Verify property requirements
4. Ask your lender about compatible programs

*Program requirements change. Verify current requirements with program administrators.*`,
      },
      {
        id: 'dpa-3',
        title: 'California DPA Resource Library',
        content: `# California DPA Resource Library

Here's an overview of major California down payment assistance programs.

## Statewide Programs

### CalHFA MyHome Assistance
- Up to 3.5% of purchase price
- Junior loan with deferred payments
- Available with CalHFA first mortgage
- First-time homebuyer required

### CalHFA ZIP (Zero Interest Program)
- Up to 3% of purchase price
- Zero interest, no monthly payments
- Deferred until sale or refinance
- Income limits apply

### CalPLUS with ZIP
- Combines conventional loan with ZIP assistance
- Slightly higher interest rate
- Closing cost assistance included

## Regional/Local Programs

### GSFA (Golden State Finance Authority)
- Available statewide
- Up to 5.5% of loan amount
- First-time or repeat buyers
- Income limits vary

### CHDAP (County programs)
- Many counties offer their own DPA
- Terms and availability vary
- Check your specific county

### City Programs
- Los Angeles, San Francisco, San Diego have city-specific programs
- Often limited funds, competitive
- Check city housing department websites

## Employer Assistance Programs

Some large employers offer:
- Down payment grants
- Forgivable loans
- Closing cost assistance

Check with your HR department.

## How to Apply

1. Get pre-approved with a participating lender
2. Complete homebuyer education
3. Submit DPA application with loan application
4. Lender coordinates with DPA provider

*Programs change frequently. Research current options at time of purchase.*`,
      },
      {
        id: 'dpa-4',
        title: 'Choosing the Right DPA Program',
        content: `# Which DPA Should You Consider?

Choosing the right program depends on your specific situation.

## Questions to Ask Yourself

### Financial Situation
- How much assistance do I need?
- Can I afford a higher interest rate?
- How long do I plan to stay in the home?

### Eligibility
- Do I meet income limits?
- Am I a first-time buyer?
- Does the property qualify?

## Comparing Programs

| Factor | Silent Second | Forgivable | Grant |
|--------|--------------|------------|-------|
| Repayment | At sale/refi | If you move early | None |
| Monthly Payment | None | None | N/A |
| Interest | Often 0% | Often 0% | N/A |
| Restrictions | Varies | Must stay X years | Varies |

## Making Your Decision

**Choose Silent Second If:**
- You may move/refinance within 5 years
- You want maximum flexibility
- You don't mind eventual repayment

**Choose Forgivable Loan If:**
- You plan to stay 5+ years
- You want potential "free" money
- You can commit to requirements

**Choose Grant If:**
- You qualify (often stricter requirements)
- Funds are available
- You prefer true assistance

## Important Considerations

- **Interest rate impact:** Some programs require higher first mortgage rates
- **Layering:** Some programs can be combined
- **Processing time:** DPA adds complexity to your loan
- **Resale:** Understand restrictions if you sell

## Next Steps

1. Discuss options with your loan officer
2. Complete required homebuyer education
3. Apply for programs you're eligible for
4. Compare total costs including any rate adjustments

*Request a side-by-side comparison from your lender to see true costs.*`,
      },
    ],
  },
  {
    id: 'home-search-offers',
    number: 5,
    title: 'Home Search + Offer Strategy',
    description: 'Finding and winning your dream home',
    lessons: [
      {
        id: 'search-1',
        title: 'Defining Needs vs Wants',
        content: `# Defining Your Needs vs Wants

Before house hunting, clearly define what you need versus what you want.

## Needs (Non-Negotiables)

These are requirements you cannot compromise on:

**Location-Based:**
- School district
- Commute time/distance
- Proximity to family/work

**Property-Based:**
- Minimum bedrooms/bathrooms
- Accessibility requirements
- Space for specific needs (home office, etc.)

**Financial:**
- Maximum price/payment
- Monthly maintenance budget

## Wants (Nice-to-Haves)

Things that would be great but aren't essential:
- Updated kitchen
- Pool
- Large yard
- View
- Specific finishes

## Creating Your List

### Step 1: List Everything
Write down every feature you can think of.

### Step 2: Categorize
Separate into Must Have, Nice to Have, and Don't Want.

### Step 3: Prioritize
Rank your nice-to-haves in order of importance.

### Step 4: Reality Check
- Does your list match your budget?
- Are you being realistic about your market?
- What are you willing to compromise on?

## California Market Reality

In competitive markets, you may need to:
- Accept properties needing some updates
- Expand your geographic search
- Consider different property types
- Be patient

## Tips for Success

- Visit open houses to refine your criteria
- Understand what's available in your price range
- Be prepared to act quickly when you find the right home
- Trust your agent's market knowledge

*Your priorities may shift as you tour homes. Stay flexible where you can.*`,
      },
      {
        id: 'search-2',
        title: 'Writing Competitive Offers',
        content: `# Writing Competitive Offers in California

In competitive markets, how you structure your offer matters as much as the price.

## Key Offer Components

### Purchase Price
- Research comparable sales
- Consider list price vs market value
- Account for appraisal risk

### Earnest Money Deposit
- Shows serious intent
- Typically 1-3% in California
- Higher deposits can strengthen offers

### Contingencies
- Inspection contingency
- Appraisal contingency
- Loan contingency
- Sale of current home (weakens offer)

### Timeline
- Closing date (seller preference?)
- Inspection period length
- Response deadline

## Strategies for Competitive Markets

### Price Strategies
- Escalation clauses (if allowed)
- Round numbers vs. specific amounts
- Understand seller motivation

### Contingency Strategies
- Shorter inspection periods
- Pre-inspections (before offer)
- Appraisal gap coverage

### Terms That Matter
- Flexible closing date
- Rent-back options for sellers
- "As-is" offers (with inspection)

## What NOT to Do

- Don't waive inspection entirely (risky)
- Don't overextend financially
- Don't skip pre-approval
- Don't make lowball offers in hot markets

## The Role of Your Agent

A good buyer's agent will:
- Research the property and seller situation
- Advise on competitive price
- Help structure winning terms
- Negotiate on your behalf

*Work closely with your agent to craft the strongest offer for your situation.*`,
      },
      {
        id: 'search-3',
        title: 'Understanding Contingencies',
        content: `# Understanding Contingencies

Contingencies are conditions that must be met for the sale to proceed. They protect you as a buyer.

## Common Contingencies in California

### Inspection Contingency
- Allows professional inspection of property
- Typically 10-17 days in California
- You can request repairs, credits, or cancel
- Most important protection for buyers

### Appraisal Contingency
- Protects you if home appraises below purchase price
- Lender requires appraisal for loan
- Without this, you must cover the gap or forfeit deposit

### Loan Contingency
- Time to finalize your mortgage approval
- Typically 17-21 days
- Protects your deposit if financing falls through

### Title Contingency
- Ensures clean title (no liens or claims)
- Title company researches property history
- Usually not waived

### Sale of Current Home
- Contingent on selling your existing home
- Very weak in competitive markets
- Consider bridge loans instead

## Waiving Contingencies

**Risks of Waiving:**
- Inspection: Unknown property issues
- Appraisal: Paying more than market value
- Loan: Losing your deposit

**When Buyers Waive:**
- Very competitive markets
- Cash purchases
- Pre-inspections completed
- Strong financial position

## California-Specific Notes

- California contracts have specific timelines
- Contingencies are released in writing
- Failure to remove can constitute breach
- Always work with an experienced agent

## Balancing Risk and Competitiveness

Work with your agent to:
- Understand local market conditions
- Assess your risk tolerance
- Structure contingencies appropriately
- Know your options if issues arise

*Never waive contingencies without understanding the risks. Your protection is important.*`,
        worksheetPlaceholder: true,
      },
    ],
  },
  {
    id: 'escrow-process',
    number: 6,
    title: 'Escrow Process',
    description: 'Navigating from contract to close',
    lessons: [
      {
        id: 'escrow-1',
        title: 'Earnest Money and Opening Escrow',
        content: `# Earnest Money and Opening Escrow

Once your offer is accepted, escrow begins. Understanding this process is crucial.

## What is Escrow?

Escrow is a neutral third party that:
- Holds funds and documents
- Coordinates between all parties
- Ensures all conditions are met
- Facilitates the closing

## Earnest Money Deposit (EMD)

### What Is It?
- "Good faith" deposit showing commitment
- Typically 1-3% of purchase price in California
- Deposited within 3 days of acceptance

### Where Does It Go?
- Held in escrow account
- Applied to your down payment/closing costs at close
- Returned if you cancel within contingency periods

### When Can You Lose It?
- Canceling after removing contingencies
- Breach of contract
- Failure to perform

## Opening Escrow

### Timeline
- Escrow opens when offer is accepted
- Clock starts ticking on contingencies
- Typically 30-45 day escrow in California

### Your Responsibilities
- Deposit earnest money promptly
- Provide requested documents
- Respond to escrow communications
- Meet deadlines

## Working with Your Escrow Officer

Your escrow officer will:
- Provide escrow instructions
- Coordinate with lender and title
- Request necessary documents
- Prepare closing documents

## Tips for Smooth Escrow

1. Keep your escrow officer's contact info handy
2. Respond promptly to all requests
3. Read everything before signing
4. Ask questions if anything is unclear
5. Don't make major financial changes during escrow

*Escrow protects all parties. Work with your escrow officer to ensure a smooth process.*`,
      },
      {
        id: 'escrow-2',
        title: 'Wire Fraud Prevention',
        content: `# Wire Fraud Prevention: Protect Your Money

Wire fraud in real estate is a serious threat. Criminals target homebuyers for large wire transfers.

## How Wire Fraud Works

1. Criminals hack email accounts (yours, agent's, or escrow's)
2. They monitor communications about upcoming closings
3. They send fake wire instructions that look legitimate
4. You wire your down payment to the criminal's account
5. Money is gone within minutes, often unrecoverable

## Warning Signs

**Red Flags:**
- Wire instructions received by email
- Last-minute changes to wiring instructions
- Urgency or pressure to wire immediately
- Instructions from a different email address
- Typos or slightly different company names

## How to Protect Yourself

### Always Verify
- Call your escrow company using a known number (not from the email)
- Verify wire instructions before sending
- Confirm account numbers verbally

### Be Suspicious
- Question any changes to wire instructions
- Don't trust email alone
- Be extra cautious near closing

### Use Secure Methods
- Wire from your bank in person if possible
- Consider cashier's checks for smaller amounts
- Ask about escrow company's security practices

## What to Do If Targeted

**Immediately:**
1. Contact your bank to stop/reverse wire
2. Call your escrow company
3. Report to FBI at ic3.gov
4. File police report

**Time is Critical:**
- Act within minutes if possible
- Every hour reduces recovery chances

## Your Escrow Company's Role

Reputable companies will:
- Never email wire instructions alone
- Provide secure portal for information
- Verify your identity before discussing wiring
- Call you before closing to confirm

*Always verify wire instructions through a known phone number. One phone call can save your life savings.*`,
      },
      {
        id: 'escrow-3',
        title: 'Appraisal and Underwriting',
        content: `# The Appraisal and Underwriting Process

These are critical steps between contract and closing.

## The Appraisal

### What It Is
- Independent valuation of the property
- Required by your lender
- Protects you from overpaying

### How It Works
1. Lender orders appraisal
2. Appraiser visits property
3. Compares to recent sales
4. Determines market value

### Possible Outcomes
- **At or above purchase price:** Proceed normally
- **Below purchase price:** Options to negotiate or cover gap

### What If It Appraises Low?
- Renegotiate price with seller
- Pay the difference in cash (appraisal gap)
- Cancel using appraisal contingency
- Request a second appraisal (rare)

## Underwriting

### What It Is
- Lender's final review of your loan
- Verifies everything you provided
- Assesses risk of lending to you

### What They Review
- Income and employment (may re-verify)
- Assets and bank statements
- Credit (pulled again near closing)
- Property appraisal
- Title report

### Common Underwriting Conditions
- Explanations for credit inquiries
- Updated bank statements
- Additional documentation
- Verification letters

## Tips for Smooth Underwriting

**DO:**
- Respond to requests immediately
- Provide complete documentation
- Keep your loan officer informed

**DON'T:**
- Open new credit accounts
- Make large purchases
- Change jobs
- Move money around unnecessarily
- Co-sign for anyone

## Timeline
- Appraisal: 7-14 days after order
- Underwriting: 1-3 weeks
- Clear to close: Final loan approval

*Stay in close communication with your lender during this phase.*`,
      },
      {
        id: 'escrow-4',
        title: 'Rate Lock Strategies',
        content: `# Rate Lock Strategies

Understanding when and how to lock your interest rate can save you money.

## What is a Rate Lock?

- Guarantee of a specific interest rate
- For a specific time period (15-60+ days)
- Protects you from rate increases
- May cost money to extend

## When to Lock

### Factors to Consider
- Current rate environment (rising or falling?)
- Time until closing
- Your risk tolerance
- Lock costs and terms

### Common Strategies

**Lock Early:**
- If rates are rising
- If you can't afford higher payments
- If you're risk-averse

**Float (Don't Lock):**
- If rates are falling
- If you can handle higher rates
- If closing is far out

**Float Down:**
- Lock with option to get lower rate if market improves
- Usually costs more
- Best of both worlds (with a price)

## Lock Periods

| Period | Typical Cost | Best For |
|--------|--------------|----------|
| 15 days | Lower/free | Quick closings |
| 30 days | Standard | Most purchases |
| 45 days | Slightly higher | Longer escrows |
| 60+ days | Higher | New construction |

## What Happens If...

**Rates Go Up After You Lock:**
- You keep your locked rate
- Good decision in hindsight

**Rates Go Down After You Lock:**
- You're generally stuck at locked rate
- Unless you have float-down option
- Or willing to restart with new lender (risky timing-wise)

**Lock Expires Before Closing:**
- Extension fees apply
- May need to re-lock at current rates
- Can be costly

## Tips for Rate Locks

1. Understand your lender's lock policy
2. Get lock confirmation in writing
3. Plan closing timeline carefully
4. Ask about float-down options
5. Monitor rates if floating

*Discuss rate lock strategy with your loan officer based on your timeline and risk tolerance.*`,
        worksheetPlaceholder: true,
      },
    ],
  },
  {
    id: 'inspections-negotiation',
    number: 7,
    title: 'Inspections + Negotiation',
    description: 'Protecting your investment',
    lessons: [
      {
        id: 'inspect-1',
        title: 'Types of Inspections',
        content: `# Types of Home Inspections

Getting the right inspections protects you from costly surprises.

## General Home Inspection

**What It Covers:**
- Roof condition
- Foundation and structure
- Plumbing systems
- Electrical systems
- HVAC
- Appliances
- Doors, windows, walls

**Cost:** $300-$600 typically

**Required?** Highly recommended, not required

## Specialized Inspections

### Pest/Termite Inspection
- Wood-destroying pests
- Dry rot and fungus damage
- California has Section 1 and Section 2 items
- Often required by lenders

### Sewer Line Inspection
- Camera inspection of sewer lateral
- Especially important for older homes
- Can reveal costly repairs ($5,000-$25,000+)

### Roof Inspection
- Detailed roof assessment
- Important if general inspector notes concerns
- Helpful for older roofs

### Pool/Spa Inspection
- Equipment condition
- Surface condition
- Safety compliance

### Chimney Inspection
- Flue condition
- Fire safety
- Important if you'll use fireplace

## California-Specific Inspections

### Seismic/Foundation
- Earthquake preparedness
- Bolt foundations
- Cripple wall bracing

### Fire Safety (Wildfire Zones)
- Defensible space
- Roof materials
- Vegetation clearance

## Choosing Inspectors

**Look For:**
- Licensed and insured
- Experience with property type
- Good reviews
- Thorough reports with photos

**Avoid:**
- Inspectors recommended by seller
- Unusually cheap options
- Anyone who seems rushed

## Inspection Costs Budget

Plan for $500-$1,500 in total inspection costs depending on property type and condition.

*Never skip the general inspection. It's your best protection.*`,
      },
      {
        id: 'inspect-2',
        title: 'Negotiating Repairs',
        content: `# Negotiating After Inspection

The inspection revealed issues. Now what?

## Reviewing the Report

### Categorize Findings
- **Safety issues:** Must be addressed
- **Major systems:** Roof, HVAC, plumbing, electrical
- **Deferred maintenance:** Normal wear items
- **Cosmetic:** Paint, carpet, minor issues

### Focus On
- Safety hazards
- Items that affect value
- Expensive repairs
- Items that affect insurability

## Your Options

### 1. Request Repairs
- Seller fixes before closing
- Get contractor bids for comparison
- Specify licensed contractors
- Re-inspect after completion

### 2. Request Credits
- Closing cost credit
- Price reduction
- You handle repairs after closing
- Often preferred by sellers

### 3. Accept As-Is
- Common for minor issues
- May be strategic in competitive situations
- Know your risks

### 4. Cancel the Contract
- Use your inspection contingency
- Last resort option
- Deposit typically refunded

## What's Reasonable to Request?

**Typically Reasonable:**
- Safety issues (electrical, structural)
- Required repairs for loan approval
- Major defects not disclosed
- Items that significantly affect value

**Typically Unreasonable:**
- Cosmetic issues
- Normal wear and tear
- Items visible during showing
- Everything on the report

## Negotiation Tips

1. Be reasonable and prioritize
2. Get contractor estimates
3. Don't nickel-and-dime
4. Consider seller's perspective
5. Work with your agent on strategy

## California-Specific Notes

- Sellers must disclose known defects
- "As-is" doesn't mean no inspections
- Some items may require city permits
- Wood-destroying pest repairs often negotiated

*Work closely with your agent to negotiate effectively while maintaining a good relationship with the seller.*`,
      },
      {
        id: 'inspect-3',
        title: 'Inspection Day Checklist',
        content: `# Inspection Day Checklist

Make the most of your inspection by being prepared.

## Before the Inspection

**Schedule Wisely:**
- Allow 2-4 hours for general inspection
- Plan to attend personally
- Schedule specialized inspections if needed

**Prepare Questions:**
- Note concerns from showings
- List specific areas to check
- Bring your notes

## During the Inspection

### Follow the Inspector
- Ask questions as you go
- Take your own photos
- Learn about the home's systems
- Note maintenance recommendations

### Key Areas to Watch

**Exterior:**
- Roof condition
- Gutters and drainage
- Foundation visible areas
- Siding condition
- Grading around home

**Interior:**
- Water stains (ceilings, walls)
- Floor condition/levelness
- Window operation
- Door operation
- Signs of pests

**Systems:**
- Water heater (age, condition)
- HVAC (age, operation)
- Electrical panel (capacity, condition)
- Plumbing (water pressure, leaks)

## Questions to Ask

- How old is this system?
- What's the expected lifespan?
- Is this a safety concern?
- What would this cost to repair/replace?
- Is this normal for homes this age?

## Red Flags

**Be Concerned About:**
- Foundation cracks (horizontal especially)
- Water intrusion evidence
- Electrical panel issues
- Roof at end of life
- Active pest infestation

## After the Inspection

**Review the Report:**
- Read entire report thoroughly
- Note items for negotiation
- Get repair estimates if needed

**Decide Your Next Steps:**
- What repairs to request
- What to accept
- Whether to proceed

*Your inspection is your opportunity to learn about the home. Take full advantage of it.*`,
        worksheetPlaceholder: true,
      },
    ],
  },
  {
    id: 'insurance',
    number: 8,
    title: 'Insurance (CA)',
    description: 'California homeowners insurance essentials',
    lessons: [
      {
        id: 'insurance-1',
        title: 'Homeowners Insurance Basics',
        content: `# Homeowners Insurance Basics

Protecting your California home with the right insurance coverage.

## What Homeowners Insurance Covers

### Dwelling Coverage
- Structure of your home
- Attached structures (garage, deck)
- Based on rebuild cost, not purchase price

### Personal Property
- Furniture, electronics, clothing
- May have sub-limits for valuables
- Consider additional coverage for expensive items

### Liability Protection
- Injuries on your property
- Damage you cause to others
- Legal defense costs

### Additional Living Expenses
- Hotel costs if home is uninhabitable
- Increased food costs
- Temporary living expenses

## What's NOT Covered

**Standard Exclusions:**
- Flood damage (separate policy needed)
- Earthquake damage (separate policy in CA)
- Wear and tear
- Pest damage
- Intentional damage

## Coverage Amounts

### Dwelling Coverage
- Should cover full rebuild cost
- Get accurate estimate from insurer
- Not the same as market value

### Personal Property
- Typically 50-70% of dwelling coverage
- Actual cash value vs replacement cost
- Create home inventory

### Liability
- Minimum $100,000
- $300,000-$500,000 recommended
- Consider umbrella policy for more

## Deductibles

**How They Work:**
- Amount you pay before insurance kicks in
- Higher deductible = lower premium
- Common: $1,000-$2,500

*Review your policy carefully and ask questions about coverage gaps.*`,
      },
      {
        id: 'insurance-2',
        title: 'Shopping for Insurance',
        content: `# Shopping for Homeowners Insurance

Get the right coverage at the best price.

## When to Shop

**Timeline:**
- Start shopping when in contract
- Get quotes 2-3 weeks before closing
- Lender needs proof before funding

## Getting Quotes

### Information Needed
- Property address
- Year built
- Square footage
- Roof age and material
- Security features
- Claims history

### Where to Get Quotes
- Independent insurance agents
- Direct from insurers (State Farm, Allstate, etc.)
- Online comparison tools
- Your auto insurer (bundle discounts)

## Comparing Policies

**Look Beyond Price:**
- Coverage amounts
- Deductibles
- Exclusions
- Claim satisfaction ratings
- Financial strength of insurer

### Key Comparisons

| Factor | Policy A | Policy B |
|--------|----------|----------|
| Dwelling Coverage | | |
| Personal Property | | |
| Liability | | |
| Deductible | | |
| Annual Premium | | |

## California Challenges

### High-Risk Areas
- Wildfire zones may have limited options
- May need California FAIR Plan
- Higher premiums in certain areas

### Rising Premiums
- Non-renewals in fire-prone areas
- Shop around if rates increase significantly
- Consider mitigation for discounts

## Money-Saving Tips

1. Bundle with auto insurance
2. Increase deductible
3. Ask about discounts (security, new home, etc.)
4. Maintain good credit
5. Review annually and compare

## What Lenders Require

- Coverage at least equal to loan amount
- Lender listed as mortgagee
- Proof of payment at closing

*Get multiple quotes and read policies carefully before choosing.*`,
        worksheetPlaceholder: true,
      },
      {
        id: 'insurance-3',
        title: 'California-Specific Coverage',
        content: `# California-Specific Insurance Considerations

California has unique insurance needs due to natural disaster risks.

## Earthquake Insurance

### Is It Required?
- Not required by lenders
- Highly recommended in California
- You decide based on risk tolerance

### What It Covers
- Structural damage from earthquakes
- Personal property damage
- Additional living expenses

### Cost Factors
- Location (fault proximity)
- Home age and construction
- Foundation type
- Deductible chosen

### The CEA (California Earthquake Authority)
- State-run earthquake insurance
- Available through regular insurers
- Standardized coverage options

## Flood Insurance

### When Needed
- Required if in FEMA flood zone
- Consider even if not required
- Regular homeowners doesn't cover floods

### Where to Get It
- National Flood Insurance Program (NFIP)
- Private flood insurance
- Rates based on flood zone

## Wildfire Coverage

### California's Challenge
- Major insurers leaving high-risk areas
- California FAIR Plan as last resort
- Higher premiums in fire zones

### Fire Mitigation
- Defensible space requirements
- Fire-resistant materials
- May help with premiums

### California FAIR Plan
- Basic fire coverage
- Available when others decline
- Limited coverage amounts
- Often paired with DIC policy

## Tips for California Homeowners

1. **Don't rely solely on FEMA** for disasters
2. **Review coverage annually** as values change
3. **Document your belongings** with photos/video
4. **Understand your deductibles** (can be % of dwelling)
5. **Consider umbrella policy** for additional liability

## Questions to Ask Your Agent

- Am I in a wildfire/flood zone?
- What's excluded from my policy?
- What's my earthquake coverage options?
- Are there any sub-limits I should know about?

*California's insurance market is challenging. Work with a knowledgeable local agent.*`,
      },
    ],
  },
  {
    id: 'closing-first-30-days',
    number: 9,
    title: 'Closing + First 30 Days',
    description: 'Final steps and new homeowner checklist',
    lessons: [
      {
        id: 'closing-1',
        title: 'Understanding the Closing Disclosure',
        content: `# Understanding the Closing Disclosure

The Closing Disclosure (CD) is your final loan document showing all costs.

## When You'll Receive It

- At least 3 business days before closing
- Required by federal law (TRID)
- Review carefully and ask questions

## Key Sections to Review

### Loan Terms (Page 1)
- **Loan Amount:** Verify correct
- **Interest Rate:** Matches your lock
- **Monthly P&I:** As expected
- **Prepayment Penalty:** Should be "No"
- **Balloon Payment:** Should be "No"

### Projected Payments (Page 1)
- Principal and interest
- Mortgage insurance
- Estimated escrow (taxes, insurance)
- Total monthly payment

### Costs at Closing (Page 1)
- **Closing Costs:** Total fees
- **Cash to Close:** What you bring

### Loan Costs (Page 2)
- Origination charges
- Points (if any)
- Services you cannot shop for
- Services you can shop for

### Other Costs (Page 2)
- Taxes and government fees
- Prepaids (interest, insurance, taxes)
- Initial escrow deposit

## Comparing to Loan Estimate

Look for changes in:
- Interest rate (should match lock)
- Loan amount
- Closing costs (review any increases)
- Cash to close

### Allowed vs Not Allowed Changes

**Can Change:**
- Prepaids (based on closing date)
- Escrow amounts
- Recording fees

**Cannot Change:**
- Lender fees (with some exceptions)
- Transfer taxes
- Services you couldn't shop for

## Red Flags

- Interest rate doesn't match lock
- Unexpected fees
- Large increases from Loan Estimate
- Items you didn't agree to

## Questions to Ask

- Why did this fee increase?
- Is this the final Cash to Close?
- Are there any outstanding conditions?

*Review your CD carefully. You have 3 days to ask questions before closing.*`,
      },
      {
        id: 'closing-2',
        title: 'Final Walkthrough',
        content: `# The Final Walkthrough

Your last chance to verify the property's condition before closing.

## When It Happens

- 24-48 hours before closing
- After seller has moved out
- Before you sign final documents

## Purpose of the Walkthrough

- Verify agreed repairs were completed
- Confirm property condition unchanged
- Ensure seller removed belongings
- Check that fixtures remain
- Test systems one last time

## Walkthrough Checklist

### Verify Repairs
- All negotiated repairs completed
- Work done by licensed contractors
- Obtain any warranties/receipts

### Check All Rooms
- Walls, ceilings, floors
- Closets and storage areas
- No new damage

### Test Everything
- All light switches
- Electrical outlets
- Faucets and toilets
- Appliances
- Garage door
- HVAC system
- Doorbell

### Confirm Inclusions
- All appliances that should stay
- Window coverings
- Light fixtures
- Any other negotiated items

### Look For
- Water stains (new ones)
- Holes in walls (from moving)
- Damage from moving out
- Cleanliness (broom clean)

## If You Find Issues

### Minor Issues
- Document with photos
- May not delay closing
- Negotiate credit or holdback

### Major Issues
- Discuss with agent immediately
- May delay closing
- Could be breach of contract

### Options
- Seller credit at closing
- Holdback in escrow
- Delay closing for repairs
- Cancel (extreme cases)

## Tips for Success

1. Don't rush - take your time
2. Bring your walkthrough checklist
3. Test everything, assume nothing
4. Take photos of any concerns
5. Confirm utilities are working

*The walkthrough is your protection. Be thorough.*`,
        worksheetPlaceholder: true,
      },
      {
        id: 'closing-3',
        title: 'First 30 Days as a Homeowner',
        content: `# Your First 30 Days as a Homeowner

Congratulations! Here's how to get settled in your new home.

## Closing Day

### What to Bring
- Photo ID
- Cashier's check or wire confirmation
- Any outstanding documents requested

### What Happens
- Sign all documents (plan 1-2 hours)
- Lender funds the loan
- Title records with county
- You get the keys!

## First Week

### Immediate Tasks
- Change all locks (security)
- Set up utilities in your name
- Forward mail (USPS.com)
- Get homeowners insurance policy
- Locate main water shutoff
- Locate electrical panel
- Test smoke/CO detectors

### Safety Items
- Install/check smoke detectors
- Check CO detectors
- Get fire extinguisher
- Create emergency exit plan

## First Two Weeks

### Home Setup
- Deep clean before moving in
- Change HVAC filters
- Schedule any repairs
- Set up internet/cable
- Update address everywhere

### Important Contacts
- Emergency numbers posted
- Find local plumber
- Find local electrician
- Locate nearest ER
- Know HOA contacts (if applicable)

## First Month

### Ongoing Tasks
- Learn your home's systems
- Create home maintenance schedule
- Start emergency fund for repairs
- Review first mortgage statement
- Set up autopay for mortgage
- File homestead exemption (if applicable)

### Create Your Home Binder
- Closing documents
- Warranties and manuals
- Contractor contacts
- Insurance policies
- Home inventory

## Maintenance Schedule to Start

### Monthly
- Check HVAC filters
- Test smoke/CO detectors
- Check for leaks

### Quarterly
- HVAC maintenance
- Garage door lubrication
- Gutter cleaning (if needed)

### Annually
- HVAC service
- Roof inspection
- Water heater flush

## Congratulations!

You've completed the HomeReadyCA course and are now a California homeowner. Remember:
- Maintain your home regularly
- Keep an emergency fund
- Stay in touch with your real estate professional
- Enjoy your new home!

*Welcome to homeownership. You've earned it!*`,
        worksheetPlaceholder: true,
      },
    ],
  },
];

export function getModuleContent(moduleId: string): ModuleContent | undefined {
  return courseContent.find((m) => m.id === moduleId);
}

export function getLesson(moduleId: string, lessonId: string): Lesson | undefined {
  const module = getModuleContent(moduleId);
  return module?.lessons.find((l) => l.id === lessonId);
}

export function getNextLesson(
  moduleId: string,
  currentLessonId: string
): { moduleId: string; lessonId: string } | null {
  const moduleIndex = courseContent.findIndex((m) => m.id === moduleId);
  if (moduleIndex === -1) return null;

  const module = courseContent[moduleIndex];
  const lessonIndex = module.lessons.findIndex((l) => l.id === currentLessonId);

  if (lessonIndex < module.lessons.length - 1) {
    return {
      moduleId,
      lessonId: module.lessons[lessonIndex + 1].id,
    };
  }

  if (moduleIndex < courseContent.length - 1) {
    const nextModule = courseContent[moduleIndex + 1];
    if (nextModule.lessons.length > 0) {
      return {
        moduleId: nextModule.id,
        lessonId: nextModule.lessons[0].id,
      };
    }
  }

  return null;
}

export function getPreviousLesson(
  moduleId: string,
  currentLessonId: string
): { moduleId: string; lessonId: string } | null {
  const moduleIndex = courseContent.findIndex((m) => m.id === moduleId);
  if (moduleIndex === -1) return null;

  const module = courseContent[moduleIndex];
  const lessonIndex = module.lessons.findIndex((l) => l.id === currentLessonId);

  if (lessonIndex > 0) {
    return {
      moduleId,
      lessonId: module.lessons[lessonIndex - 1].id,
    };
  }

  if (moduleIndex > 0) {
    const prevModule = courseContent[moduleIndex - 1];
    if (prevModule.lessons.length > 0) {
      return {
        moduleId: prevModule.id,
        lessonId: prevModule.lessons[prevModule.lessons.length - 1].id,
      };
    }
  }

  return null;
}

export function getAllLessonIds(): string[] {
  return courseContent.flatMap((m) => m.lessons.map((l) => l.id));
}

export function getModuleLessonIds(moduleId: string): string[] {
  const module = getModuleContent(moduleId);
  return module?.lessons.map((l) => l.id) || [];
}
