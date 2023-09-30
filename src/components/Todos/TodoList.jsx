import React from "react";
import TodoItem from "./TodoItem";
import useFetcher from "../../hook/useFetcher";
import { HttpRequests } from "../../http";
import Loading from "../Loading";

const TodoList = () => {
  const { data, loading, error } = useFetcher(HttpRequests.getTodos);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="todolisttext">
      {data?.map((todo) => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </div>
  );
};
export default TodoList;
