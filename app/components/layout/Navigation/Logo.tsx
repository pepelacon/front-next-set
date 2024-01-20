import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";

const Logo: FC = () => {
  return (
    <div className="flex pb-8 items-center">
      <Link href="/" legacyBehavior>
        <a className="pl-10 pr-4 block">
          <Image
            src={logoImage}
            width={50}
            height={40}
            alt="Online Cinema"
            draggable={false}
          />
        </a>
      </Link>
      <p className="text-white font-semibold text-2lg pt-2">CinemaStar</p>
    </div>
  );
};

export default Logo;
