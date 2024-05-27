"use client";
import ClipLoader from "react-spinners/ClipLoader";
import React, { FC } from "react";
const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner: FC<ILoader> = ({ loading }) => {
  return (
    <ClipLoader
      color={"#3b82f6"}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
interface ILoader {
  loading: boolean;
}
