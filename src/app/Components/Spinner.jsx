import React from 'react';
import Image from 'next/image';

const Spinner = () => {
    return (
        <>
           
               
                <Image className='animate-spin' src="/spinn.png"  height={"100"} width={"100"} alt='logo'/>
             
          
        </>
    )
}

export default Spinner