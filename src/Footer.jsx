import React from 'react';
const year=new Date().getFullYear();
const Footer =()=>{
    return(
        <>
            <footer className='bg-secondary text-center w-100 text-white'>
                <p>{year} SK. All Rights Reserved | Terms and conditions.</p>
            </footer>
        </>
    )
}
export default Footer;