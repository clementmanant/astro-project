import styles from "./ErrorPage.module.css"
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = (props: { message: string; }) => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles.errorPage}>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    const {message} = props;
    return <div>{message}</div>;
  }
}

ErrorPage.defaultProps = {
  message: "Cette page n'existe pas."
};

export default ErrorPage