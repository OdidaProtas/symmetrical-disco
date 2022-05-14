import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


export default function DashLoading() {
    return (
        <div>
            <Grid container mt={2} spacing={2} >
                <Grid item xs  >
                    <Paper sx={{ p: 2 }}  >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate eos dignissimos similique, natus adipisci minima maxime cumque reiciendis inventore doloribus tenetur eligendi, eius corporis ex eaque nisi ipsum minus?
                    </Paper>
                </Grid>
                <Grid item xs >
                    <Paper sx={{ p: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate eos dignissimos similique, natus adipisci minima maxime cumque reiciendis inventore doloribus tenetur eligendi, eius corporis ex eaque nisi ipsum minus?
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}