import * as React from "react";
import styles from "./rangeSelector.module.css";
import { Range } from "react-range";

type RangeSelectorProps = {
  values: [number, number];
  setValues: (values: [number, number]) => void;
  label: string;
};

const RangeSelector = ({ values, setValues, label }: RangeSelectorProps) => {
  return (
    <div className={styles.main}>
      <p className={styles.label}>
        {label}: {values[0]} - {values[1]}
      </p>
      <Range
        label="Select your value"
        step={1}
        min={1}
        max={20}
        values={values}
        onChange={(values) => setValues([values[0], values[1]])}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              backgroundColor: "#999",
              borderRadius: "4px",
            }}
          />
        )}
      />
    </div>
  );
};

export default RangeSelector;
