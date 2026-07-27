import { MapPin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Dribbble } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Volleyball } from 'lucide-react';
import { SendHorizontal } from 'lucide-react';



export default function Address() {
    return (
        <>
            <div className='lg:pt-10 lg:pb-20 lg:pl-20 p-2 md:p-7'>
                <div className=' bg-white rounded-4xl lg:pt-5 lg:pb-5  shadow-2xl lg:w-300 p-3 '>
                    <div className='lg:hidden block '>
                        <h1 className="lg:text-3xl md:text-4xl text-center lg:text-start font-bold  ">Let’s discuss your Project</h1>
                    </div>
                    <div className='flex justify-center lg:flex-row flex-col-reverse lg:gap-20'>
                        <div className='flex flex-col'>
                            <div className='lg:block hidden '>
                                <h1 className="lg:text-3xl text-center lg:text-start font-bold  ">Let’s discuss your Project</h1>
                            </div>
                            <div className="flex lg:justify-center flex-col-reverse lg:flex-col lg:gap-30 ">

                                <div className=''>
                                    <div className='lg:w-110 lg:pt-3 lg:text-lg  md:text-lg md:p-8 text-sm text-center
                                     lg:text-start p-4'>I'm available for freelance work. Drop me a line if
                                        you have a project you think I'd be a good fit for.</div>

                                    <div className='flex flex-col gap-5 lg:pt-8 pl-4'>




                                        <div className='flex md:flex-row lg:flex-col flex-col flex items-center lg:items-start md:p-3 md:gap-3'>
                                            <div className="  flex  items-center group/edit 
                                       rounded-2xl shadow-lg  hover:shadow-2xl duration-300 ease-in-out pb-3 w-60 gap-5 p-5 ">

                                                <span className="bg-cyan-100 w-12 p-3 rounded-lg group-hover/edit:bg-violet-700"
                                                ><MapPin /></span>
                                                <div className="flex flex-col">
                                                    <h1>Address:</h1>
                                                    <h1 className="font-bold ">kanya kumari</h1>
                                                </div>
                                            </div>
                                            <div className=" flex  items-center group/edit 
                                       rounded-2xl shadow-lg border border-white hover:shadow-2xl duration-300 ease-in-out p-3 w-60 gap-5 ">

                                                <span className="bg-cyan-100 w-12 p-3 rounded-lg group-hover/edit:bg-violet-700"><Mail /></span>
                                                <div>
                                                    <h1>My email:</h1>
                                                    <h1 className="font-bold ">gowsick@.com</h1>
                                                </div>
                                            </div>


                                            <div className="  flex  items-center group/edit 
                                        rounded-2xl shadow-lg border border-white hover:shadow-2xl duration-300 ease-in-out p-3 w-60 gap-5 ">

                                                <span className="bg-cyan-100 w-12 p-3 rounded-lg group-hover/edit:bg-violet-700"><Phone /></span>
                                                <div>
                                                    <h1>call me now:</h1>
                                                    <h1 className="font-bold ">1212122122</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 lg:pt-8 pt-4 self-center lg:self-start pb-5 ">
                                            <span className='hover:bg-violet-400 w-9 p-2'><Facebook /></span>
                                            <span className='hover:bg-violet-400 w-9 p-2'><Dribbble /></span>
                                            <span className='hover:bg-violet-400 w-9 p-2'> <Instagram /></span>
                                            <span className='hover:bg-violet-400 w-9 p-2'><Linkedin /></span>
                                            <span className='hover:bg-violet-400 w-9 p-2'><Volleyball /></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <div className='flex flex-col p-3'>
                                <p className="lg:w-120 text-sm lg:text-lg md:text-lg  md:p-5 text-center lg:text-start ">I'm always open to discussing product design work or partnership opportunities.</p>
                                <form className='order-1 lg:order-2 flex flex-col gap-8 pt-7 md:'>

                                    <input type="text" className="border-b-1 pb-5" placeholder="name*" />
                                    <input type="text" className="border-b-1 pb-5" placeholder="email*" />
                                    <input type="text" className="border-b-1 pb-5" placeholder="location*" />

                                    <div className="flex gap-2  ">
                                        <input type="text" className="border-b-1 pb-5 " placeholder="budget*" />
                                        <input type="text" className="border-b-1 pb-5 " placeholder="subject*" />
                                    </div>
                                    <span className="flex flex-col border-b-1 pb-5"><input type="text" placeholder="message*" /></span>

                                    <button className=" flex p-3 gap-4 btn-primary btn btn-xs xxs:btn-lg text-white bg-violet-700 w-40 justify-center items-center text-lg font-bold 
                                    rounded-sm hover:bg-violet-800 hover:scale-110 duration-300 ease-in-out self-center lg:self-start " >submit <SendHorizontal /></button>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}