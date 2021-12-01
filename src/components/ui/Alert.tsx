import { AlertCircle } from "../icons/AlertCircle";
import Check from "../icons/Check";

interface AlertPropTypes {
  type: "success" | "error";
  message: string;
  show: boolean;
}

export const Alert: React.FC<AlertPropTypes> = ({ type, message, show }) => {
  return (
    <div
      className={`alert absolute z-10 text-sm flex items-center justify-center ${
        type === "success" ? "bg-[#5FFF78]" : "bg-[#fa7575]"
      } rounded p-5 h-16 top-8 right-8`}
      style={{
        display: `${show ? "flex" : "none"}`,
      }}
    >
      {type === "success" ? (
        <Check width={20} height={20} />
      ) : (
        <AlertCircle width={20} height={20} />
      )}{" "}
      <p className="ml-4 font-semibold">{message}</p>
    </div>
  );
};
