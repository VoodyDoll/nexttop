
import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";
// import Forma from './components/forma/Forma'
// import { GiSushis } from "react-icons/gi";
export default function Home() {

  return (
    <>
    
    {/* <center style={{marginTop:'25px'}}><Image width={250} height={250} src="/img/Hvong.jpg"/></center> */}
   
      <ul style={{marginTop:'12px',color:'black',fontSize:'1.5rem'}}>
        <li><Link href={'abaut'}>Главная</Link></li>
        <li><Link href={'/main/god'}>Пица</Link></li>
        <li><Link href={'/main/swing'}>Кухня фри</Link></li>
        <li><Link href={'/main/fetch'}>Суши</Link></li>
        <li><Link href={'/statics'}>Обеды</Link></li>
        <li><Link href={'/sushy'}>Sushy</Link></li>
        {/* <li><Link href={'/rump'}>Rump</Link></li> */}
      </ul>
      {/* <Forma/> */}
    </>

  );
}
