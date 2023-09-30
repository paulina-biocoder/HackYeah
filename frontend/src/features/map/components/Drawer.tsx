import Modal from '@mui/material/Modal';
import { useState } from 'react';
import "./Drawer.scss";
import classNames from 'classnames';

function QuizModal(
    {
        onClose
    }: {
        onClose: () => void
    }) {
    return <Modal
        open={true}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <div></div>
    </Modal>
}
 

function DrawerItem(
    {
        onClick,
        iconSrc,
        active,
        label,
    }: { 
        onClick: () => void,
        iconSrc: string,
        active: boolean,
        label: string,
    }
) {

    return (
      <button onClick={onClick} className={classNames('drawer-item', active && "drawer-item--active")}>
        <img src={iconSrc} width={24} height={24} alt="" aria-hidden className='drawer-item-icon' />
        <span className='drawer-item-label'>{label}</span>
      </button>
    );
}

export function Drawer(){
    const [tab, setTab] = useState<"map" | "quiz" | "challenges" | "rewards" | "profile" | null>(null); 

    return <div className='drawer'>
        <DrawerItem active={tab === "map"} iconSrc={`/map${tab === "map" ? "-active" : ""}.svg`} label="Mapa" onClick={() => { setTab("map") }} />
        <DrawerItem active={tab === "quiz"} iconSrc={`/puzzle-piece${tab === "quiz" ? "-active" : ""}.svg`} label="Quizy" onClick={() => { setTab("quiz") }} />
        <DrawerItem active={tab === "challenges"} iconSrc={`/rocket-launch${tab === "challenges" ? "-active" : ""}.svg`} label="Wyzwania" onClick={() => { setTab("challenges") }} />
        <DrawerItem active={tab === "rewards"} iconSrc={`/trophy${tab === "rewards" ? "-active" : ""}.svg`} label="Nagrody" onClick={() => { setTab("rewards") }} />
        <DrawerItem active={tab === "profile"} iconSrc={`/user-circle${tab === "profile" ? "-active" : ""}.svg`} label="Profil" onClick={() => { setTab("profile") }} />
        {tab === "quiz" && <QuizModal onClose={() => { setTab(null) }} />}
        {tab === "challenges" && <QuizModal onClose={() => { setTab(null) }} />}
        {tab === "rewards" && <QuizModal onClose={() => { setTab(null) }} />}
        {tab === "profile" && <QuizModal onClose={() => { setTab(null) }} />}
    </div>
}