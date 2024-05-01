import React, {useState} from "react";
import localesData from "./data.json";

const LanguageSelection = () => {
    const [currLocaleObj, setCurrLocaleObj] = useState(localesData[0]);

    const updateCurrLocaleObj = (e) => {
        const newLocale = localesData.filter(
            loc => loc.locale === e.target.value
        )[0];
        setCurrLocaleObj(newLocale);
    };
  return (
      <div className="vertical-center">
          <div className="haveMargin">
              <label className="labels">{currLocaleObj.language} : </label>
              <select
                  value={currLocaleObj.locale}
                  onChange={updateCurrLocaleObj}
              >
                  <option value="en-US">English</option>
                  <option value="nl-NL">Dutch</option>
                  <option value="es-ES">Spanish</option>
              </select>
          </div>
          <h2>{currLocaleObj.content}</h2>
      </div>
  );
};

export default LanguageSelection;
