import Button from "../../../ui/Button";
import Modal from "../../../ui/Modal";
import CreateCabinForm from "../CreateCabinForm";
import "./AddCabin.scss";

const AddCabin = () => {
  return (
    <div className="add-cabin">
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AddCabin;
