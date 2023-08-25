import { useRouteError } from "react-router-dom";

export default function Error() {
  let error = useRouteError();
  console.error("Err", error);
  return <div>Error page</div>;
}
