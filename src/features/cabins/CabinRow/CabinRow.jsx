import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import TableActions from "../../../ui/TableActions";
import { formatCurrency } from "../../../utils/helpers";
import CreateCabinForm from "../CreateCabinForm";
import { useCreateCabin } from "../useCreateCabin";
import { useDeleteCabin } from "../useDeleteCabin";
import "./CabinRow.scss";

const CabinRow = ({ cabin }) => {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { id, image, name, maxCapacity, regularPrice, discount, description } =
    cabin;
  const { createCabin } = useCreateCabin();

  const handleDuplicate = () => {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  };

  return (
    <Table.Row>
      <img src={image} className="table-row__img" alt="cabin" />
      <div className="table-row__cabin">{name}</div>
      <div className="table-row__capacity">Fits up to {maxCapacity} guests</div>
      <div className="table-row__price">
        <span className="sm-device">Price</span> {formatCurrency(regularPrice)}
      </div>
      {discount ? (
        <div className="table-row__discount">
          <span className="sm-device">Discount</span> {formatCurrency(discount)}
        </div>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <Modal>
          <TableActions.Action>
            <TableActions.Toggle id={id} />
            <TableActions.List id={id}>
              <TableActions.Button
                icon={<HiSquare2Stack />}
                onClick={handleDuplicate}
              >
                Duplicate
              </TableActions.Button>

              <Modal.Open opens="update-cabin">
                <TableActions.Button icon={<HiPencil />}>
                  Update
                </TableActions.Button>
              </Modal.Open>

              <Modal.Open opens="delete-cabin">
                <TableActions.Button icon={<HiTrash />}>
                  Delete
                </TableActions.Button>
              </Modal.Open>
            </TableActions.List>

            <Modal.Window name="update-cabin">
              <CreateCabinForm cabinToUpdate={cabin} />
            </Modal.Window>

            <Modal.Window name="delete-cabin">
              <ConfirmDelete
                resourceName="cabin"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(id)}
              />
            </Modal.Window>
          </TableActions.Action>
        </Modal>
      </div>
    </Table.Row>
  );
};

export default CabinRow;
