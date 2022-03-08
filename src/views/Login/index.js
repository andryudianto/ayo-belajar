import { Grid } from '@mui/material';
import TitlebarBelowImageList from '../../components/TitlebarBelowImageList';
import linkImages from '../../const/linkImages';

function Login() {
  return (
    <div className="container">
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid xs={6} item>
          <div className="left-side">
            <div>
              <TitlebarBelowImageList itemData={linkImages} />
            </div>
          </div>
        </Grid>
        <Grid xs={6} item>
          Right
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
