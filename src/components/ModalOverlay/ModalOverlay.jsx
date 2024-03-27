import Style from "./ModalOverlay.module.css";

export default function ModalOverlay({ onClose }) {
  return <div onClick={onClose} className={Style.container}></div>;
}
