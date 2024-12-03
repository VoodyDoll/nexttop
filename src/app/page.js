
import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";
import Rump from './components/main/Rump'
import Hellow from './components/Hellow'
// import Forma from './components/forma/Forma'
// import { GiSushis } from "react-icons/gi";
export default function Home() {
console.log('data')
  return (
    <>
       Hanover
       <p className="text-2xl" >Pisario</p>
       <Rump/>
       <Hellow/>
    </>

  );
}
