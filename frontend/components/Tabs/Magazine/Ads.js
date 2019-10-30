import React, { Component } from "react";

export class List extends Component {
  render() {
    return (
      <div>
        <h4 className="magazine-ads-title pb-3">تبلیغات</h4>
        <span className="text-muted">
          <img
            src="https://images.kojaro.com/2019/4/33677a70-1c37-4b11-bb17-cd25707029e4.gif"
            width="100%"
            className="my-2 rounded"
          />
          <img
            src="https://images.kojaro.com/2019/8/cc00fffb-ab70-44d4-b9c7-696b84e3d49e.gif"
            width="100%"
            className="my-2 rounded"
          />
          
        </span>
      </div>
    );
  }
}

export default List;
