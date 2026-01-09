import { Navbar } from 'components/blocks/navbar'
import Analytics from 'icons/lineal/Analytics'
import { NextPage } from 'next'
import Head from 'next/head'
import i14 from '../../public/img/illustrations/i14@2x.png'
import whyAmbit from '../../public/img/illustrations/retail-accounting-why-ambit.png'
import Footer from 'components/blocks/footer/Footer'
import SmartphoneTwo from 'icons/lineal/SmartphoneTwo'
import Shield from 'icons/lineal/Shield'
import color from 'utils/color'
import Invoice from 'icons/lineal/Invoice'
import User from 'icons/lineal/User'
import Cta from 'components/common/cta'
import TrustBox from 'components/common/TrustBox'
import ChallengeCallOut, { ProblemCallOut } from 'components/common/ChallengeCallOut'
import ServiceCallOut, { AmbitService } from 'components/blocks/services/ServiceCallOut'
import ServicesHero from 'components/blocks/services/ServicesHero'
import Wallet from 'icons/solid-mono/Wallet'
import BarChart from 'icons/lineal/BarChart'
import { FAQ2 } from 'components/blocks/faq'
import { retailAccountingFaqSet } from 'data/faq'

const trustSet = [
  [
    '20+ years helping U.S. businesses simplify accounting.',
    'Integrated with POS, e-commerce, and payroll platforms (QuickBooks, Xero, Shopify).',
    'Expertise in multi-state sales tax compliance.',
    '24/7 support to keep daily reconciliations current — even during busy seasons.',
    'Affordable pricing plans starting at $195/month.',
    'ISO 27001–certified data security and U.S.-trained staff.'
  ]
]

const problemCallOutSet: ProblemCallOut[] = [
  {
    id: 1,
    Icon: Invoice,
    color: color.yellow,
    title: 'Reconciliation',
    cardColor: 'bg-pale-yellow',
    columnClass: 'col-md-5',
    description: 'Inventory tracking & reconciliation across stores/e-commerce.'
  },
  {
    id: 2,
    color: color.aqua,
    Icon: Shield,
    title: 'Tax Compliance',
    cardColor: 'bg-pale-aqua',
    columnClass: 'col-md-5',
    description: 'Multi-state sales tax compliance.'
  },
  {
    id: 3,
    Icon: Wallet,
    color: color.red,
    title: 'Payroll',
    cardColor: 'bg-pale-red',
    columnClass: 'col-md-4',
    description: 'Payroll for hourly & seasonal staff.'
  },
  {
    id: 4,
    Icon: BarChart,
    color: color.orange,
    title: 'Fraud & shrinkage risk',
    cardColor: 'bg-pale-orange',
    columnClass: 'col-md-4',
    description: 'Fraud/shrinkage risk.'
  },
  {
    id: 5,
    Icon: Analytics,
    color: color.violet,
    title: 'Reporting',
    cardColor: 'bg-pale-violet',
    columnClass: 'col-md-4',
    description: 'Need for real-time reporting.'
  }
]

const ambitServiceSet: AmbitService[] = [
  {
    id: 1,
    title: 'Bookkeeping & Job Costing',
    description: 'Daily POS/e-commerce reconciliations.',
    Icon: SmartphoneTwo
  },
  {
    id: 2,
    title: 'Accounts Payable & Receivable',
    description: 'Vendor payments, supplier reconciliation, customer refunds.',
    Icon: Invoice
  },
  {
    id: 3,
    title: 'Payroll Outsourcing',
    description: 'Payroll management for staff & seasonal hires.',
    Icon: User
  },
  {
    id: 4,
    title: 'Financial Reporting',
    description: 'Trend dashboards: sales by category, margin analysis.',
    Icon: Analytics
  },
  {
    id: 5,
    title: 'Tax & Compliance',
    description: 'Sales tax filing across jurisdictions.',
    Icon: Shield
  }
]

const RetailAccounting: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Retail Accounting Services | Outsourced Retail Accounting & Bookkeeping for Retail Stores – Ambit</title>
        <meta
          name="description"
          content="Ambit helps retail stores, chains, and e-commerce brands simplify their finances."
        />
        <meta
          name="keywords"
          content="retail accounting services, outsourced bookkeeping, POS reconciliation, payroll outsourcing, e-commerce accounting, multi-location accounting."
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
          title="Outsource Retail Accounting & Bookkeeping, Manage Sales, Inventory & Payroll with Ease."
          description="Helping retail stores, chains, and e-commerce brands simplify their finances."
          imageSrc={i14}
        />
        {/* ========== pain points ========== */}
        <ChallengeCallOut title="Common Retail Accounting Challenges" problemCallOutSet={problemCallOutSet} />
        {/* ========== services ========== */}'
        <ServiceCallOut
          title="How Ambit helps"
          description="Here’s how Ambit brings clarity to your retail finances"
          ambitServiceSet={ambitServiceSet}
        />
        {/* ========== Trust box ========== */}
        <TrustBox
          title="Why Ambit?"
          description="Our experts understand the unique accounting challenges retail businesses face — We handle your books, payroll, and taxes - so you can focus on customers."
          trustSet={trustSet}
          tagline="Trusted by retail firms across the U.S."
          featureImageSrc={whyAmbit}
          reverse
        />
        {/* ========== cta ========== */}
        <Cta
          title="Get Started Today"
          description="Don’t let your back office slow your storefront. Ambit keeps your retail books in order."
        />
        {/* ========== FAQ ========== */}
        <FAQ2 faqSet={retailAccountingFaqSet} />
      </main>
      {/* ========== footer section ========== */}
      <Footer
        tagline="Your trusted partner for accurate, compliant Retail
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

export default RetailAccounting
