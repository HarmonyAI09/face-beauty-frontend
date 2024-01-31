/* eslint-disable react/jsx-no-undef */
import {
  Measurements,
  MeasureValues,
  MeasureScores,
  MeasureRanges,
  MeasureNotes,
  MeasureAdvices,
} from "../../utils/text";
import { MeasurementOverview } from "../MeasurementOverview";
import "./ReportTable.css";

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
    console.log(typeof(props.range));
  return (
    <div>
      {Array.isArray(props.range) && props.range.length >= 2
        ? props.range[0] + " - " + props.range[1]
        : props.range[0].charAt(0).toUpperCase() + props.range[0].slice(1)}
    </div>
  );
};

const MeasureRow = (props) => {
  return (
    <div className="measure_row">
      <Item width={widthList[0]}>
        <MeasurementOverview
          id={"43bdf7ec77a18ce6c879449265eeaee9"}
          index={props.index}
        />
      </Item>
      <Item width={widthList[1]}>
        <InlineText text={Measurements[props.index - 1]} />
      </Item>
      <Item width={widthList[2]}>
        <ValueText value={MeasureValues[props.index - 1]} />
      </Item>
      <Item width={widthList[3]}>{MeasureScores[props.index - 1]}</Item>
      <Item width={widthList[4]}><RangeText range={MeasureRanges[props.index - 1]}/></Item>
      <Item width={widthList[5]} type="text">
        {MeasureNotes[props.index - 1]}
      </Item>
      <Item width={widthList[6]} type="text">
        {MeasureAdvices[props.index - 1]}
      </Item>
    </div>
  );
};

const ReportTable = () => {
  const headerList = [
    "Image",
    "Measure Name",
    "Value",
    "Score",
    "Ideal Range",
    "Meaning",
    "Advice",
  ];
  const MeasureRows = [];
  const numberOfItems = 45;
  for (let index = 1; index <= numberOfItems; index++) {
    MeasureRows.push(<MeasureRow key={index} index={index} />);
  }
  return (
    <div className="report_table">
      <div className="table_header">
        {headerList.map((headerTitle, index) => (
          <Item width={widthList[index]} type="header">
            {headerTitle}
          </Item>
        ))}
      </div>
      <div className="table_content">{MeasureRows}</div>
    </div>
  );
};

export default ReportTable;
