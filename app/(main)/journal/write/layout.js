import Link from "next/link";
import React, { Suspense } from "react";

import { BeatLoader } from "react-spinners";

const WriteLayout = ({ children }) => {
  return (
    
    <div className="container mx-auto">
        
      <div>
       
        <Link href="/Dashboard" className="text-purple-600 hover:text-purple-800 cursor-pointer">  ← Back to Dashboard </Link>
      </div>
      <Suspense fallback={<BeatLoader color="purple" width = {"100%"}/>}>{children}</Suspense>
    </div>
  );
};

export default WriteLayout;
