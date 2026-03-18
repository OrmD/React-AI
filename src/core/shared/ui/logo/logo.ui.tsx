'use client'

import {FC, memo} from "react";


const LogoUI:FC = () => (
     <div className='relative z-[2]  before:z-[-1] before:top-[3px] before:left-[-10px] before:absolute before:w-6 before:h-6 before:rounded-full before:bg-[#3276FA] text-[#1E1E1E] font-bold text-[30px] tracking-[-0.03em] uppercase '>
         TEST TASK
     </div>
 )
export default memo(LogoUI)