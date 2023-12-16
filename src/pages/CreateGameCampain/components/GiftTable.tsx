import { Box, Button, IconButton } from "@mui/material";
import { MRT_ColumnDef, MaterialReactTable, useMaterialReactTable } from "material-react-table";
import { useMemo, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import AddGiftModal from "./Modal/AddGiftModal";
import EditGiftModal from "./Modal/EditGiftModal";
import DeleteGiftModal from "./Modal/DeleteGiftModal";

type Gift = {
  id: number;
  quantity: number;
  name: string;
  image: string; // url
};

const data = [
  {
    id: 1,
    quantity: 10,
    name: "name 1",
    image:
      "data:image/jpeg;base64,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",
  },
] as Gift[];
const GiftTable = () => {
  const [isOpenAddModal, setOpenAddModal] = useState(false);
  const [isOpenEditModal, setOpenEditModal] = useState(false);
  const [isOpenDelModal, setOpenDelModal] = useState(false);

  const columns = useMemo<MRT_ColumnDef<Gift>[]>(
    () => [
      {
        accessorFn: (row) => row.id,
        id: "id",
        header: "Id",
      },
      {
        accessorFn: (row) => row.name,
        id: "name",
        header: "Name",
      },
      {
        header: "Image",
        accessorKey: "image",
        Cell: (props) => {
          const { row } = { ...props };
          return (
            <div className="w-[50px] h-[50px]">
              <img className="w-full h-full" src={row.original.image} />
            </div>
          );
        },
      },
      {
        accessorFn: (row) => row.quantity,
        id: "quantity",
        header: "Quantity",
      },
      {
        header: "More",
        id: "more",
        Cell: (props) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { row } = { ...props };
          return (
            <div>
              <IconButton aria-label="edit" onClick={handleOpenEditModal}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={handleOpenDelModal}>
                <DeleteIcon />
              </IconButton>
            </div>
          );
        },
      },
    ],
    []
  );

  const handleAddGift = () => {
    setOpenAddModal(true);
  };

  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleOpenDelModal = () => {
    setOpenDelModal(true);
  };

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    renderTopToolbarCustomActions: () => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleAddGift}
          startIcon={<AddIcon />}
        >
          Add gift
        </Button>
      </Box>
    ),
  });
  return (
    <>
      <MaterialReactTable table={table} />
      <AddGiftModal isOpenModal={isOpenAddModal} setOpenModal={setOpenAddModal} />
      <EditGiftModal isOpenModal={isOpenEditModal} setOpenModal={setOpenEditModal} />
      <DeleteGiftModal isOpenModal={isOpenDelModal} setOpenModal={setOpenDelModal} />
    </>
  );
};

export default GiftTable;
