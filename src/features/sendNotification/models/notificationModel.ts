export interface NotificationModel {
  title: string;
  message: string;
  type?: NotificationType;
}

export enum NotificationType {
  All,
  Students,
  Lecturers,
}
