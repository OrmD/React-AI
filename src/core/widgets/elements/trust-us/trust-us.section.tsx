import { FC } from 'react'
import cn from "@/core/shared/utils/cn";
import {TitleUI} from "@/core/shared/ui/title";
import TrustUsCarouselComponent from "@/core/widgets/elements/trust-us/elements/trust-us-carousel.component";

interface IHeroSectionProps {
  className?: string

}

const data={
    title:'Trusted by top data-driven teams',
}

const TrustUsSection: FC<IHeroSectionProps> = ({ className }) => {

    return (
      <section className={cn('h-full w-full',className)}>
          {data.title && <TitleUI as='h2' className='mb-5'  variant={'black'}>{data.title}</TitleUI>}
     <TrustUsCarouselComponent></TrustUsCarouselComponent>
      </section>
  )
}
export default TrustUsSection
