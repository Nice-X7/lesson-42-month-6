import React from "react";
import styles from "./contacts.module.css";

export const Contacts = () => {
  return (
    <div className={styles.google_map}>
      <div>
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D1%83%D0%BB.%20%D0%93%20%D0%9D%20%D0%A2%D1%80%D0%BE%D1%88%D0%B5%D0%B2%D0%B0,%208+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
    </div>
  );
};
