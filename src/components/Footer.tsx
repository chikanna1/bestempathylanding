import Link from "next/link";
import {
  faFacebookSquare,
  faInstagramSquare,
  faPinterest,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className=" px-[7%] py-[75px]">
      {/* Column 1 */}
      <div className="flex flex-col  py-10 text-center items-center">
        {/* Social Media Icons */}
        <div className="flex flex-row ">
          <Link
            target="_blank"
            className="text-md text-slate-600 p-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
            href="https://www.facebook.com/profile.php?id=100092714716515"
          >
            <FontAwesomeIcon className="" icon={faFacebookSquare} size="2x" />
          </Link>
          <Link
            target="_blank"
            className="text-md text-slate-600 p-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
            href="https://twitter.com/bestempathy"
          >
            <FontAwesomeIcon className="" icon={faTwitter} size="2x" />
          </Link>

          <Link
            target="_blank"
            className="text-md text-slate-600 p-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
            href="https://www.instagram.com/best.empathy/"
          >
            <FontAwesomeIcon className="" icon={faInstagramSquare} size="2x" />
          </Link>

          <Link
            target="_blank"
            className="text-md text-slate-600 p-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
            href="www.pinterest.com/bestempathy"
          >
            <FontAwesomeIcon className="" icon={faPinterest} size="2x" />
          </Link>
          <Link
            className="text-md text-slate-600 p-2 hover:text-slate-400 transition duration-500 rounded-md text-center"
            href="#"
          >
            <FontAwesomeIcon className="" icon={faLinkedin} size="2x" />
          </Link>
        </div>
        <h1 className="text-xl uppercase font-bold my-7">Best Empathy</h1>
        <p className="text-lg  font-bold  ">
          2578 Broadway #607 New York, NY 10025
        </p>
      </div>
    </div>
  );
}

export default Footer;
