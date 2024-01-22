import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

const App = () => {
  // const { openedFiles } = useSelector(({ tree }: RootState) => tree);

  return (
    <div>
      <div className="flex h-screen">
        <RecursiveComponent fileTree={fileTree} />
      </div>
    </div>
  );
};

export default App;
