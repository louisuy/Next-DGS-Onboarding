import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faLightbulb, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import SignIn from './components/signin';

export default function Home() {
  return (
    <main className="flex flex-row">
      <div className="w-1/2 h-svh p-12 bg-[#FCFBFF]">
        <span className="font-extrabold text-5xl">DGS</span>
        <p className="text-lg pt-24">Get your work done in an actual way.</p>
        <p className="pt-2 text-5xl font-bold">Welcome to the future<br/>of design</p>
        <ul className='py-20 max-w-xl'>
          <li className='flex flex-row items-start pb-10'>
            <FontAwesomeIcon icon={faMessage} className='w-5 mt-2 mx-4 text-green-500'/>
            <div>
            <p className='font-semibold text-xl'>Give Brief</p>
            <p>Create a project and share a brief within Studio to kickstart your design workflow.</p>
            </div>
          </li>
          <li className='flex flex-row items-start pb-10'>
            <FontAwesomeIcon icon={faLightbulb} className='w-4 mt-1 mx-4 text-yellow-300'/>
            <div>
            <p className='font-semibold text-xl'>Keep Track</p>
            <p>Then, let them takeover and do their magic - keep track and manage deliverables.</p>
            </div>
          </li>
          <li className='flex flex-row items-start pb-10'>
            <FontAwesomeIcon icon={faArrowsRotate} className='w-4 mt-2 mx-4 text-blue-500'/>
            <div>
            <p className='font-semibold text-xl'>Design Done</p>
            <p>Give feedback, make improvements and finalize deliverables to get any design done.</p>
            </div>
          </li>
        </ul>
      </div>
      <SignIn/>
    </main>
  );
}
