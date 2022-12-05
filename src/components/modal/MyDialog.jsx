import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const MyDialog = ({ isOpen, title, onOpenModalStateChangeEvent, children }) => {
  return (
    <Dialog open={isOpen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onOpenModalStateChangeEvent}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MyDialog;
