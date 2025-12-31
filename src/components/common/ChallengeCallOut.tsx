import { ServiceCard3 } from 'components/reuseable/service-cards'
import { FC } from 'react'
import IconProps from 'types/icon'

export type ProblemCallOut = {
  id: number
  color: string
  title: string
  cardColor: string
  columnClass: string
  description: string
  Icon: FC<IconProps>
}

type ChallengeCallOutProps = {
  title?: string
  problemCallOutSet?: ProblemCallOut[]
}

const ChallengeCallOut: FC<ChallengeCallOutProps> = ({ problemCallOutSet, title }: ChallengeCallOutProps) => {
  return (
    <section className="wrapper bg-gray">
      <div className="container py-14 py-md-14">
        {title && <h2 className="display-4 mb-10 text-center">{title}</h2>}
        {problemCallOutSet && (
          <div className="row gx-lg-8 gx-xl-12 gy-10 justify-content-center">
            {problemCallOutSet.map(({ id, Icon, color, ...item }) => (
              <ServiceCard3 key={id} Icon={<Icon className={`icon-svg-md text-${color} mb-3`} />} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
export default ChallengeCallOut
