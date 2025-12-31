import { Navbar } from 'components/blocks/navbar'
import Analytics from 'icons/lineal/Analytics'
import { NextPage } from 'next'
import Head from 'next/head'
import heroImg from '../../public/img/illustrations/3d5@2x.png'
import whyAmbit from '../../public/img/illustrations/hospitality-accounting-why-ambit.png'
import Footer from 'components/blocks/footer/Footer'
import SmartphoneTwo from 'icons/lineal/SmartphoneTwo'
import Shield from 'icons/lineal/Shield'
import color from 'utils/color'
import Invoice from 'icons/lineal/Invoice'
import Certificate from 'icons/lineal/Certificate'
import User from 'icons/lineal/User'
import ServiceCallOut, { AmbitService } from 'components/blocks/services/ServiceCallOut'
import ServicesHero from 'components/blocks/services/ServicesHero'
import ChallengeCallOut from 'components/common/ChallengeCallOut'
import TrustBox from 'components/common/TrustBox'
import Cta from 'components/common/cta'
import Wallet from 'icons/lineal/Wallet'
import { FAQ2 } from 'components/blocks/faq'
import { hospitalityAccountingFaqSet } from 'data/faq'

const trustSet = [
  [
    ' Hospitality-specific experience',
    ' POS + QuickBooks + payroll integration',
    ' 96% client retention',
    ' Transparent, no-setup-fee pricing'
  ]
]

const problemCallOutSet = [
  {
    id: 1,
    Icon: Wallet,
    color: color.yellow,
    title: 'Daily revenue reconciliation',
    cardColor: 'bg-pale-yellow',
    columnClass: 'col-md-5 offset-md-1 align-self-end',
    description: 'Daily revenue reconciliation from POS systems.'
  },
  {
    id: 2,
    color: color.aqua,
    Icon: Certificate,
    title: 'Payroll complexity',
    cardColor: 'bg-pale-aqua',
    columnClass: 'col-md-5',
    description: 'Payroll complexity (hourly staff, overtime, tips, seasonal workers).'
  },
  {
    id: 3,
    Icon: Invoice,
    color: color.red,
    title: 'Vendor invoice management',
    cardColor: 'bg-pale-red',
    columnClass: 'col-md-4',
    description: 'Vendor invoice management (food & beverage, supplies).'
  },
  {
    id: 4,
    Icon: Analytics,
    color: color.orange,
    title: 'High turnover → constant onboarding of staff.',
    cardColor: 'bg-pale-orange',
    columnClass: 'col-md-4',
    description: ''
  },
  {
    id: 5,
    Icon: Shield,
    color: color.violet,
    title: 'Tax credits and compliance',
    cardColor: 'bg-pale-violet',
    columnClass: 'col-md-4',
    description: 'Tax credits and compliance (FICA tip credit, sales tax, occupancy tax).'
  }
]

const ambitServiceSet: AmbitService[] = [
  {
    id: 1,
    title: 'Daily POS & Sales Reconciliation',
    description: 'Daily sales reconciliation, vendor invoice tracking, expense categorization.',
    Icon: SmartphoneTwo
  },
  {
    id: 2,
    title: 'Vendor Invoice Management',
    description: 'Group billing, vendor payments, dispute resolution.',
    Icon: Invoice
  },
  {
    id: 3,
    title: 'Payroll for Hourly/Tipped Staff',
    description: 'Multi-state compliance, tipped wage calculations, seasonal workforce management.',
    Icon: User
  },
  {
    id: 4,
    title: 'Weekly P&L Dashboards',
    description: 'Daily/weekly P & L, food/beverage cost ratios, occupancy dashboards.',
    Icon: Analytics
  },
  {
    id: 5,
    title: 'Occupancy Tax & Compliance',
    description: 'Payroll tax, FICA tip credit claims, occupancy tax compliance, annual returns.',
    Icon: Shield
  }
]

const HospitalityAccounting: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Hospitality Accounting Services | Bookkeeping & Payroll for Restaurants & Hotels – Ambit</title>
        <meta
          name="description"
          content="Ambit helps hotels, restaurants, and hospitality groups keep operations running smoothly and ensures financial clarity, so managers can stay focused on guest experience."
        />
        <meta
          name="keywords"
          content="hospitality accounting, restaurant bookkeeping, hotel accounting, POS reconciliation, F & B cost tracking, payroll for tipped staff."
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
          title="Outsource Hospitality Accounting & Bookkeeping – Focus on Guests, Not Paperwork."
          description="For restaurants, hotels, cafés, and hospitality groups handling high-volume daily transactions."
          imageSrc={heroImg}
        />
        {/* ========== pain points ========== */}
        <ChallengeCallOut title="Common Hospitality Accounting Challenges" problemCallOutSet={problemCallOutSet} />
        {/* ========== services ========== */}'
        <ServiceCallOut
          title="How Ambit Helps"
          description="Here’s how Ambit brings clarity to your hospitality finances"
          ambitServiceSet={ambitServiceSet}
        />
        {/* ========== Trust box ========== */}
        <TrustBox
          title="Why Ambit?"
          description="Our experts understand the unique accounting challenges hospitality businesses face — We manage your books, payroll, and compliance so you can focus on delivering great guest experiences"
          trustSet={trustSet}
          tagline="Trusted by hospitality firms across the U.S."
          featureImageSrc={whyAmbit}
          reverse
        />
        {/* ========== cta ========== */}
        <Cta
          title="Get Started Today"
          description="Spend less time balancing the books and more time delighting guests. Ambit is your hospitality accounting partner."
        />
        {/* ========== FAQ ========== */}
        <FAQ2 faqSet={hospitalityAccountingFaqSet} />
      </main>
      {/* ========== footer section ========== */}
      <Footer
        tagline="Your trusted partner for accurate, compliant hospitality
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

export default HospitalityAccounting
