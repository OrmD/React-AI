import { FC, SVGProps, useMemo } from 'react'

import {IconFacebook, IconInstagram, IconLeaflet, IconSearch, IconTwitter, IconWatch} from '../assets'

export enum EVariant {

  SEARCH = 'search',
}

export type TVariant = (typeof EVariant)[keyof typeof EVariant] | string

interface IUseVariantProps {
  variant: TVariant
}

interface IUseVariantReturn {
  className: string
  icon: FC<SVGProps<SVGElement>>
}

const map = new Map<TVariant, { className: string; icon: FC<SVGProps<SVGElement>> }>([
  [
    EVariant.SEARCH,
    {
      className: 'h-5 text-white',
      icon: IconSearch,
    },
  ],

])

export const useVariant = ({ variant }: IUseVariantProps): IUseVariantReturn | null => {
  return useMemo(() => map.get(variant)!, [variant])
}
