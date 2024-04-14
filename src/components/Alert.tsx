import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}
const Alert = ({ children, onClick }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button type="button" onClick={onClick} className="btn-close m-4" data-bs-dismiss="alert" aria-label="Close"></button>

    </div>
  );
};

export default Alert;
