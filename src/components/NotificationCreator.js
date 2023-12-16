import { Store } from "react-notifications-component";

export const showNotification = (title, message, type) => {
    Store.addNotification({
      title: title || "Default Title",  // Use provided title or default to "Default Title"
      message: message || "Default Message",  // Use provided message or default to "Default Message"
      type: type || "default",  // Use provided type or default to "default"
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true
      }
    });
}
