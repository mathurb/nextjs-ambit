import { Navbar } from 'components/blocks/navbar'
import Analytics from 'icons/lineal/Analytics'
import { NextPage } from 'next'
import Head from 'next/head'
import i13 from '../../public/img/illustrations/i13@2x.png'
import whyAmbit from '../../public/img/illustrations/real-estate-accounting-why-ambit.png'
import Footer from 'components/blocks/footer/Footer'
import SmartphoneTwo from 'icons/lineal/SmartphoneTwo'
import Shield from 'icons/lineal/Shield'
import color from 'utils/color'
import Invoice from 'icons/lineal/Invoice'
import Certificate from 'icons/lineal/Certificate'
import User from 'icons/lineal/User'
import Cta from 'components/common/cta'
import TrustBox from 'components/common/TrustBox'
import ChallengeCallOut, { ProblemCallOut } from 'components/common/ChallengeCallOut'
import ServiceCallOut, { AmbitService } from 'components/blocks/services/ServiceCallOut'
import ServicesHero from 'components/blocks/services/ServicesHero'
import Savings from 'icons/lineal/Savings'
import { FAQ2 } from 'components/blocks/faq'
import { realEstateAccountingFaqSet } from 'data/faq'

const trustSet = [
  [
    '20+ years of outsourced accounting expertise.',
    'Experienced with property management, brokerage, and investor portfolios.',
    'Familiar with CAM reconciliations, rent rolls, and lender-ready reporting.',
    'Compliance with U.S. GAAP, IRS, and state property tax rules.',
    'ISO 27001–certified for data security and confidentiality.',
    'Transparent pricing, no long-term contracts, 96% client retention.'
  ]
]

const problemCallOutSet: ProblemCallOut[] = [
  {
    id: 1,
    Icon: Certificate,
    color: color.yellow,
    title: 'Rent',
    cardColor: 'bg-pale-yellow',
    columnClass: 'col-md-5',
    description: 'Rent rolls, lease tracking, and CAM reconciliations.'
  },
  {
    id: 2,
    color: color.aqua,
    Icon: Invoice,
    title: 'Loan',
    cardColor: 'bg-pale-aqua',
    columnClass: 'col-md-5',
    description: 'Loan covenant compliance & lender-ready reporting.'
  },
  {
    id: 3,
    Icon: Savings,
    color: color.red,
    title: 'Cash flow',
    cardColor: 'bg-pale-red',
    columnClass: 'col-md-4',
    description: 'Cash flow challenges from delayed tenant payments.'
  },
  {
    id: 4,
    Icon: Analytics,
    color: color.orange,
    title: 'Reconciliations',
    cardColor: 'bg-pale-orange',
    columnClass: 'col-md-4',
    description: 'Manual reconciliations across multiple properties.'
  }
]

const ambitServiceSet: AmbitService[] = [
  {
    id: 1,
    title: 'Bookkeeping & Job Costing',
    description: 'Rent & expense tracking, reconciliations, monthly reporting.',
    Icon: SmartphoneTwo
  },
  {
    id: 2,
    title: 'Accounts Payable & Receivable',
    description: 'Accounts Payable & Receivable for tenants and vendors.',
    Icon: Invoice
  },
  {
    id: 3,
    title: 'Payroll Outsourcing',
    description: 'Payroll management for staff and maintenance.',
    Icon: User
  },
  {
    id: 4,
    title: 'Financial Reporting',
    description: 'Dashboards for occupancy, revenue per sq. ft., expense ratios.',
    Icon: Analytics
  },
  {
    id: 5,
    title: 'Tax & Compliance',
    description: 'state/local property tax, 1031 exchange support.',
    Icon: Shield
  }
]

const RealEstateAccounting: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Real Estate Accounting Services | Outsourced Bookkeeping – Ambit</title>
        <meta
          name="description"
          content="Ambit helps real estate investors and property managers manage bookkeeping, payroll, and tax compliance efficiently."
        />
        <meta
          name="keywords"
          content="Real estate accounting services, property management accounting, rent roll management, CAM reconciliation, 1031 exchange support, payroll outsourcing."
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
          title="Outsource Real Estate Accounting & Bookkeeping – Focus on Properties, Not Paperwork."
          description="We help property managers, brokers, and investors manage rent, cash flow, and compliance effortlessly."
          imageSrc={i13}
        />
        {/* ========== pain points ========== */}
        <ChallengeCallOut title="Common Real Estate Accounting Challenges" problemCallOutSet={problemCallOutSet} />
        {/* ========== services ========== */}'
        <ServiceCallOut
          title="How Ambit helps"
          description="Here’s how Ambit brings clarity to your real estate finances"
          ambitServiceSet={ambitServiceSet}
        />
        {/* ========== Trust box ========== */}
        <TrustBox
          title="Why Ambit?"
          description="Our experts understand the unique accounting challenges real estate businesses face — From lease tracking to tax filings — we handle your books so you can focus on growth."
          trustSet={trustSet}
          tagline="Trusted by real estate firms across the U.S."
          featureImageSrc={whyAmbit}
          reverse
        />
        {/* ========== cta ========== */}
        <Cta
          title="Get Started Today"
          description="Focus on properties, not paperwork. Let Ambit streamline your real estate accounting"
        />
        {/* ========== FAQ ========== */}
        <FAQ2 faqSet={realEstateAccountingFaqSet} />
      </main>
      {/* ========== footer section ========== */}
      <Footer
        tagline="Your trusted partner for accurate, compliant real estate accounting."
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

export default RealEstateAccounting
