
import { TextField, Button } from "@mui/material";
export default function Login() {
    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
            />
            <Button variant="contained">Login</Button>
        </div>
    );
}