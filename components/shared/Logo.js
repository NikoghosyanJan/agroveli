import React from 'react';
import Image from "next/image";

export default function Logo({ featured = false }) {
  return (
    <div className="text-center">
      <Image src={featured ? "/assets/images/logo_featured.png" : "/assets/images/logo.png"} alt={"Logo"}
             width={featured ? 200 : 90} height={featured ? 60 : 28} quality={100}/>
    </div>
  );
}