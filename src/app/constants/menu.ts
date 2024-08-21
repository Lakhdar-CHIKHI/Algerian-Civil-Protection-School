
import { RectangleStackIcon, AcademicCapIcon, NewspaperIcon, BuildingLibraryIcon, UsersIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

export const NavMenu = () => {

  const t = useTranslations();
  const MENU = [
    {
      name: t('nav_menu.home'),
      icon: RectangleStackIcon,
      href: "/",
    },
    {
      name: t('nav_menu.about_us'),
      icon: BuildingLibraryIcon,
      href: "/about",
    },
    {
      name: t('nav_menu.recruitment'),
      icon: UsersIcon,
      href: "/recruitment",
    },
    {
      name: t('nav_menu.training'),
      icon: AcademicCapIcon,
      href: "/training",
    },
    {
      name: t('nav_menu.news'),
      icon: NewspaperIcon,
      href: "/news",
    },
    // {
      //   name: "Contact Us",
      //   icon: ExclamationCircleIcon,
      //   href: "https://www.material-tailwind.com/docs/react/installation",
      // },
    ];

    return {MENU};
  }
