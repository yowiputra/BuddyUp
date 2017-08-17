
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import RCSlider from 'rc-slider';

const createSliderWithTooltip = RCSlider.createSliderWithTooltip;
const Range = createSliderWithTooltip(RCSlider.Range);
const Handle = RCSlider.Handle;

class Slider extends Component {
  render () {

    const handle = (props) => {
      const { value, dragging, index, ...restProps } = props;
      return (
        <Tooltip
          prefixCls="rc-slider-tooltip"
          overlay={value}
          visible={dragging}
          placement="top"
          key={index}
        >
          <Handle value={value} {...restProps} />
        </Tooltip>
      );
    };

    const wrapperStyle = { width: 400, margin: 50 };
    return(
      <div>
        <div style={wrapperStyle}>
          <p>Please slide according to your seriousness</p>
          <RCSlider min={0} max={100} defaultValue={50} handle={handle} />
        </div>
      </div>

    );
  }
}

export default Slider;