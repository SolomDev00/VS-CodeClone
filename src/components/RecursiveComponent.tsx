import { useState } from "react";
import { IFile } from "../interfaces";
import BottomArrowIcon from "./SVG/Bottom";
import RightArrowIcon from "./SVG/Right";
import RenderFileIcon from "./RenderFileIcon";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const { name, isFolder, children } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ** Handlers
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full mb-1 ml-1 cursor-pointer">
      <div className="flex items-center mb-1">
        {isFolder ? (
          <div className="flex items-center" onClick={toggle}>
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <RenderFileIcon
              isFolder={isFolder}
              filename={name}
              isOpen={isOpen}
            />
            <span className="ml-1">{name}</span>
          </div>
        ) : (
          <div className="flex items-center mr-2">
            <RenderFileIcon filename={name} />
            <span className="ml-1">{name}</span>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
