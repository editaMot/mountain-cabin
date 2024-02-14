import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../../ui/Button";
import PageHeader from "../../ui/PageHeader";
import "./PageNotFound.scss";

const PageNotFound = () => {
  const moveBack = useMoveBack();

  return (
    <main className="page-not-found">
      <div className="page-not-found__container">
        <PageHeader heading="The page you are looking for could not be found." />
        <Button onClick={moveBack} size="large" variation="text">
          &larr; Go back
        </Button>
      </div>
    </main>
  );
};

export default PageNotFound;
