import {Grid} from "@mui/material";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import styles from "../styles/index.module.css";
export function index(){
  return (
      <div>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <div className={styles.containerLeft}>
              <div className={styles.text}>
                WELCOME
              </div>
              <div className={styles.description}>
                Stay organized and efficient with our sleek ToDo App. Easily manage tasks,
                set due dates, and track progress. Experience productivity like never before.
              </div>
            </div>
          </Grid>
          <Grid item lg={6} className={styles.griditem}>
            <div className={styles.containerRight}>
              <TextSnippetIcon style={{
                fontSize: 600,
                color: "white",
              }}/>
            </div>
          </Grid>
        </Grid>
      </div>
  )
}

export default index;