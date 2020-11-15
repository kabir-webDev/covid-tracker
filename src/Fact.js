import React from "react";
import "./Fact.css";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1100,
    borderRadius: 15,
  },
}));

function Fact() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className="pokam">
      <div className="neu pp container">
        <div className="tab-rad">
          <div className={classes.root}>
            <div className="colors">
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab
                    style={{ color: "#8E44AD", fontWeight: 600 }}
                    label="Kids Corner"
                    {...a11yProps(0)}
                  />
                  <Tab
                    style={{ color: "#8E44AD", fontWeight: 600 }}
                    label="Youth Power"
                    {...a11yProps(1)}
                  />
                  <Tab
                    style={{ color: "#8E44AD", fontWeight: 600 }}
                    label="Aged"
                    {...a11yProps(2)}
                  />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <div style={{ fontSize: 20 }}>
                    The virus that causes COVID-19 is mainly <br /> transmitted
                    through droplets generated when an infected <br />
                    person coughs, sneezes, or exhales. These droplets are too
                    heavy <br />
                    to hang in the air, and quickly <br />
                    fall on floors or surfaces. You can be <br />
                    infected by breathing in the virus <br />
                    if you are within close proximity of someone who <br />
                    has COVID-19, or by touching a contaminated surface <br />
                    and then your eyes, nose or mouth.
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <div style={{ fontSize: 20 }}>
                    The virus that causes COVID-19 is mainly <br /> transmitted
                    through droplets generated when an infected <br />
                    person coughs, sneezes, or exhales. These droplets are too
                    heavy <br />
                    to hang in the air, and quickly <br />
                    fall on floors or surfaces. You can be <br />
                    infected by breathing in the virus <br />
                    if you are within close proximity of someone who <br />
                    has COVID-19, or by touching a contaminated surface <br />
                    and then your eyes, nose or mouth.
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <div style={{ fontSize: 20 }}>
                    The virus that causes COVID-19 is mainly <br /> transmitted
                    through droplets generated when an infected <br />
                    person coughs, sneezes, or exhales. These droplets are too
                    heavy <br />
                    to hang in the air, and quickly <br />
                    fall on floors or surfaces. You can be <br />
                    infected by breathing in the virus <br />
                    if you are within close proximity of someone who <br />
                    has COVID-19, or by touching a contaminated surface <br />
                    and then your eyes, nose or mouth.
                  </div>
                </TabPanel>
              </SwipeableViews>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fact;
