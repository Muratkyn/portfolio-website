"use client";
import React, {useState} from 'react'
import GithubIcon from '../public/github-icon.svg';
import LinkedinIcon from '../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    
  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative z-0 md:mt-36'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-2/3 -left-4 transform -translate-x-1/2 -translate-1/2'></div>      
        <div className='z-10'>
            <h5 className='tetx-xl font-bold text-white my-2'>Lets Connect! </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {""}
                I am currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, hit me up, 
                will get back to you asap! 
            </p>
              <div className='socials flex flex-row gap-2'>
                <Link href="https://www.linkedin.com/in/murat-koyun-69129727b/">
                    <Image src={LinkedinIcon} alt='icon' />
                </Link>
                <Link href="https://github.com/Muratkyn">
                    <Image src={GithubIcon} alt='icon' />
                </Link>
              </div>
        </div>
        <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label 
                    htmlFor="email" className='text-white font-medium text-sm block mb-2'>
                        Email:
                    </label>
                    <input 
                    type='email' 
                    name='email'
                    id='email' 
                    required 
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder='Ex: john.doe@gmail.com'>
                    </input>
                </div>
                
                <div className='mb-6'>
                    <label htmlFor="subject" className='text-white font-medium text-sm block mb-2'>
                        Subject:
                    </label>
                    <input 
                    name='subject'
                    type='text' 
                    id='subject' 
                    required 
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder='Job offer'>
                    </input>
                </div>
                <div className='mb-6'>
                    <label htmlFor="message" className='text-white font-medium text-sm block mb-2'>
                        Message:
                    </label>
                    <textarea 
                    name="message" 
                    id="message"
                    placeholder='Your message..'
                    className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                    cols="76" 
                    rows="10"></textarea>
                </div>
                <button
                type='submit'
                className='bg-cyan-800 hover:bg-cyan-600 text-white font-medium py-2.5 px-5 rounded-lg block w-full md:content-fit'>
                    Submit
                </button>

            </form>
            )}
        </div>
    </section>
  )
}

export default EmailSection