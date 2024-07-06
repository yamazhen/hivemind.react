import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  children: string;
  icon?: IconProp;
  listicon?: IconProp;
  category?: boolean;
  active?: boolean;
}

const LeftMenuButton = ({ children, icon, listicon, category, active }: Props) => {
  const activeButton = `menu-btns ${active ? "active" : ""}`;

  if (!listicon && !category && icon != undefined) {
    return (
      <div className={activeButton}>
        <FontAwesomeIcon icon={icon} className="text-lg w-5" />
        <h1 className="capitalize">{children}</h1>
      </div>
    );
  } else if (listicon != undefined && category && icon == undefined)
    return (
      <div className="menu-btns justify-between">
        <h1 className="uppercase tracking-widest text-zinc-400 text-[12px]">{children}</h1>
        <FontAwesomeIcon icon={listicon} className="text-sm w-5" />
      </div>
    );
  else if (listicon != undefined && icon != undefined) {
    return (
      <li className="flex">
        <div className={`menu-btns ${listicon ? "justify-between" : ""}`}>
          <div className="flex gap-4 items-center">
            <FontAwesomeIcon icon={icon} className="text-lg w-5" />
            <h1>{children}</h1>
          </div>
          {listicon && (
            <FontAwesomeIcon icon={listicon} className="text-sm w-5" />
          )}
        </div>
      </li>
    );
  }
};

export default LeftMenuButton;
