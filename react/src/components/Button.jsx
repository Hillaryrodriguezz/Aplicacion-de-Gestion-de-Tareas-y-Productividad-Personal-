import './css/button.css';
import { BiSolidDashboard } from "react-icons/bi";
import { IoAddCircle } from "react-icons/io5";
import addIcon from './images/add-icon.png'


export function ButtonOptionSelected({ label, onClick, icon }) {
  return (
    <button className="button" onClick={onClick}>
      <span>{icon}</span>
      <b className="label">{label}</b>
    </button>
  )
}

export function ButtonOptionSelected2({ label, link, icon }) {
  return (
    <a className="button" href={link}>
      <span>{icon}</span>
      <b className="label">{label}</b>
    </a>
  )
}

export function ButtonLogout({ label, onClick, icon }) {
  return (
    <button className="button" onClick={onClick}>
      <span>{icon}</span>
      <b className="label logout__label">{label}</b>
    </button>
  )
}

export function ButtonNewTask({ buttonLabel }) {
  return (
    <>
      <button className="button-2">
        <div className='button-label'>{buttonLabel}
          <img src={addIcon} alt="" className='addIcon' /></div>
      </button>

    </>
  )
}
