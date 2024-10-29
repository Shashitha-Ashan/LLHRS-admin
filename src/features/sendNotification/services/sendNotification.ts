import { NotificationModel } from "../models/notificationModel";

const sendNotification = async (notification: NotificationModel) => {
  // simulate sending notification
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(
    `Notification sent: ${notification.title} - ${notification.message}`
  );
};

export default sendNotification;
