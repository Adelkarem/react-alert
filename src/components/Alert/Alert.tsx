import { X } from "lucide-react";

import { ReactNode } from "react";
import { AlertTypes } from "../../types";
import "../index.scss";

interface Iprops {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({
  type = "alert-default",
  icon,
  title,
  description,
  children,
}: Iprops) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          <span>{icon}</span>

          <h4>{title}</h4>
        </div>

        <X />
      </div>

      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
