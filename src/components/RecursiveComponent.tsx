import { useState } from "react";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import BottomArrowIcon from "./SVG/Bottom";
import RightArrowIcon from "./SVG/Right";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFileAction, setOpenedFilesAction } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { doesFileObjectExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { id, name, isFolder, children, content } = fileTree;
  const dispatch = useDispatch();
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // ** Handlers
  const toggle = () => setIsOpen(prev => !prev);
  const onFileClicked = () => {
    const exists = doesFileObjectExist(openedFiles, id);
    dispatch(setClickedFileAction({ filename: name, fileContent: content, activeTabId: id }));
    if (exists) return;
    dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
  };

  return (
    <div className="w-full mb-1 ml-1 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div onClick={toggle} className="flex items-center">
            <span className="mr-2">{isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}</span>

            <RenderFileIcon filename={name} isFolder isOpen={isOpen} />
            <span className="ml-2 text-lg">{name}</span>
          </div>
        ) : (
          <div className="flex items-center ml-6" onClick={onFileClicked}>
            <RenderFileIcon filename={name} />
            <span className="ml-2 text-lg">{name}</span>
          </div>
        )}
      </div>

      {isOpen && children && children.map((file, idx) => <RecursiveComponent fileTree={file} key={idx} />)}
    </div>
  );
};

export default RecursiveComponent;
