import { createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  fileName: string;
  fileContent: string;
}

interface IInitialState {
  tabsFile: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  tabsFile: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {},
});

export default fileTreeSlice.reducer;
