import { Link } from 'react-router-dom'
import HowtoReserve from './HowtoReseve'
import Schedule from './Schedule'
import Location from './Location'
import logoImg from '../assets/logo.png'
import './Reservation.css'


export default function Reservation() {
  return (
    <>
      <div className='hidden-div'></div>
      <div className='logo-div'>
        <Link to='/'><img className="logo" src={logoImg}/></Link>
      </div>

      <main>
        <h1>Reservation</h1>
        <section className='reservation'>
          <HowtoReserve />
        </section>

        <h1>Schedule</h1>
        <section className='schedules'>
          <Schedule />
        </section>

        <h1>Location</h1>
        <section className='locatin'>
          <Location />
        </section>
      </main>

      <div className='hidden-div'></div>
      <div className='hidden-div'></div>

    </>

  )
}