import * as React from "react";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import CartItem from "./CartItem";
import { EmployeeResModel } from "../../models/base/EmployeeResModel";
import { Box, CircularProgress } from "@mui/material";

interface DataDisplayGridProps {
  listEmployee: EmployeeResModel[];
  loading: boolean;
}

export default function DataDisplayGrid({
  listEmployee,
  loading,
}: DataDisplayGridProps) {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={12}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {listEmployee.map((employee: EmployeeResModel, index: number) => (
            <Grid item>
              <CartItem data={employee} index={++index} />
            </Grid>
          ))}
        </Grid>
        {loading && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <CircularProgress />
            </Box>
          </>
        )}
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Grid container>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  row
                >
                  {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
