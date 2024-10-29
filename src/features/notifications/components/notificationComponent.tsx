import { Divider, ListItem } from "@mui/material";

export default function NotificationComponent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <ListItem>
        <h4>{title}</h4>
        <p>{description}</p>
        <Divider />
      </ListItem>
    </div>
  );
}
