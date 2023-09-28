import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current); // la referencia de nuestro html actual 
    });

    return <div ref={ref} />;
}