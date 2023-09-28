export const TodoList = ({ id, title, completed, updateT, deleteT }) => {
  function deleteList(id) {
    return () => deleteT(id);
  }

  function updateList(id) {
    return () => updateT(id, true);
  }
  return (
    <>
      <li key={id}>{title}</li>
      <button onClick={deleteList(id)}>delete</button>
      <button onClick={updateList(id, completed)}>update</button>
    </>
  );
};
