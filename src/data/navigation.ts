const home = [{ id: 1, url: '/', title: 'Home' }]

const services = [
  {
    id: 1,
    url: '#',
    title: 'For CPAs',
    children: [
      {
        id: 11,
        url: '#',
        title: 'Accounting',
        children: [
          { id: 111, title: 'Accounting & Bookkeeping', url: '/services/accounting-bookkeeping' },
          { id: 112, title: 'Catch-up Bookkeeping', url: '/services/catch-up-bookkeeping' },
          { id: 113, title: 'Payroll', url: '/services/payroll' },
          { id: 114, title: 'Accounts Receivable', url: '/services/accounts-receivable' },
          { id: 115, title: 'Accounts Payable', url: '/services/accounts-payable' },
          { id: 116, url: '/services/invoice-processing', title: 'Invoice Processing' }
        ]
      },
      {
        id: 12,
        url: '#',
        title: 'Tax',
        children: [
          { id: 121, url: '/services/tax-service', title: 'Tax Planning & Advisory' },
          { id: 122, url: '/services/tax-return', title: 'Tax Return Preparation' }
        ]
      },
      { id: 13, url: '/services/financial-reporting', title: 'Financial Reporting', children: [] },
      { id: 14, url: '/services/dedicated-staffing', title: 'Dedicated Staffing', children: [] },
      { id: 15, url: '/remote-accounting-tax-solutions', title: 'Remote Staffing', children: [] }
    ]
  },
  {
    id: 2,
    url: '#',
    title: 'For Businesses',
    children: [
      { id: 21, url: '/services/bookkeeping-and-accounting', title: 'Bookkeeping And Accounting' },
      { id: 22, url: '/services/tax-services', title: 'Tax Services' },
      { id: 23, url: '/services/construction-accounting', title: 'Construction Accounting' },
      { id: 24, url: '/services/real-estate-accounting', title: 'Real Estate Accounting' },
      { id: 25, url: '/services/retail-accounting', title: 'Retail Accounting' },
      { id: 26, url: '/services/hospitality-accounting', title: 'Hospitality Accounting' }
    ]
  }
]

const company = [
  { id: 1, url: '/about-us', title: 'About Us', children: [] },
  { id: 2, url: '/faq', title: 'FAQ', children: [] },
  { id: 3, url: '/privacy-policy', title: 'Privacy Policy', children: [] }
]

export { home, services, company }
