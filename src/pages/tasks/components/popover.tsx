import React, { useEffect, useRef, useState } from "react";
import { EditIcon, MenuIconSmall } from "../../../components/icons/icons";

interface PopoverProps {
  children: React.ReactElement;
  button?: JSX.Element | string | React.ReactElement;
}

interface PopoverOptionProp {
  name: string;
  onClick?: () => void;
  Icon?: React.ReactNode;
}
interface PopoverOptionsProp {
  children: React.ReactNode;
  color?: string;
}

export const PopoverButton: React.FC<PopoverProps> = ({
  children,
  button = <MenuIconSmall fill="white" width={20} height={20} />,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [triggerRect, setTriggerRect] = useState<DOMRect | null>(null);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (isVisible && triggerRef.current && popoverRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setTriggerRect(rect);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  const togglePopover = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      <button
        className="w-full px-3 py-1 text-left"
        onClick={togglePopover}
        ref={triggerRef}
      >
        {button}
      </button>

      {isVisible && (
        <div
          ref={popoverRef}
          className={`absolute ${
            windowWidth - (triggerRect?.right ?? 0) < 210 ? "right-0" : "left-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export const PopoverOptions: React.FC<PopoverOptionsProp> = ({
  children,
  color = "bg-gray-700",
}: PopoverOptionsProp) => {
  return (
    <div
      className={`flex w-48 
  flex-col gap-3 rounded-lg ${color} px-3 py-3`}
    >
      {children}
    </div>
  );
};

export const PopoverInnerButton = () => {
  return (
    <PopoverButton button={"Status"}>
      <PopoverOptions color="bg-slate-800">
        <PopoverOption name="TODO" />
        <PopoverOption name="In Progress" />
        <PopoverOption name="Completed" />
      </PopoverOptions>
    </PopoverButton>
  );
};

export const PopoverOption: React.FC<PopoverOptionProp> = ({
  name,
  onClick,
  Icon = <EditIcon stroke="white" width={20} height={20} />,
}: PopoverOptionProp) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full justify-between rounded-lg px-3 "
    >
      {name}
      <span>{Icon}</span>
    </button>
  );
};
