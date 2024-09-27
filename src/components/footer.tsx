import { NavMenu } from "@/app/constants/menu";
import { SOCIAL_MEDIA } from "@/app/constants/social_media";
import { AtSymbolIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Typography, Button, Input } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const t = useTranslations();
  const {MENU} = NavMenu();
  return (
    <footer className="mt-10 px-8 pt-5 lg:pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center gap-8 md:justify-between items-start">
          <div className="basis-1/2 text-center lg:text-start">
          <Image width={200} height={50} className="mb-6 container w-8/12 mx-auto lg:mx-0 lg:container-none lg:w-4/12 lg:items-start" src={t('logo')} alt={""} />
            <Typography
              className="font-medium text-sm lg:text-lg !text-gray-700 transition-colors hover:!text-gray-900 pb-6"
            >
              {t('footer.description')}
            </Typography>
            <hr/>
            <ul className="flex flex-wrap items-center justify-center md:justify-start basis-1/4">
              {MENU.map(({ name, href },idx) => (
                <li key={idx}>
                  <Typography
                    as="a"
                    href={href}
                    className={`py-1 font-medium !text-gray-900 transition-colors hover:!text-gray-900 ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {name}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-[24rem] sm:min-w-[24rem]">
            <Typography color="blue-gray" className="mb-6 font-bold text-3xl text-center lg:text-left">
              {t('footer.contact_us')}
            </Typography>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 flex-row">
                <MapPinIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                <Typography className="font-medium text-sm !text-gray-700 transition-colors hover:!text-gray-900">
                  {t('footer.address')}
                </Typography>
              </div>
              <div className="flex gap-3 flex-row">
                <PhoneIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                <Typography className="font-medium !text-gray-700 transition-colors hover:!text-gray-900">
                  {t('footer.phone')}
                </Typography>
              </div>
              <div className="flex gap-3 flex-row">
                <PhoneIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                <Typography className="font-medium !text-gray-700 transition-colors hover:!text-gray-900">
                  {t('footer.fax')}
                </Typography>
              </div>
              <div className="flex gap-3 flex-row">
                <AtSymbolIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                <Typography className="font-medium !text-gray-700 transition-colors hover:!text-gray-900">
                  {t('footer.email')}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} 
            {t('footer.copyright')}
          </Typography>

          <ul className="flex items-center">
            {SOCIAL_MEDIA.map(({name, icon}, idx) => (
              <li key={idx} >
                <Typography
                  as="a"
                  href="#"
                  className={`py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900`}
                >
                  <Image
                    width={300}
                    height={300}
                    src={icon}
                    alt={name}
                    className="h-full w-3/4 lg:w-2/4 object-contain"
                  />
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
