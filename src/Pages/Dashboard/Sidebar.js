import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";

export function DefaultSidebar() {
  return (
    <Card sx={{ height: "calc(96.3vh - 2rem)", width: "100%", maxWidth: "20rem", p: 4, boxShadow: 3 }}>
      <div sx={{ mb: 2, p: 4 }}>
        <Typography variant="h5" color="primary">
          Welcome
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemIcon>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemIcon>
          <ListItemText primary="E-Commerce" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InboxIcon className="h-5 w-5" />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          <Chip label="14" size="small" variant="outlined" color="primary" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PowerIcon className="h-5 w-5" />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </Card>
  );
}