import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToast } from "../ToastProvider";

function ToastShelf() {
  const { toasts, dismissToast } = useToast();

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, msg, type }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            msg={msg}
            type={type}
            handleDismiss={() => dismissToast(id)}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
