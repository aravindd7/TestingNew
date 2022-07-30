import {Box, Typography} from '@mui/material';
import Menu from './Menu';
import TextInputs from './TextInputs';
function Landing() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row"}}>
      <Box sx={{ display: "flex", flexDirection: "column"}}>
        <Typography>Justo Vulputate Tortor Sem</Typography>
        <Typography>There is not a Black America and a White America and Latino America and Asian America - there's the United States of America. Born into poverty? Pull yourself up by your own bootstraps - even if you don't have boots.</Typography>
        <Typography>In the following century, men and women of faith waded into the battles over prison reform and temperance, public education and women's rights - and above all, abolition. We shouldn't use the obstacles we face as an excuse for cynicism. I've seen it in Illinois, when we provided health care to more children and moved more families from welfare to work.</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column"}}>
          <Menu />
          <Box>
            <Box sx={{ display: "flex", flexDirection: "row"}}>
                <Typography>Name</Typography>
                <Typography>Nomen Nescio</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row"}}>
                <Typography>Email</Typography>
                <Typography>nomen@example.com</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row"}}>
                <Typography>Phone</Typography>
                <Typography>+852 555 555</Typography>
            </Box>
          </Box>
          <Box>
             <Typography>
                Send me a message
             </Typography>
             <TextInputs />
          </Box>
      </Box>
    </Box>
  );
}

export default Landing;
