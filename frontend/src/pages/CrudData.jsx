import React from "react";
import { useState } from "react";
import {
  useAddNewCrudMutation,
  useDeleteCrudMutation,
  useGetCrudsQuery,
} from "../features/crud/crudSlice";

const CrudData = () => {
  const [name, setName] = useState("");
  const [deleteCrud] = useDeleteCrudMutation();
  const { data: crud, isLoading } = useGetCrudsQuery();
  const [addNewCrud] = useAddNewCrudMutation();
  const datasubmit = async () => {
    if (name) {
      await addNewCrud({ name: name });
      setName("");
    } else {
      alert("input required");
    }
  };
  const onDltCrud = async (id) => {
    await deleteCrud({ id });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="m-5 p-5 border-2 border-black"
      />
      <input
        type="submit"
        value="Submit"
        className="m-5 p-5 border-2 border-black cursor-pointer"
        onClick={datasubmit}
      />
      {!isLoading &&
        crud.ids.map((e) => (
          <p key={e}>
            {crud.entities[e].name}{" "}
            <button onClick={() => onDltCrud(e)}> Dlete</button>
          </p>
        ))}
    </div>
  );
};

export default CrudData;
