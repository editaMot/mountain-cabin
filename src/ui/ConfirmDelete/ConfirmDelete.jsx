import Button from "../Button/Button";
import "./ConfirmDelete.scss";

const ConfirmDelete = ({ resourceName, onConfirm, disabled, onCloseModal }) => {
  return (
    <div className="confirmation">
      <h3 className="confirmation__heading">Delete {resourceName}</h3>
      <p className="confirmation__text">
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>
      <div className="confirmation__btn">
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
