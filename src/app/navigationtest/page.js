"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestpage = () => {
    /* Client navigation */
    const route = useRouter();
    const path = usePathname();
    const params = useSearchParams();
    
    const handleClick = () => {

    }
  return <button onClick={handleClick}>click me</button>;
};

export default NavigationTestpage;
