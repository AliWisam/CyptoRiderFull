import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
// components
//DATA
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));
function CardSocialTraffic() {
  const classes = useStyles();

  const [edit, setEdit] = useState(0);
  function editArtist() {
    setEdit(edit + 1);
  }
  function viewArtist() {}

  return (
    <>
      <div className="relative flex pb-5 flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="block w-full text-center  overflow-x-auto">
          {/* Projects table */}
          <form className={classes.root} autoComplete="on">
            <div>
              <TextField required id="standard-required" label="From" />
              <TextField required id="standard-required" label="To" />

              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue="today"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default CardSocialTraffic;
