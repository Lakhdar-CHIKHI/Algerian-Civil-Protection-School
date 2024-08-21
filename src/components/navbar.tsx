import React, { useEffect } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  MenuList,
  ListItem,
  MenuHandler,
  Menu,
  MenuItem,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
  ChevronDownIcon,
  LanguageIcon,
} from "@heroicons/react/24/solid";
import { LANGUAGE_MENU } from "@/app/constants/languages";
import { getUserLocale, setUserLocale } from "@/services/locale";
import { defaultLocale, LanguageProps, Locale } from "@/config";
import { useRouter } from 'next/navigation';
import { NavMenu } from "@/app/constants/menu";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

function NavListMenu() {
  const [language, setLanguage] = React.useState<LanguageProps>(defaultLocale);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const router = useRouter();

  const onChangeLanguage = (language: LanguageProps) => {
    setUserLocale({key: language.key, lang: language.lang})
    setLanguage(language)
    router.refresh()
  }

  const fetchLanguage = async () => {
    try {
      const userLocale = await getUserLocale() as LanguageProps; 
      setLanguage(userLocale)
    } catch (error) {
      console.error('Error fetching user locale:', error);
    }
  };

  useEffect(() =>{
    // Call the async function
    fetchLanguage();
  },[])

  const renderItems = Object.values(LANGUAGE_MENU).map(
    ({ key, lang }, index) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg" onClick={()=> onChangeLanguage(LANGUAGE_MENU[key as Locale] as LanguageProps)}>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {lang}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" className="font-medium text-gray-900 gap-2">
            <ListItem
              className="flex items-center gap-2 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <LanguageIcon
                strokeWidth={2.5}
                className={'hidden h-4 w-4 transition-transform lg:block'}
              />
             {language.lang}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { MENU } = NavMenu();

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-2 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="blue-gray" className="text-lg font-bold">
          Material Tailwind
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden lg:block">
          <NavListMenu />
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <NavListMenu />
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
