
import "./InfoToolTip.css";

function InfoToolTip({ successMessage }) {
  return (
    <div
      className={`info-tooltip ${
        successMessage ? "info-tooltip_active" : ""
      } `}
    >
      {successMessage}
    </div>
  );
}
export default InfoToolTip;
