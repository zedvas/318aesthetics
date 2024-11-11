import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { socials } from "./data";

export default function Socials() {
  return (
    <div>
      {socials.map((social, index) => {
        return (
          <Link href={social.link}  key={index} className="flex justify-left items-center py-1 cursor-pointer">
            {social.mediaType === "instagram" ? (
              <FiInstagram />
            ) : social.mediaType === "tikTok" ? (
              <FaTiktok />
            ) : (
              ""
            )}
            <p className="ml-2 text-xs mt-[-2px] font-light">
              {social.handle}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
