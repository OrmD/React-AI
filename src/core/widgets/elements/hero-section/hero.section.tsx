import { FC } from 'react'

interface IHeroSectionProps {
  className?: string

}

const HeroSection: FC<IHeroSectionProps> = ({ className }) => {
  return (
      <section className={className}>
          hero-section
      </section>
  )
}
export default HeroSection
