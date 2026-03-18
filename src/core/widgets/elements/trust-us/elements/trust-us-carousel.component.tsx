
import {FC} from 'react'
import {ImageUI} from "@/core/shared/ui/image";


interface ITrustUsSectionProps {
    className?: string
}

const data=[
    {
        link: '/images/trust-us-1.png'
    },
    {
        link: '/images/trust-us-2.png'
    },
    {
        link: '/images/trust-us-3.png'
    },
    {
        link: '/images/trust-us-4.png'
    },
    {
        link: '/images/trust-us-5.png'
    },
    {
        link: '/images/trust-us-6.png'
    },
]

const TrustUsCarouselComponent: FC<ITrustUsSectionProps> = ({ className }) => {


 
    return (
      <div className='flex justify-between gap-2 '>
          {
              data.map((item, index) => (
                  <ImageUI key={index} src={item.link} width={180} height={100} className='max-w-[120px] w-full h-[50px]' />
              ))
          }
      </div>
    )
}
export default TrustUsCarouselComponent
