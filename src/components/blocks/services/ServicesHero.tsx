import NextLink from 'components/reuseable/links/NextLink'
import { FC } from 'react'
import { slideInDownAnimate } from 'utils/animation'
import Image, { ImageProps } from 'next/image'

type ServiceHeroProps = {
  title?: string
  description?: string
  valueLine?: string
  imageSrc?: Pick<ImageProps, 'src'>
}

const ServicesHero: FC<ServiceHeroProps> = ({ title, description, valueLine, imageSrc }: ServiceHeroProps) => {
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 bg-content text-white"
      style={{ backgroundColor: '#131a40' }}
    >
      <div className="container pt-18 pb-16">
        <div className="row gx-0 gy-12 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 content text-center text-lg-start">
            {title && (
              <h1 className="display-3 mb-5 text-white" style={slideInDownAnimate('600ms')}>
                {title}
              </h1>
            )}

            {description && (
              <p className="lead fs-lg lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
                {description}
              </p>
            )}

            {valueLine && (
              <p className="lead fs-lg lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
                {valueLine}
              </p>
            )}

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate('1200ms')}>
                <NextLink
                  title="Schedule a 15 Minute Consultation"
                  href="https://calendly.com/ambit-accounting/15min"
                  className="btn btn-lg btn-white rounded-pill me-2"
                />
              </span>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="swiper-container shadow-lg">
              <Image alt="Experts in your corner" className="rounded" src={imageSrc!} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
