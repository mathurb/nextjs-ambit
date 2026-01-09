import Accordion from 'components/reuseable/accordion'

export type Faq2Item = {
  no: string
  expand: boolean
  heading: string
  body: string
}

export type Faq2Props = { titleColor?: 'primary' | 'muted'; faqSet: Faq2Item[] }

// ============================================================

export default function FAQ2({ titleColor = 'primary', faqSet }: Faq2Props) {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-lg-11 col-xxl-10 mx-auto text-center">
            <h2 className={`fs-15 text-uppercase text-${titleColor} mb-3`}>FAQ</h2>
            <h3 className="display-4 mb-10 px-lg-12 px-xl-10 px-xxl-15">
              If you don't see an answer to your question, you can send us an email from our contact form.
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="accordion-wrapper" id="accordion">
              {faqSet.map((item) => (
                <Accordion key={item.no} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
