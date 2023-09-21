import "./App.css";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h3" gutterBottom>
          {" "}
          Reminders
        </Typography>
        <Box
          border="primary"
          display="flex"
          flexDirection="column"
          alignItems="start"
        >
          <TextField
            label="Forget me not"
            multiline
            rows={4}
            sx={{ width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            mt: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Button
            variant="contained"
            startIcon={<span className="material-icons">add</span>}
          >
            Note
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
