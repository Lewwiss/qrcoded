import { useState } from "react";

import Form from "./Form";
import Download from "./Download";
import Loading from "./Loading";

const Generator = () => {
    const [url, setUrl] = useState("");
    const [size, setSize] = useState(500);
    const [urlErr, setUrlErr] = useState(false);
    const [sizeErr, setSizeErr] = useState(false);
    const [status, setStatus] = useState(0);

    const Component = () => {
      switch(status) {
        case 1:
          return(<Loading
            changeStatus={setStatus} />);
        case 2:
          return(<Download
            changeUrl={setUrl}
            changeSize={setSize}
            changeStatus={setStatus}
            changeUrlErr={setUrlErr}
            changeSizeErr={setSizeErr}
            urlErr={urlErr}
            sizeErr={sizeErr} 
            url={url}
            size={size} />);
        default:
          return(<Form
            changeUrl={setUrl}
            changeSize={setSize}
            changeStatus={setStatus}
            changeUrlErr={setUrlErr}
            changeSizeErr={setSizeErr}
            urlErr={urlErr}
            sizeErr={sizeErr} 
            url={url}
            size={size} />);
      };
    };

    return (
      <div className="">
        { Component() }
      </div>
    );
};

export default Generator;