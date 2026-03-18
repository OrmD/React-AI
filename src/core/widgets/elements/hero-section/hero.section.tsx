import { FC } from 'react'
import cn from "@/core/shared/utils/cn";
import {ImageUI} from "@/core/shared/ui/image";
import {TitleUI} from "@/core/shared/ui/title";
import {SubTitleUI} from "@/core/shared/ui/sub-title";
import {IconUI} from "@/core/shared/ui/icons";
import {ClearButtonUi} from "@/core/shared/ui/buttons/clear-button";

interface IHeroSectionProps {
  className?: string

}

const data={
    title:'Run Your Business',
    subTitle:'Find better suppliers. Secure real contracts. Build lasting partnerships.',
    description: '480.000+ Available Contracts Listed'
}

const HeroSection: FC<IHeroSectionProps> = ({ className }) => {

    return (
      <section className={cn('relative h-[600px] md:h-[800px] w-full',className)}>
          <ImageUI src='/hero-img.png' imageClassName='object-cover' className='z-[1]' fill/>
      <div className='relative z-[2] h-full flex flex-col items-center justify-end p-[90px] md:justify-center text-center  px-5'>
          {data.title && <TitleUI as='h1' className='leading-[60px] mb-3' variant={'white'}>{data.title}</TitleUI>}
          {data.subTitle && <SubTitleUI as='h1' className='mb-9' variant={'white'}>{data.subTitle}</SubTitleUI>}


          <div className='mb-4 flex rounded-[40px] h-[60px] md:h-[80px]  pl-[36px] border border-white  bg-[#ffffff10] backdrop-blur-[12px] py-2.5 gap-2 items-center w-full max-w-[1135px]'>
            <IconUI variant='search' className='h-5 w-5'/>
          <input
              id='search'
          className='w-full h-full text-[25px] focus-visible:outline-none  transition-colors disabled:cursor-not-allowed disabled:opacity-50 text-white'/>

              <ClearButtonUi variant='withBg' className='mr-4 text-white'>Search</ClearButtonUi>
          </div>
      <p className='text-white'>{data.description}</p>
      </div>
      </section>
  )
}
export default HeroSection
