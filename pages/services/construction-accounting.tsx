import { Navbar } from 'components/blocks/navbar'
import Analytics from 'icons/lineal/Analytics'
import { NextPage } from 'next'
import Head from 'next/head'
import i8 from '../../public/img/illustrations/i8.png'
import whyAmbit from '../../public/img/illustrations/construction-accounting-why-ambit.png'
import Footer from 'components/blocks/footer/Footer'
import SmartphoneTwo from 'icons/lineal/SmartphoneTwo'
import Shield from 'icons/lineal/Shield'
import color from 'utils/color'
import Invoice from 'icons/lineal/Invoice'
import Savings from 'icons/lineal/Savings'
import Certificate from 'icons/lineal/Certificate'
import Balance from 'icons/lineal/Balance'
import User from 'icons/lineal/User'
import Cta from 'components/common/cta'
import TrustBox from 'components/common/TrustBox'
import ChallengeCallOut, { ProblemCallOut } from 'components/common/ChallengeCallOut'
import ServiceCallOut, { AmbitService } from 'components/blocks/services/ServiceCallOut'
import ServicesHero from 'components/blocks/services/ServicesHero'
import CloudComputing from 'icons/lineal/CloudComputing'
import { FAQ2 } from 'components/blocks/faq'
import { constructionAccountingFaqSet } from 'data/faq'

const trustSet = [
  [
    ' 20+ years of experience in construction accounting.',
    ' Up to 75% cost savings compared to in-house teams.',
    ' Professionals trained in U.S. GAAP, IRS, and ASC 606 standards.',
    ' 24/7 data-secure, cloud-based support.'
  ]
]

const problemCallOutSet: ProblemCallOut[] = [
  {
    id: 1,
    Icon: Certificate,
    color: color.yellow,
    title: 'Job Costing & WIP Reports',
    cardColor: 'bg-pale-yellow',
    columnClass: 'col-md-5',
    description: 'Stay compliant with ASC 606 and monitor profitability per project.'
  },
  {
    id: 2,
    color: color.aqua,
    Icon: Invoice,
    title: 'Payroll & Compliance',
    cardColor: 'bg-pale-aqua',
    columnClass: 'col-md-5',
    description: 'Manage prevailing wages, 1099s, and union reports accurately'
  },
  {
    id: 3,
    Icon: Balance,
    color: color.red,
    title: 'Retainage Tracking',
    cardColor: 'bg-pale-red',
    columnClass: 'col-md-4',
    description: 'Track withheld amounts to keep billing smooth.'
  },
  {
    id: 4,
    Icon: Analytics,
    color: color.orange,
    title: 'Cash Flow Fluctuations',
    cardColor: 'bg-pale-orange',
    columnClass: 'col-md-4',
    description: 'Forecast project payments to maintain steady cash flow'
  },
  {
    id: 5,
    Icon: Savings,
    color: color.violet,
    title: 'Expense Tracking',
    cardColor: 'bg-pale-violet',
    columnClass: 'col-md-4',
    description: 'Control overtime and equipment usage costs.'
  }
]

const ambitServiceSet: AmbitService[] = [
  {
    id: 1,
    title: 'Work-In-Progress (WIP) Traking',
    description: 'We monitor your ongoing projects, costs, and revenue.',
    why: 'Faster project closing and better margin control.',
    Icon: SmartphoneTwo
  },
  {
    id: 2,
    title: 'Job Costing & Budget Management',
    description: 'We help you plan, track, and manage costs for each project.',
    why: 'Avoid budget overruns and take smarter financial decisions.',
    Icon: Invoice
  },
  {
    id: 3,
    title: 'Payroll & Compliance Handling',
    description: ' We manage staff wages, contractor payments, and all compliance needs.',
    why: 'Ensures timely payments and prevents legal issues.',
    Icon: User
  },
  {
    id: 4,
    title: 'Tax Planning & Filings',
    description: ' We take care of GST, Income Tax, TDS, and other returns.',
    why: 'Saves money and keeps your business fully compliant.',
    Icon: Shield
  },
  {
    id: 5,
    title: 'Financial Reports & Performance Insights',
    description: ' We provide easy-to-understand reports on cash flow, profit, and project performance.',
    why: 'Helps you make quick, clear, and confident business decisions.',
    Icon: Analytics
  },
  {
    id: 6,
    title: 'Cloud Accounting & Audit Support',
    description: ' We maintain accurate cloud-based books and prepare all records for smooth audits.',
    why: 'Reduces errors, saves time, and gives you access from anywhere.',
    Icon: CloudComputing
  }
]

const ConstructionAccounting: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Construction Accounting Services | Outsourced Bookkeeping & Payroll for Contractors – Ambit</title>
        <meta
          name="description"
          content="Ambit helps construction firms streamline accounting with job costing, payroll compliance, WIP reporting, and tax support. Save up to 75% with our expert team."
        />
        <meta
          name="keywords"
          content="construction bookkeeping, outsourced construction accounting, job costing, WIP reports, payroll for contractors, ASC 606 compliance."
        />
      </Head>
      <header className="wrapper bg-soft-primary">
        <Navbar
          stickyBox={false}
          logoAlt="logo"
          navOtherClass="navbar-other ms-xl-4"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          social
          button={
            <a
              href="https://calendly.com/ambit-accounting/15min"
              title="Schedule a Meeting"
              className="btn btn-sm btn-primary rounded-pill fs-sm px-2 py-1"
            >
              Schedule a Meeting
            </a>
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero ========== */}
        <ServicesHero
          title="Build Your Projects — We’ll Build the Books."
          description="Simplify construction accounting with accurate job costing, payroll compliance, and real-time reporting — so you can focus on building, not bookkeeping."
          valueLine="Accounting support for construction firms"
          imageSrc={i8}
        />
        {/* ========== pain points ========== */}
        <ChallengeCallOut title="Common Construction Accounting Challenges" problemCallOutSet={problemCallOutSet} />
        {/* ========== services ========== */}
        <ServiceCallOut
          title="How Ambit helps"
          description="Here’s how Ambit brings clarity to your construction finances"
          ambitServiceSet={ambitServiceSet}
        />
        {/* ========== Trust box ========== */}
        <TrustBox
          title="Why Ambit?"
          description="Our experts understand the unique accounting challenges construction businesses face — from retainage to project-based cash flow."
          trustSet={trustSet}
          tagline="Trusted by construction firms across the U.S."
          featureImageSrc={whyAmbit}
          reverse
        />
        {/* ========== cta ========== */}
        <Cta
          title="Get Started Today"
          description="Don’t let financial complexity stall your next project. Ambit keeps your construction books job-ready."
        />
        {/* ========== FAQ ========== */}
        <FAQ2 faqSet={constructionAccountingFaqSet} />
      </main>
      {/* ========== footer section ========== */}
      <Footer
        tagline="Your trusted partner for accurate, compliant construction
        accounting."
        button={
          <a
            href="https://calendly.com/ambit-accounting/15min"
            title="Schedule a Meeting"
            className="btn btn-sm btn-primary rounded-pill fs-sm px-2 py-1"
          >
            Schedule a Meeting
          </a>
        }
      />
    </>
  )
}

export default ConstructionAccounting
