/* eslint-disable react/jsx-no-undef */
import { useContext, useEffect, useState } from "react";
import { MeasurementOverview } from "../MeasurementOverview";
import "./ReportTable.css";
import { UserContext } from "../../pages/home";

const widthList = ["80px", "10%", "7%", "5%", "8%", "30%", "40% - 80px"];
const Item = (props) => {
  const itemStyle = {
    width: `calc(${props.width})`,
    height: props.type === "header" ? "20px" : "74px",
    padding: props.type === "header" ? "" : "4px",
    alignItems: props.type === "text" ? "flex-start" : "center",
    justifyContent: props.type === "text" ? "flex-start" : "center",
  };
  return (
    <div className="cell" style={itemStyle}>
      {props.children}
    </div>
  );
};

const InlineText = (props) => {
  const textStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
    textOverflow: "ellipsis",
    textAlign: "center",
  };

  return (
    <div style={textStyle}>
      <span>{props.text}</span>
    </div>
  );
};

const ValueText = (props) => {
  return (
    <div>
      {typeof props.value === "number" && Number.isInteger(props.value)
        ? props.value
        : typeof props.value === "number"
        ? props.value.toFixed(2)
        : typeof props.value === "string"
        ? props.value.charAt(0).toUpperCase() + props.value.slice(1)
        : Array.isArray(props.value)
        ? props.value
            .map((item) => (typeof item === "number" ? item.toFixed(1) : item))
            .join(" : ")
        : ""}
    </div>
  );
};

const RangeText = (props) => {
  return (
    <div>
      {Array.isArray(props.range) && props.range.length >= 2
        ? props.range[0].toFixed(2) + " - " + props.range[1].toFixed(2)
        : props.range[0].charAt(0).toUpperCase() + props.range[0].slice(1)}
    </div>
  );
};

const MeasureRow = (props) => {
  const [item, setItem] = useState(props.item);
  const [id, setId] = useState(props.id);
  const [index, setIndex] = useState(props.index);
  useEffect(()=>{
    setItem(props.item);
    setId(props.id);
    setIndex(props.index);
  }, [props])
  return (
    <div className={`measure_row ${props.hide ? "blur" : ""}`}>
      <Item width={widthList[0]}>
        <MeasurementOverview id={id} index={index} />
      </Item>
      <Item width={widthList[1]}>
        <InlineText text={item.name} />
      </Item>
      <Item width={widthList[2]}>
        <ValueText value={item.value} />
      </Item>
      <Item width={widthList[3]}>{item.score.toFixed(2)}</Item>
      <Item width={widthList[4]}>
        <RangeText range={item.ideal} />
      </Item>
      <Item width={widthList[5]} type="text">
        {item.mean}
      </Item>
      <Item width={widthList[6]} type="text">
        {item.advice}
      </Item>
    </div>
  );
};

const ReportTable = () => {
  const headerList = [
    "Image",
    "Measurement Name",
    "Value",
    "Score",
    "Ideal Range",
    "Meaning",
    "Advice",
  ];
  const { oneProfile } = useContext(UserContext);
  const  [MeasureRows, setMeasureRows] = useState([]);
  useEffect(() => {
    setMeasureRows([]);
    const msRows = [];
    for (let index in oneProfile.front.measurements) {
      const item = oneProfile.front.measurements[index];
      if (item.score !== null) {
        msRows.push(
          <MeasureRow
            id={oneProfile.id}
            item={item}
            index={index}
            key={index}
            hide={index >= 7 && localStorage.getItem("userLevel") === "0"}
          />
        );
      }
    }
    for (let index in oneProfile.side.measurements) {
      const item = oneProfile.side.measurements[index];
      if (item.score !== null) {
        msRows.push(
          <MeasureRow
            id={oneProfile.id}
            item={item}
            index={parseInt(index, 10) + 22}
            key={parseInt(index, 10) + 22}
            hide={localStorage.getItem("userLevel") === "0"}
          />
        );
      } else {
      }
    }
    setMeasureRows(msRows);
  }, [MeasureRows, oneProfile]);
  return (
    <div className="report_table">
      <div className="table_header">
        {headerList.map((headerTitle, index) => (
          <Item width={widthList[index]} type="header" key={index}>
            {headerTitle}
          </Item>
        ))}
      </div>
      <div className="table_content">{MeasureRows}</div>
    </div>
  );
};

export default ReportTable;
