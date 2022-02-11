import React from "react";
import { useSelector } from "react-redux";
import DataTable from "./dataTable";
import QrScanner from "./scanner";

const ScannerPage = () => {
  const { open } = useSelector((state) => state.scanner);

  return <>{!open ? <DataTable /> : <QrScanner />}</>;
};

export default ScannerPage;
