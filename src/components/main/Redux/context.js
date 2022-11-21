import React from "react";

const ContextData = React.createContext(null);

export const data = {
    settings: { notif: 'Enable', quality: 'Ultra High', audio3D: true, theme: false }
};

export default ContextData;